import { Snippet, SnippetCategory } from '../types';

export interface CategoryColorConfig {
  id: SnippetCategory | 'all';
  name: string;
  shortLabel: string;
  icon: string;
  colorName: string;
  hex: string;
  badgeClass: string;
  badgeDot: string;
  borderAccent: string;
  hoverBorder: string;
  activeBtnClass: string;
}

export const CATEGORIES_CONFIG: CategoryColorConfig[] = [
  { 
    id: 'all', 
    name: 'Tutti gli Snippet', 
    shortLabel: 'Tutti',
    icon: 'Layers',
    colorName: 'stone',
    hex: '#78716c',
    badgeClass: 'bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-200 border-stone-300 dark:border-stone-700',
    badgeDot: 'bg-stone-500',
    borderAccent: '#78716c',
    hoverBorder: 'hover:border-stone-400',
    activeBtnClass: 'bg-stone-800 text-stone-50 dark:bg-stone-200 dark:text-stone-900 border-stone-800 dark:border-stone-200'
  },
  { 
    id: 'buttons', 
    name: 'Pulsanti (Buttons)', 
    shortLabel: 'Pulsanti',
    icon: 'MousePointerClick',
    colorName: 'amber',
    hex: '#f59e0b',
    badgeClass: 'bg-amber-100 text-amber-900 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300 dark:border-amber-800',
    badgeDot: 'bg-amber-500',
    borderAccent: '#f59e0b',
    hoverBorder: 'hover:border-amber-400 dark:hover:border-amber-600',
    activeBtnClass: 'bg-amber-600 text-white border-amber-600 shadow-sm'
  },
  { 
    id: 'cards', 
    name: 'Schede (Cards)', 
    shortLabel: 'Schede',
    icon: 'SquareCode',
    colorName: 'blue',
    hex: '#3b82f6',
    badgeClass: 'bg-blue-100 text-blue-900 dark:bg-blue-950/70 dark:text-blue-300 border-blue-300 dark:border-blue-800',
    badgeDot: 'bg-blue-500',
    borderAccent: '#3b82f6',
    hoverBorder: 'hover:border-blue-400 dark:hover:border-blue-600',
    activeBtnClass: 'bg-blue-600 text-white border-blue-600 shadow-sm'
  },
  { 
    id: 'navigation', 
    name: 'Navigazione & Menu', 
    shortLabel: 'Navigazione',
    icon: 'Compass',
    colorName: 'purple',
    hex: '#a855f7',
    badgeClass: 'bg-purple-100 text-purple-900 dark:bg-purple-950/70 dark:text-purple-300 border-purple-300 dark:border-purple-800',
    badgeDot: 'bg-purple-500',
    borderAccent: '#a855f7',
    hoverBorder: 'hover:border-purple-400 dark:hover:border-purple-600',
    activeBtnClass: 'bg-purple-600 text-white border-purple-600 shadow-sm'
  },
  { 
    id: 'forms', 
    name: 'Moduli & Input', 
    shortLabel: 'Moduli',
    icon: 'CheckSquare',
    colorName: 'emerald',
    hex: '#10b981',
    badgeClass: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    badgeDot: 'bg-emerald-500',
    borderAccent: '#10b981',
    hoverBorder: 'hover:border-emerald-400 dark:hover:border-emerald-600',
    activeBtnClass: 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
  },
  { 
    id: 'badges', 
    name: 'Badge & Indicatori', 
    shortLabel: 'Badge',
    icon: 'Award',
    colorName: 'rose',
    hex: '#f43f5e',
    badgeClass: 'bg-rose-100 text-rose-900 dark:bg-rose-950/70 dark:text-rose-300 border-rose-300 dark:border-rose-800',
    badgeDot: 'bg-rose-500',
    borderAccent: '#f43f5e',
    hoverBorder: 'hover:border-rose-400 dark:hover:border-rose-600',
    activeBtnClass: 'bg-rose-600 text-white border-rose-600 shadow-sm'
  },
  { 
    id: 'feedback', 
    name: 'Interattivi & Feedback', 
    shortLabel: 'Feedback',
    icon: 'Sparkles',
    colorName: 'cyan',
    hex: '#06b6d4',
    badgeClass: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-950/70 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800',
    badgeDot: 'bg-cyan-500',
    borderAccent: '#06b6d4',
    hoverBorder: 'hover:border-cyan-400 dark:hover:border-cyan-600',
    activeBtnClass: 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
  },
  { 
    id: 'layout', 
    name: 'Layout & Sezioni', 
    shortLabel: 'Layout',
    icon: 'LayoutTemplate',
    colorName: 'indigo',
    hex: '#6366f1',
    badgeClass: 'bg-indigo-100 text-indigo-900 dark:bg-indigo-950/70 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
    badgeDot: 'bg-indigo-500',
    borderAccent: '#6366f1',
    hoverBorder: 'hover:border-indigo-400 dark:hover:border-indigo-600',
    activeBtnClass: 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
  },
  { 
    id: 'other', 
    name: 'Altri Snippet', 
    shortLabel: 'Altri',
    icon: 'Code',
    colorName: 'slate',
    hex: '#64748b',
    badgeClass: 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700',
    badgeDot: 'bg-slate-500',
    borderAccent: '#64748b',
    hoverBorder: 'hover:border-slate-400 dark:hover:border-slate-600',
    activeBtnClass: 'bg-slate-700 text-white border-slate-700 shadow-sm'
  },
];

