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
    const haystack = [prompt.id, prompt.title, prompt.collection, prompt.category, prompt.operation, prompt.prompt, ...(prompt.tags || []), JSON.stringify(prompt.apae || {}), JSON.stringify(prompt.variants || [])].join(' ').toLowerCase();
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
    if (prompt.source) {
      const article = card.querySelector('article');
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.textContent = 'APAE, variants and engine prompts';
      details.append(summary);
      const note = document.createElement('p');
      note.textContent = prompt.compatibility_note;
      details.append(note);
      const pre = document.createElement('pre');
      pre.textContent = JSON.stringify({ apae: prompt.apae, negatives: prompt.negatives, variants: prompt.variants, engine_overrides: prompt.engine_overrides }, null, 2);
      details.append(pre);
      for (const [engine, override] of Object.entries(prompt.engine_overrides || {})) {
        if (!override.prompt) continue;
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = `Copy ${engine} prompt`;
        button.addEventListener('click', () => copyPrompt({ id: `${prompt.id} ${engine}`, prompt: override.prompt }));
        details.append(button);
      }
      const link = document.createElement('a');
      link.href = prompt.source.url;
      link.textContent = 'View pinned VPH source';
      details.append(link);
      article.append(details);
    }
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
    let vphUnavailable = false;
    try {
      const response = await fetch(`${RAW_BASE}/vph-import.json`);
      if (!response.ok) throw new Error('VPH data unavailable');
      const vph = await response.json();
      if (!Array.isArray(vph.prompts)) throw new Error('Invalid VPH data');
      state.prompts.push(...vph.prompts);
    } catch {
      vphUnavailable = true;
    }
    elements.count.textContent = `${state.prompts.length} cards`;
    populateFilters(); render();
    if (vphUnavailable) toast('VPH collection unavailable. Other collections remain usable.');
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
