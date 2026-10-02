const RAW_BASE = 'https://raw.githubusercontent.com/Wence412/chatgpt-image-prompt-packs/main';
const PAGE_SIZE = 24;
const state = { prompts: [], query: '', collection: '', operation: '', media: '', assets: [], visibleCount: PAGE_SIZE };
const elements = {
  cards: document.querySelector('#cards'), empty: document.querySelector('#empty'),
  count: document.querySelector('#count'), summary: document.querySelector('#result-summary'),
  search: document.querySelector('#search'), collection: document.querySelector('#collection'),
  operation: document.querySelector('#operation'), media: document.querySelector('#media'), toast: document.querySelector('#toast'),
  loadMore: document.querySelector('#load-more'), themeToggle: document.querySelector('#theme-toggle')
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
    const attachments = state.assets.filter(asset => asset.prompt_ids.includes(prompt.id));
    const hasMedia = !state.media || attachments.some(asset => asset.kind === state.media);
    const haystack = [attachments.map(a => [a.title, a.description, a.review_note].join(' ')).join(' '), prompt.id, prompt.title, prompt.collection, prompt.category, prompt.operation, prompt.prompt, ...(prompt.tags || []), JSON.stringify(prompt.apae || {}), JSON.stringify(prompt.variants || [])].join(' ').toLowerCase();
    return hasMedia && (!query || haystack.includes(query)) && (!state.collection || prompt.collection === state.collection) && (!state.operation || prompt.operation === state.operation);
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

function assetUrl(path) {
  // Only repository-hosted assets are allowed here, never private Drive download URLs.
  return /^assets\/(images\/[a-z0-9-]+(?:-preview)?\.webp|pdfs\/[a-z0-9-]+\.pdf)$/.test(path)
    ? new URL(path, document.baseURI).href : null;
}

function attachMedia(article, prompt) {
  for (const asset of state.assets.filter(item => item.prompt_ids.includes(prompt.id))) {
    const url = assetUrl(asset.path);
    if (!url) continue;
    if (asset.kind === 'image') {
      const figure = document.createElement('figure');
      figure.className = 'card-visual';
      const link = document.createElement('a');
      link.href = url; link.target = '_blank'; link.rel = 'noopener';
      link.setAttribute('aria-label', `Open full image: ${asset.title}`);
      const img = document.createElement('img');
      img.src = assetUrl(asset.preview_path) || url;
      img.alt = asset.alt; img.width = asset.width; img.height = asset.height;
      img.loading = 'lazy'; img.decoding = 'async';
      img.addEventListener('error', () => {
        link.hidden = true;
        const note = document.createElement('p');
        note.textContent = 'Image preview unavailable.';
        figure.prepend(note);
      }, { once: true });
      link.append(img); figure.append(link);
      const caption = document.createElement('figcaption');
      for (const text of [asset.title, `Linked template: ${prompt.id}`, `Original prompt: ${asset.original_prompt}`, `Engine: ${asset.engine}`, `Review: ${asset.review_status}`, asset.relationship]) {
        const line = document.createElement('p'); line.textContent = text; caption.append(line);
      }
      const details = document.createElement('details');
      const summary = document.createElement('summary'); summary.textContent = 'Reference notes and credit';
      details.append(summary);
      const note = document.createElement('p'); note.textContent = `${asset.review_note} Credit: ${asset.credit}.`;
      details.append(note); caption.append(details); figure.append(caption);
      article.prepend(figure);
    } else if (asset.kind === 'pdf') {
      const resource = document.createElement('aside'); resource.className = 'card-resource';
      const title = document.createElement('h3'); title.textContent = asset.title; resource.append(title);
      const note = document.createElement('p'); note.textContent = `${asset.description} Review: ${asset.review_status}`; resource.append(note);
      const view = document.createElement('a'); view.className = 'resource-button';
      view.href = url; view.target = '_blank'; view.rel = 'noopener'; view.textContent = 'View PDF';
      view.setAttribute('aria-label', `View PDF: ${asset.title}`); resource.append(view);
      const download = document.createElement('a'); download.className = 'resource-download';
      download.href = url; download.download = asset.path.split('/').pop(); download.textContent = 'Download PDF';
      resource.append(download); article.append(resource);
    }
  }
}

function render() {
  const results = filteredPrompts();
  const visibleResults = results.slice(0, state.visibleCount);
  elements.cards.replaceChildren();
  elements.empty.hidden = results.length !== 0;
  elements.summary.textContent = `${results.length} of ${state.prompts.length} prompt cards`;
  elements.loadMore.hidden = visibleResults.length >= results.length;
  elements.loadMore.textContent = `Show ${Math.min(PAGE_SIZE, results.length - visibleResults.length)} more prompts`;
  for (const prompt of visibleResults) {
    const card = document.querySelector('#card-template').content.cloneNode(true);
    card.querySelector('.card-id').textContent = prompt.id;
    card.querySelector('.card-operation').textContent = prompt.operation;
    card.querySelector('.card-title').textContent = prompt.title;
    card.querySelector('.card-collection').textContent = prompt.collection;
    card.querySelector('.card-prompt').textContent = prompt.prompt;
    card.querySelector('.card-output').textContent = `${prompt.output.aspect_ratio} · ${prompt.output.format}`;
    card.querySelector('.copy').addEventListener('click', () => copyPrompt(prompt));
    {
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.textContent = prompt.acceptance_criteria ? 'View full brief and review checks' : 'View full prompt';
      details.append(summary);
      const full = document.createElement('pre');
      full.textContent = prompt.prompt;
      details.append(full);
      if (prompt.acceptance_criteria) {
        const status = document.createElement('p');
        status.textContent = prompt.evidence?.tested ? 'Image evidence recorded. Review it before reuse.' : 'Untested recipe. Review the generated result before approval.';
        details.append(status);
      }
      for (const [heading, items] of [['Review checks', prompt.acceptance_criteria], ['Production tips', prompt.tips || []]]) {
        if (!items?.length) continue;
        const label = document.createElement('h3');
        label.textContent = heading;
        details.append(label);
        const list = document.createElement('ul');
        for (const item of items) {
          const li = document.createElement('li');
          li.textContent = item;
          list.append(li);
        }
        details.append(list);
      }
      card.querySelector('article').append(details);
    }
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
    attachMedia(card.querySelector('article'), prompt);
    elements.cards.append(card);
  }
}

function reset() {
  state.query = ''; state.collection = ''; state.operation = ''; state.media = ''; state.visibleCount = PAGE_SIZE;
  elements.search.value = ''; elements.collection.value = ''; elements.operation.value = ''; elements.media.value = '';
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
    try {
      const response = await fetch('media-library.json');
      if (!response.ok) throw new Error('Media data unavailable');
      const media = await response.json();
      if (!Array.isArray(media.assets)) throw new Error('Invalid media data');
      state.assets = media.assets.filter(asset => Array.isArray(asset.prompt_ids) && ['image', 'pdf'].includes(asset.kind) && assetUrl(asset.path));
    } catch {
      toast('Visual resources unavailable. Prompt collections remain usable.');
    }
    elements.count.textContent = `${state.prompts.length} cards`;
    populateFilters(); render();
    if (vphUnavailable) toast('VPH collection unavailable. Other collections remain usable.');
  } catch {
    elements.count.textContent = 'Unavailable';
    elements.summary.textContent = 'The prompt data could not be loaded. Try again after the repository publishes.';
  }
}

function updateFilter(key, value) { state[key] = value; state.visibleCount = PAGE_SIZE; render(); }
elements.search.addEventListener('input', event => updateFilter('query', event.target.value));
elements.collection.addEventListener('change', event => updateFilter('collection', event.target.value));
elements.operation.addEventListener('change', event => updateFilter('operation', event.target.value));
elements.media.addEventListener('change', event => updateFilter('media', event.target.value));
document.querySelector('#clear').addEventListener('click', reset);
document.querySelector('#empty-clear').addEventListener('click', reset);
elements.loadMore.addEventListener('click', () => { state.visibleCount += PAGE_SIZE; render(); });

function setTheme(theme) {
  document.body.dataset.theme = theme;
  const isLight = theme === 'light';
  elements.themeToggle.textContent = isLight ? 'Use dark theme' : 'Use light theme';
  elements.themeToggle.setAttribute('aria-pressed', String(isLight));
  localStorage.setItem('prompt-packs-theme', theme);
}

try { setTheme(localStorage.getItem('prompt-packs-theme') || 'dark'); } catch { setTheme('dark'); }
elements.themeToggle.addEventListener('click', () => setTheme(document.body.dataset.theme === 'light' ? 'dark' : 'light'));
load();