export function getCategoryConfig(category: SnippetCategory | 'all' | string): CategoryColorConfig {
  const found = CATEGORIES_CONFIG.find((c) => c.id === category);
  if (found) return found;
  return CATEGORIES_CONFIG[CATEGORIES_CONFIG.length - 1]; // fallback to 'other'
}

export const DEFAULT_SNIPPETS: Snippet[] = [
  // --- BUTTONS (AMBER) ---
  {
    id: 'html-glow-button',
    title: 'Pulsante Glow con Gradiente',
    description: 'Pulsante moderno con gradiente animato, ombra colorata ed effetto hover scalato.',
    category: 'buttons',
    type: 'html',
    tags: ['button', 'gradient', 'glow', 'tailwind', 'cta'],
    path: '/snippets/buttons/glow-button.html',
    createdAt: '2026-09-08',
    code: `<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-amber-500 to-orange-600 group-hover:from-amber-500 group-hover:to-orange-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 cursor-pointer">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-[10px] group-hover:bg-opacity-0 font-semibold tracking-wide">
    ✨ Gradient Glow Button
  </span>
</button>`
  },
  {
    id: 'html-button-group',
    title: 'Gruppo Pulsanti Segmentati',
    description: 'Controllo a segmenti con pulsanti affiancati e stato attivo evidenziato.',
    category: 'buttons',
    type: 'html',
    tags: ['button', 'group', 'segmented', 'toolbar'],
    path: '/snippets/buttons/button-group.html',
    createdAt: '2026-09-08',
    code: `<div class="inline-flex rounded-xl shadow-xs border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-1" role="group">
  <button type="button" class="px-3.5 py-1.5 text-xs font-semibold text-white bg-amber-600 rounded-lg shadow-xs transition cursor-pointer">
    Giorno
  </button>
  <button type="button" class="px-3.5 py-1.5 text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition cursor-pointer">
    Settimana
  </button>
  <button type="button" class="px-3.5 py-1.5 text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition cursor-pointer">
    Mese
  </button>
</div>`
  },

  // --- CARDS (BLUE) ---
  {
    id: 'html-pricing-card',
    title: 'Scheda Pricing Pro',
    description: 'Card per piano tariffario con badge di popolarità e pulsante d\'azione.',
    category: 'cards',
    type: 'html',
    tags: ['pricing', 'card', 'saas', 'tailwind'],
    path: '/snippets/cards/pricing-card.html',
    createdAt: '2026-09-08',
    code: `<div class="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
  <div class="flex items-center justify-between mb-4">
    <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Pro Plan</h5>
    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Popolare</span>
  </div>
  <div class="flex items-baseline text-gray-900 dark:text-white mb-4">
    <span class="text-3xl font-extrabold tracking-tight">€29</span>
    <span class="ms-1 text-sm font-normal text-gray-500 dark:text-gray-400">/mese</span>
  </div>
  <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Tutti gli strumenti avanzati per sviluppatori e team agili.</p>
  <button type="button" class="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition duration-150 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer">
    Inizia Prova Gratuita
  </button>
</div>`
  },
  {
    id: 'html-testimonial-card',
    title: 'Scheda Testimonianza con Avatar',
    description: 'Recensione cliente con voto a stelle, citazione virgolettata e autore.',
    category: 'cards',
    type: 'html',
    tags: ['card', 'testimonial', 'review', 'social-proof'],
    path: '/snippets/cards/testimonial-card.html',
    createdAt: '2026-09-08',
    code: `<div class="w-full max-w-sm p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
  <div class="flex items-center gap-1 text-amber-400 text-sm mb-3">
    ★ ★ ★ ★ ★
  </div>
  <p class="text-sm text-slate-600 dark:text-slate-300 italic mb-4">
    "La velocità di anteprima HTML è fenomenale. Abbiamo ridotto del 70% il tempo speso a cercare e testare componenti."
  </p>
  <div class="flex items-center gap-3">
    <div class="w-9 h-9 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
      MC
    </div>
    <div>
      <h4 class="text-xs font-bold text-slate-900 dark:text-slate-100">Marco Colombo</h4>
      <p class="text-[11px] text-slate-500 dark:text-slate-400">Lead Frontend Engineer</p>
    </div>
  </div>
</div>`
  },

  // --- NAVIGATION (PURPLE) ---
  {
    id: 'html-glass-navbar',
    title: 'Floating Glass Navbar',
    description: 'Barra di navigazione fluttuante con effetto sfocato frosted glass.',
    category: 'navigation',
    type: 'html',
    tags: ['navbar', 'glassmorphism', 'floating', 'menu'],
    path: '/snippets/nav/glass-navbar.html',
    createdAt: '2026-09-08',
    code: `<nav class="w-full max-w-xl px-5 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full shadow-lg border border-purple-200/60 dark:border-purple-900/40 flex items-center justify-between">
  <div class="flex items-center gap-2">
    <div class="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
      SV
    </div>
    <span class="font-bold text-sm tracking-tight text-slate-800 dark:text-slate-100">SnippetApp</span>
  </div>
  <div class="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
    <a href="#" class="hover:text-purple-600 transition">Home</a>
    <a href="#" class="hover:text-purple-600 transition">Componenti</a>
    <a href="#" class="hover:text-purple-600 transition">Docs</a>
  </div>
  <button class="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs font-semibold transition cursor-pointer">
    Accedi
  </button>
</nav>`
  },
  {
    id: 'html-breadcrumbs-tabs',
    title: 'Breadcrumbs & Tab di Navigazione',
    description: 'Percorso breadcrumbs gerarchico con pillole di sezione selezionabili.',
    category: 'navigation',
    type: 'html',
    tags: ['breadcrumbs', 'navigation', 'tabs'],
    path: '/snippets/nav/breadcrumbs.html',
    createdAt: '2026-09-08',
    code: `<div class="flex flex-col gap-2 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
  <nav class="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
    <a href="#" class="hover:text-purple-600 transition">Dashboard</a>
    <span>/</span>
    <a href="#" class="hover:text-purple-600 transition">Progetti</a>
    <span>/</span>
    <span class="font-semibold text-purple-600 dark:text-purple-400">Design System</span>
  </nav>
  <div class="flex gap-2 pt-1 border-t border-slate-100 dark:border-slate-700">
    <button class="px-3 py-1 bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-semibold">Generale</button>
    <button class="px-3 py-1 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-xs font-medium transition">Componenti</button>
    <button class="px-3 py-1 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-xs font-medium transition">Impostazioni</button>
  </div>
</div>`
  },

  // --- FORMS (EMERALD) ---
  {
    id: 'html-newsletter-card',
    title: 'Form Newsletter Dark Mode',
    description: 'Box iscrizione newsletter con gradiente scuro, input compatto e invio.',
    category: 'forms',
    type: 'html',
    tags: ['newsletter', 'form', 'input', 'dark'],
    path: '/snippets/forms/newsletter-card.html',
    createdAt: '2026-09-08',
    code: `<div class="w-full max-w-md p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white shadow-xl border border-emerald-900/40">
  <h3 class="text-lg font-semibold mb-1">Rimani Aggiornato</h3>
  <p class="text-sm text-slate-300 mb-4">Ricevi i migliori snippet frontend direttamente ogni settimana.</p>
  <form class="flex gap-2" onsubmit="event.preventDefault()">
    <input 
      type="email" 
      placeholder="nome@azienda.it" 
      class="flex-1 px-4 py-2 bg-slate-950/60 border border-slate-700 rounded-xl text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
    />
    <button 
      type="submit" 
      class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-xl transition duration-150 shadow-md shrink-0 cursor-pointer"
    >
      Iscriviti
    </button>
  </form>
</div>`
  },
  {
    id: 'html-animated-toggle',
    title: 'Switch a Scorrimento CSS',
    description: 'Interruttore on/off fluido con checkbox CSS nativo peer-checked e feedback testuale.',
    category: 'forms',
    type: 'html',
    tags: ['toggle', 'switch', 'checkbox', 'peer-checked'],
    path: '/snippets/forms/animated-toggle.html',
    createdAt: '2026-09-08',
    code: `<div class="flex flex-col items-center gap-3 p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 w-64">
  <div class="flex items-center justify-between w-full">
    <span class="text-sm font-medium text-slate-700 dark:text-slate-200">Notifiche Email</span>
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked class="sr-only peer" onchange="document.getElementById('toggle-state').innerText = this.checked ? 'Attivo' : 'Disattivato'">
      <div class="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-emerald-600"></div>
    </label>
  </div>
  <span class="text-xs text-slate-500 dark:text-slate-400">
    Stato: <strong id="toggle-state" class="text-emerald-600 dark:text-emerald-400">Attivo</strong>
  </span>
</div>`
  },
  {
    id: 'html-tag-input',
    title: 'Gestore Tag e Chip Input',
    description: 'Contenitore per chip di tag interattivi con aggiunta da input ed eliminazione.',
    category: 'forms',
    type: 'html',
    tags: ['tags', 'chips', 'input', 'interactive'],
    path: '/snippets/forms/tag-input.html',
    createdAt: '2026-09-08',
    code: `<div class="flex flex-col gap-3 p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm w-80">
  <div class="flex items-center justify-between">
    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Tag del Componente</span>
    <span class="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">HTML + JS</span>
  </div>

  <div id="tag-container" class="flex flex-wrap gap-1.5 min-h-[32px]">
    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
      TailwindCSS
      <button onclick="this.parentElement.remove()" class="hover:opacity-75 cursor-pointer">×</button>
    </span>
    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
      HTML5
      <button onclick="this.parentElement.remove()" class="hover:opacity-75 cursor-pointer">×</button>
    </span>
  </div>

  <div class="flex gap-2">
    <input
      id="new-tag-input"
      type="text"
      placeholder="Aggiungi tag..."
      class="flex-1 px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-slate-100"
      onkeydown="if(event.key==='Enter'){event.preventDefault();addCustomTag();}"
    />
    <button
      onclick="addCustomTag()"
      class="px-3 py-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition cursor-pointer"
    >
      +
    </button>
  </div>

  <script>
    function addCustomTag() {
      const input = document.getElementById('new-tag-input');
      const text = input.value.trim();
      if (!text) return;
      const span = document.createElement('span');
      span.className = 'inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800';
      span.innerHTML = text + ' <button onclick="this.parentElement.remove()" class="hover:opacity-75 cursor-pointer">×</button>';
      document.getElementById('tag-container').appendChild(span);
      input.value = '';
    }
  </script>
</div>`
  },

  // --- BADGES (ROSE) ---
  {
    id: 'html-status-pills',
    title: 'Badge di Stato e Indicatori',
    description: 'Indicatori di stato circolare con animazione a impulsi per server o servizi.',
    category: 'badges',
    type: 'html',
    tags: ['badge', 'status', 'pulse', 'indicator'],
    path: '/snippets/badges/status-pills.html',
    createdAt: '2026-09-08',
    code: `<div class="flex flex-wrap gap-2 items-center justify-center p-4">
  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
    Attivo / Online
  </span>

  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
    In Manutenzione
  </span>

  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
    <span class="w-2 h-2 rounded-full bg-rose-500"></span>
    Offline
  </span>
</div>`
  },
  {
    id: 'html-metric-badge',
    title: 'Badge Metrica KPI con Incremento',
    description: 'Scheda statistica con valore numerico dinamico, trend positivo e pulsante boost.',
    category: 'badges',
    type: 'html',
    tags: ['badge', 'kpi', 'metric', 'stats', 'interactive'],
    path: '/snippets/badges/metric-badge.html',
    createdAt: '2026-09-08',
    code: `<div class="flex flex-col items-center gap-3 p-5 bg-white dark:bg-slate-800 border border-rose-200 dark:border-rose-900/50 rounded-2xl shadow-sm w-72">
  <div class="flex items-center justify-between w-full">
    <span class="text-xs font-semibold text-slate-600 dark:text-slate-300">
      Tasso Conversione
    </span>
    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300">
      +4.8%
    </span>
  </div>

  <div class="flex items-baseline gap-1 my-1">
    <span id="kpi-val" class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
      98.4
    </span>
    <span class="text-sm font-semibold text-slate-500 dark:text-slate-400">%</span>
  </div>

  <button
    onclick="const el=document.getElementById('kpi-val'); el.innerText = (parseFloat(el.innerText) + 0.5).toFixed(1);"
    class="w-full py-1.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition active:scale-95 cursor-pointer shadow-xs"
  >
    Simula Boost (+0.5%)
  </button>
</div>`
  },

  // --- FEEDBACK & INTERACTIVE (CYAN) ---
  {
    id: 'html-interactive-counter',
    title: 'Contatore Interattivo',
    description: 'Componente contatore con pulsanti per incremento, decremento e azzeramento rapido.',
    category: 'feedback',
    type: 'html',
    tags: ['counter', 'interactive', 'vanilla-js', 'feedback'],
    path: '/snippets/feedback/interactive-counter.html',
    createdAt: '2026-09-08',
    code: `<div class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-cyan-200 dark:border-cyan-900/50 w-72">
  <span class="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
    Contatore Interattivo
  </span>
  <div id="counter-val" class="text-4xl font-extrabold text-cyan-600 dark:text-cyan-400 mb-6 transition-transform">
    0
  </div>
  <div class="flex items-center gap-3 w-full justify-center">
    <button
      onclick="changeVal(-1)"
      class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-800 dark:text-slate-100 font-bold flex items-center justify-center transition active:scale-95 cursor-pointer"
    >
      -
    </button>
    <button
      onclick="resetVal()"
      class="px-3 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-xs font-semibold text-slate-600 dark:text-slate-300 transition active:scale-95 cursor-pointer"
    >
      Reset
    </button>
    <button
      onclick="changeVal(1)"
      class="w-10 h-10 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold flex items-center justify-center transition shadow-md shadow-cyan-500/20 active:scale-95 cursor-pointer"
    >
      +
    </button>
  </div>

  <script>
    let currentCount = 0;
    function changeVal(delta) {
      currentCount += delta;
      document.getElementById('counter-val').innerText = currentCount;
    }
    function resetVal() {
      currentCount = 0;
      document.getElementById('counter-val').innerText = currentCount;
    }
  </script>
</div>`
  },
  {
    id: 'html-star-rating',
    title: 'Valutazione a Stelle Interattiva',
    description: 'Componente rating a 5 stelle con hover dinamico e selezione del punteggio.',
    category: 'feedback',
    type: 'html',
    tags: ['rating', 'stars', 'interactive', 'feedback'],
    path: '/snippets/feedback/star-rating.html',
    createdAt: '2026-09-08',
    code: `<div class="flex flex-col items-center gap-2 p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
  <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">
    Valuta questo componente
  </span>
  <div id="stars-row" class="flex gap-1 text-2xl cursor-pointer">
    <span onclick="setRating(1)" class="star text-amber-400 hover:scale-110 transition">★</span>
    <span onclick="setRating(2)" class="star text-amber-400 hover:scale-110 transition">★</span>
    <span onclick="setRating(3)" class="star text-amber-400 hover:scale-110 transition">★</span>
    <span onclick="setRating(4)" class="star text-amber-400 hover:scale-110 transition">★</span>
    <span onclick="setRating(5)" class="star text-slate-300 dark:text-slate-600 hover:scale-110 transition">★</span>
  </div>
  <span id="rating-label" class="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">
    4 su 5 stelle
  </span>

  <script>
    function setRating(val) {
      const stars = document.querySelectorAll('#stars-row .star');
      stars.forEach((star, index) => {
        if (index < val) {
          star.className = 'star text-amber-400 hover:scale-110 transition';
        } else {
          star.className = 'star text-slate-300 dark:text-slate-600 hover:scale-110 transition';
        }
      });
      document.getElementById('rating-label').innerText = val + ' su 5 stelle';
    }
  </script>
</div>`
  },
  {
    id: 'html-toast-alert',
    title: 'Toast Alert con Chiusura',
    description: 'Notifica banner moderna con indicatore iconico e pulsante di chiusura immediata.',
    category: 'feedback',
    type: 'html',
    tags: ['toast', 'alert', 'notification', 'feedback'],
    path: '/snippets/feedback/toast-alert.html',
    createdAt: '2026-09-08',
    code: `<div id="my-toast" class="flex items-center justify-between gap-3 p-3.5 bg-cyan-950 text-cyan-100 border border-cyan-800 rounded-xl shadow-lg max-w-sm">
  <div class="flex items-center gap-2.5">
    <div class="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
      ✓
    </div>
    <div class="text-xs">
      <strong class="font-semibold block text-white">Aggiornamento completato</strong>
      Tutti i file HTML sono stati sincronizzati.
    </div>
  </div>
  <button onclick="document.getElementById('my-toast').style.display='none'" class="text-cyan-400 hover:text-white transition p-1 cursor-pointer font-bold text-sm">
    ×
  </button>
</div>`
  },

  // --- LAYOUT (INDIGO) ---
  {
    id: 'html-faq-accordion',
    title: 'Accordion FAQ Nativo (HTML5)',
    description: 'Componente a fisarmonica creato con tag nativi details e summary, zero JS.',
    category: 'layout',
    type: 'html',
    tags: ['accordion', 'details', 'summary', 'faq', 'layout'],
    path: '/snippets/layout/accordion.html',
    createdAt: '2026-09-08',
    code: `<div class="w-full max-w-md space-y-2">
  <details class="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer" open>
    <summary class="flex items-center justify-between font-semibold text-xs text-slate-800 dark:text-slate-100">
      <span>Perché solo HTML e Tailwind?</span>
      <span class="transition group-open:rotate-180 text-indigo-500 font-bold">▼</span>
    </summary>
    <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
      L'HTML puro con Tailwind si carica istantaneamente, non fallisce mai in fase di compilazione e può essere incollato direttamente in qualsiasi progetto web.
    </p>
  </details>

  <details class="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
    <summary class="flex items-center justify-between font-semibold text-xs text-slate-800 dark:text-slate-100">
      <span>Come funzionano i colori per categoria?</span>
      <span class="transition group-open:rotate-180 text-indigo-500 font-bold">▼</span>
    </summary>
    <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
      Ogni categoria possiede un colore dedicato (Ambra per Pulsanti, Blu per Card, Smeraldo per Moduli, etc.) per un riconoscimento visivo immediato a colpo d'occhio.
    </p>
  </details>
</div>`
  },
  {
    id: 'html-stats-banner',
    title: 'Banner Statistiche con Divisori',
    description: 'Griglia KPI orizzontale a 3 metriche con layout responsive e divisori sottili.',
    category: 'layout',
    type: 'html',
    tags: ['stats', 'kpi', 'metrics', 'layout', 'grid'],
    path: '/snippets/layout/stats-banner.html',
    createdAt: '2026-09-08',
    code: `<div class="grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-sm text-center max-w-md w-full">
  <div class="px-2">
    <div class="text-2xl font-black text-indigo-600 dark:text-indigo-400">100%</div>
    <div class="text-[10px] uppercase font-bold text-slate-400 mt-0.5">Puro HTML</div>
  </div>
  <div class="px-2">
    <div class="text-2xl font-black text-indigo-600 dark:text-indigo-400">0 ms</div>
    <div class="text-[10px] uppercase font-bold text-slate-400 mt-0.5">Build Time</div>
  </div>
  <div class="px-2">
    <div class="text-2xl font-black text-indigo-600 dark:text-indigo-400">8</div>
    <div class="text-[10px] uppercase font-bold text-slate-400 mt-0.5">Colori Categorie</div>
  </div>
</div>`
  },
];
