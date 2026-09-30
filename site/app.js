const RAW_BASE = 'https://raw.githubusercontent.com/Wence412/chatgpt-image-prompt-packs/main';
const state = { prompts: [], query: '', collection: '', operation: '' };
const elements = {
  cards: document.querySelector('#cards'), empty: document.querySelector('#empty'),
  count: document.querySelector('#count'), summary: document.querySelector('#result-summary'),
  search: document.querySelector('#search'), collection: document.querySelector('#collection'),
  operation: document.querySelector('#operation'), toast: document.querySelector('#toast')
};

function normalizeLegacy(prompt) {
  return { ...prompt, collection: prompt.category, operation: 'generate', output: { aspect_ratio: 'Flexible', format: 'Prompt template' } };
}

function normalizeCard(card) {
  return { ...card, collection: card.pack };
}

function unique(values) { return [...new Set(values)].sort((a, b) => a.localeCompare(b)); }

function populateFilters() {
  unique(state.prompts.map(p => p.collection)).forEach(value => elements.collection.add(new Option(value, value)));
  unique(state.prompts.map(p => p.operation)).forEach(value => elements.operation.add(new Option(value, value)));
}

function filteredPrompts() {
  const query = state.query.toLowerCase().trim();
  return state.prompts.filter(prompt => {
    const haystack = [prompt.id, prompt.title, prompt.collection, prompt.operation, prompt.prompt, ...(prompt.tags || [])].join(' ').toLowerCase();
    return (!query || haystack.includes(query)) && (!state.collection || prompt.collection === state.collection) && (!state.operation || prompt.operation === state.operation);
  });
}

function toast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('visible');
  window.setTimeout(() => elements.toast.classList.remove('visible'), 1800);
}

async function copyPrompt(prompt) {
  try {
    await navigator.clipboard.writeText(prompt.prompt);
    toast(`${prompt.id} copied`);
  } catch {
    toast('Copy is unavailable. Select the prompt text manually.');
  }
}

function render() {
  const results = filteredPrompts();
  elements.cards.replaceChildren();
  elements.empty.hidden = results.length !== 0;
  elements.summary.textContent = `${results.length} of ${state.prompts.length} prompt cards`;
  for (const prompt of results) {
    const card = document.querySelector('#card-template').content.cloneNode(true);
    card.querySelector('.card-id').textContent = prompt.id;
    card.querySelector('.card-operation').textContent = prompt.operation;
    card.querySelector('.card-title').textContent = prompt.title;
    card.querySelector('.card-collection').textContent = prompt.collection;
    card.querySelector('.card-prompt').textContent = prompt.prompt;
    card.querySelector('.card-output').textContent = `${prompt.output.aspect_ratio} · ${prompt.output.format}`;
    card.querySelector('.copy').addEventListener('click', () => copyPrompt(prompt));
    elements.cards.append(card);
  }
}

function reset() {
  state.query = ''; state.collection = ''; state.operation = '';
  elements.search.value = ''; elements.collection.value = ''; elements.operation.value = '';
  render();
}

async function load() {
  try {
    const [legacy, capability] = await Promise.all([
      fetch(`${RAW_BASE}/prompts.json`).then(response => response.ok ? response.json() : Promise.reject()),
      fetch(`${RAW_BASE}/capability-packs-v2.json`).then(response => response.ok ? response.json() : Promise.reject())
    ]);
    state.prompts = [...legacy.prompts.map(normalizeLegacy), ...capability.packs.map(normalizeCard)];
    elements.count.textContent = `${state.prompts.length} cards`;
    populateFilters(); render();
  } catch {
    elements.count.textContent = 'Unavailable';
    elements.summary.textContent = 'The prompt data could not be loaded. Try again after the repository publishes.';
  }
}

elements.search.addEventListener('input', event => { state.query = event.target.value; render(); });
elements.collection.addEventListener('change', event => { state.collection = event.target.value; render(); });
elements.operation.addEventListener('change', event => { state.operation = event.target.value; render(); });
document.querySelector('#clear').addEventListener('click', reset);
document.querySelector('#empty-clear').addEventListener('click', reset);
load();
