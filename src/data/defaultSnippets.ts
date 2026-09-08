import { CategoryInfo, Snippet } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'bottoni',
    name: 'Bottoni & Controlli',
    color: '#0d9488',
    dotBg: 'bg-teal-600',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    badgeBorder: 'border-teal-200',
    headerBg: 'bg-teal-700',
    headerBorder: 'border-teal-800',
    headerHex: '#0f766e',
  },
  {
    id: 'schede',
    name: 'Schede & Card',
    color: '#d97706',
    dotBg: 'bg-amber-600',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    badgeBorder: 'border-amber-200',
    headerBg: 'bg-amber-600',
    headerBorder: 'border-amber-700',
    headerHex: '#d97706',
  },
  {
    id: 'layout',
    name: 'Layout & Griglie',
    color: '#4f46e5',
    dotBg: 'bg-indigo-600',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800',
    badgeBorder: 'border-indigo-200',
    headerBg: 'bg-indigo-700',
    headerBorder: 'border-indigo-800',
    headerHex: '#4338ca',
  },
  {
    id: 'animazioni',
    name: 'Animazioni & Effetti',
    color: '#9333ea',
    dotBg: 'bg-purple-600',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    badgeBorder: 'border-purple-200',
    headerBg: 'bg-purple-700',
    headerBorder: 'border-purple-800',
    headerHex: '#7e22ce',
  },
  {
    id: 'form',
    name: 'Campi & Form',
    color: '#ea580c',
    dotBg: 'bg-orange-600',
    badgeBg: 'bg-orange-50',
    badgeText: 'text-orange-800',
    badgeBorder: 'border-orange-200',
    headerBg: 'bg-orange-600',
    headerBorder: 'border-orange-700',
    headerHex: '#ea580c',
  },
  {
    id: 'modali',
    name: 'Modali & Dialoghi',
    color: '#059669',
    dotBg: 'bg-emerald-600',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    badgeBorder: 'border-emerald-200',
    headerBg: 'bg-emerald-700',
    headerBorder: 'border-emerald-800',
    headerHex: '#047857',
  },
  {
    id: 'menu',
    name: 'Menu & Navigazione',
    color: '#0284c7',
    dotBg: 'bg-sky-600',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-800',
    badgeBorder: 'border-sky-200',
    headerBg: 'bg-sky-700',
    headerBorder: 'border-sky-800',
    headerHex: '#0369a1',
  },
  {
    id: 'header',
    name: 'Header & Barre Top',
    color: '#e11d48',
    dotBg: 'bg-rose-600',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-800',
    badgeBorder: 'border-rose-200',
    headerBg: 'bg-rose-700',
    headerBorder: 'border-rose-800',
    headerHex: '#be123c',
  },
  {
    id: 'hero',
    name: 'Hero & Banner',
    color: '#7c3aed',
    dotBg: 'bg-violet-600',
    badgeBg: 'bg-violet-50',
    badgeText: 'text-violet-800',
    badgeBorder: 'border-violet-200',
    headerBg: 'bg-violet-700',
    headerBorder: 'border-violet-800',
    headerHex: '#6d28d9',
  },
];

export const INITIAL_SNIPPETS: Snippet[] = [
  {
    id: 'btn-moderno',
    title: 'Pulsante Gradiente Fluttuante',
    category: 'bottoni',
    filePath: 'public/snippets/bottoni/pulsante-moderno.html',
    description: 'Pulsante call-to-action con sfumatura smeraldo/teal e animazione hover.',
    tags: ['button', 'gradient', 'hover', 'icon'],
    createdAt: 1710000000000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .btn-gradient {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 28px;
      font-size: 15px;
      font-weight: 600;
      color: #ffffff;
      background: linear-gradient(135deg, #0d9488 0%, #0284c7 100%);
      border: none;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(13, 148, 136, 0.35);
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-gradient:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(13, 148, 136, 0.45);
      background: linear-gradient(135deg, #0f766e 0%, #0369a1 100%);
    }
    .btn-gradient:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(13, 148, 136, 0.3);
    }
    .btn-icon {
      transition: transform 0.2s ease;
    }
    .btn-gradient:hover .btn-icon {
      transform: translateX(4px);
    }
  </style>
</head>
<body>
  <button class="btn-gradient" onclick="this.querySelector('span').textContent = 'Cliccato! ✓'; setTimeout(() => this.querySelector('span').textContent = 'Azione Principale', 1500)">
    <span>Azione Principale</span>
    <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </button>
</body>
</html>`,
  },
  {
    id: 'btn-ardesia',
    title: 'Pulsante Outline Minimalista',
    category: 'bottoni',
    filePath: 'public/snippets/bottoni/bottone-ardesia-minimale.html',
    description: 'Pulsante secondario elegante con bordo sottile e sfumatura al passaggio del mouse.',
    tags: ['button', 'outline', 'minimal', 'clean'],
    createdAt: 1710001000000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      font-size: 14px;
      font-weight: 600;
      color: #334155;
      background: #ffffff;
      border: 1.5px solid #cbd5e1;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      transition: all 0.2s ease;
    }
    .btn-outline:hover {
      border-color: #0f172a;
      color: #0f172a;
      background: #f8fafc;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transform: translateY(-1px);
    }
    .btn-outline:active {
      transform: translateY(0);
      background: #f1f5f9;
    }
  </style>
</head>
<body>
  <button class="btn-outline" onclick="this.style.borderColor = '#0d9488'; this.style.color = '#0d9488';">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
    <span>Modifica Parametri</span>
  </button>
</body>
</html>`,
  },
  {
    id: 'card-prodotto',
    title: 'Scheda Prodotto Vetrina',
    category: 'schede',
    filePath: 'public/snippets/schede/scheda-prodotto.html',
    description: 'Card prodotto elegante con banner ambra, badge categoria e prezzo con pulsante d’acquisto.',
    tags: ['card', 'shop', 'ecommerce', 'product'],
    createdAt: 1710002000000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      width: 100%;
      max-width: 320px;
      overflow: hidden;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
      transition: all 0.25s ease;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 30px -5px rgba(0, 0, 0, 0.12);
      border-color: #cbd5e1;
    }
    .card-banner {
      height: 120px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      border-bottom: 1px solid #fef3c7;
    }
    .card-content {
      padding: 20px;
    }
    .card-tag {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #b45309;
      background: #fef3c7;
      padding: 3px 8px;
      border-radius: 6px;
      margin-bottom: 10px;
    }
    .card-title {
      margin: 0 0 8px 0;
      font-size: 17px;
      color: #0f172a;
      font-weight: 700;
    }
    .card-desc {
      margin: 0 0 16px 0;
      font-size: 13px;
      color: #64748b;
      line-height: 1.5;
    }
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #f1f5f9;
      padding-top: 14px;
    }
    .card-price {
      font-size: 18px;
      font-weight: 800;
      color: #0f172a;
    }
    .card-btn {
      background: #0f172a;
      color: #ffffff;
      border: none;
      padding: 9px 16px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .card-btn:hover {
      background: #334155;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-banner">📦</div>
    <div class="card-content">
      <span class="card-tag">Nuovo Arrivo</span>
      <h3 class="card-title">Kit Componenti Web</h3>
      <p class="card-desc">Raccolta di elementi UI leggeri e accessibili già ottimizzati per la resa.</p>
      <div class="card-footer">
        <span class="card-price">€29,00</span>
        <button class="card-btn" onclick="this.textContent = 'Aggiunto!'; setTimeout(() => this.textContent = 'Acquista', 1500)">Acquista</button>
      </div>
    </div>
  </div>
</body>
</html>`,
  },
  {
    id: 'profilo-utente',
    title: 'Profilo Utente Compatto',
    category: 'schede',
    filePath: 'public/snippets/schede/profilo-minimale.html',
    description: 'Badge profilo orizzontale con avatar iniziali, ruolo e spia status attiva.',
    tags: ['profile', 'avatar', 'user', 'badge'],
    createdAt: 1710003000000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .user-card {
      display: flex;
      align-items: center;
      gap: 16px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      padding: 16px 20px;
      border-radius: 14px;
      min-width: 290px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .user-card:hover {
      transform: translateY(-2px);
      border-color: #cbd5e1;
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    }
    .avatar {
      width: 46px;
      height: 46px;
      border-radius: 12px;
      background: linear-gradient(135deg, #0d9488 0%, #0284c7 100%);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 16px;
      box-shadow: 0 2px 8px rgba(13,148,136,0.3);
    }
    .info-name {
      margin: 0;
      font-size: 15px;
      color: #0f172a;
      font-weight: 700;
    }
    .info-role {
      margin: 2px 0 0 0;
      font-size: 12px;
      color: #64748b;
    }
    .badge-status {
      margin-left: auto;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 0 3px #d1fae5;
    }
  </style>
</head>
<body>
  <div class="user-card">
    <div class="avatar">MR</div>
    <div>
      <h4 class="info-name">Marco Rossi</h4>
      <p class="info-role">Frontend Specialist</p>
    </div>
    <div class="badge-status" title="Disponibile Online"></div>
  </div>
</body>
</html>`,
  },
  {
    id: 'accordion-schede-faq',
    title: 'Accordion FAQ a Scomparsa Dinamico',
    category: 'schede',
    filePath: 'public/snippets/schede/accordion-faq.html',
    description: 'Componente a fisarmonica (accordion) con apertura/chiusura fluida dei pannelli, freccia rotante e chiusura automatica degli altri elementi.',
    tags: ['accordion', 'faq', 'schede', 'collapse', 'interattivo'],
    createdAt: 1710003500000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px 16px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
      background: transparent;
    }
    .accordion-card {
      width: 100%;
      max-width: 600px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    }
    .card-header {
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid #f1f5f9;
    }
    .card-title {
      font-size: 16px;
      font-weight: 700;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .card-subtitle {
      font-size: 12px;
      color: #64748b;
      margin-top: 4px;
    }
    .accordion-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .accordion-item {
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      overflow: hidden;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .accordion-item.active {
      border-color: #d97706;
      box-shadow: 0 2px 8px rgba(217, 119, 6, 0.08);
    }
    .accordion-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 14px;
      background: #f8fafc;
      border: none;
      cursor: pointer;
      text-align: left;
      font-size: 13px;
      font-weight: 600;
      color: #1e293b;
      transition: background 0.15s, color 0.15s;
    }
    .accordion-item.active .accordion-btn {
      background: #fffbeb;
      color: #92400e;
    }
    .accordion-btn:hover {
      background: #f1f5f9;
    }
    .accordion-item.active .accordion-btn:hover {
      background: #fef3c7;
    }
    .chevron {
      display: inline-block;
      width: 16px;
      height: 16px;
      font-size: 11px;
      line-height: 16px;
      text-align: center;
      transition: transform 0.25s ease;
      color: #64748b;
    }
    .accordion-item.active .chevron {
      transform: rotate(180deg);
      color: #d97706;
    }
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease;
      background: #ffffff;
      padding: 0 14px;
      font-size: 13px;
      line-height: 1.6;
      color: #475569;
    }
    .accordion-item.active .accordion-content {
      max-height: 200px;
      padding: 12px 14px 14px;
    }
  </style>
</head>
<body>
  <div class="accordion-card">
    <div class="card-header">
      <div class="card-title">
        <span>📋</span>
        <span>Domande Frequenti (FAQ Accordion)</span>
      </div>
      <p class="card-subtitle">Clicca sulle sezioni per espandere e comprimere i contenuti con transizione fluida.</p>
    </div>

    <div class="accordion-list">
      <!-- Item 1 (Aperto per default) -->
      <div class="accordion-item active" id="acc-1">
        <button class="accordion-btn" onclick="toggleAccordion('acc-1')">
          <span>Come posso salvare e copiare questo componente?</span>
          <span class="chevron">▼</span>
        </button>
        <div class="accordion-content">
          Puoi cliccare sul pulsante "Copia HTML" direttamente dalla scheda per incollare l'intero codice comprensivo di stili e script JavaScript nel tuo progetto.
        </div>
      </div>

      <!-- Item 2 -->
      <div class="accordion-item" id="acc-2">
        <button class="accordion-btn" onclick="toggleAccordion('acc-2')">
          <span>È completamente compatibile con tutti i browser?</span>
          <span class="chevron">▼</span>
        </button>
        <div class="accordion-content">
          Sì, è realizzato in puro HTML, CSS e JavaScript standard (Vanilla JS), senza librerie esterne o dipendenze pesanti.
        </div>
      </div>

      <!-- Item 3 -->
      <div class="accordion-item" id="acc-3">
        <button class="accordion-btn" onclick="toggleAccordion('acc-3')">
          <span>Posso personalizzare i colori dell'animazione?</span>
          <span class="chevron">▼</span>
        </button>
        <div class="accordion-content">
          Certamente. I colori di accento sono definiti nella classe <code>.accordion-item.active</code> e possono essere modificati in qualsiasi tonalità esadecimale.
        </div>
      </div>
    </div>
  </div>

  <script>
    function toggleAccordion(id) {
      const item = document.getElementById(id);
      const isActive = item.classList.contains('active');
      
      document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    }
  </script>
</body>
</html>`,
  },
  {
    id: 'griglia-moderna',
    title: 'Griglia Responsive Auto-Fit',
    category: 'layout',
    filePath: 'public/snippets/layout/griglia-moderna.html',
    description: 'Layout a griglia senza media queries con CSS Grid repeat(auto-fit, minmax(...)).',
    tags: ['grid', 'layout', 'responsive'],
    createdAt: 1710004000000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px;
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 14px;
      max-width: 650px;
      margin: 0 auto;
    }
    .grid-item {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 18px 12px;
      text-align: center;
      color: #334155;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
      transition: all 0.2s ease;
    }
    .grid-item:hover {
      transform: translateY(-2px);
      border-color: #4f46e5;
      color: #4f46e5;
      box-shadow: 0 6px 16px rgba(79,70,229,0.12);
    }
    .grid-item span {
      display: block;
      font-size: 22px;
      margin-bottom: 6px;
      font-weight: 800;
      color: #4f46e5;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">
      <span>01</span>
      Layout Flessibile
    </div>
    <div class="grid-item">
      <span>02</span>
      Auto Responsive
    </div>
    <div class="grid-item">
      <span>03</span>
      Zero Dipendenze
    </div>
    <div class="grid-item">
      <span>04</span>
      CSS Grid Moderno
    </div>
  </div>
</body>
</html>`,
  },
  {
    id: 'barra-navigazione',
    title: 'Barra di Navigazione Isolata',
    category: 'layout',
    filePath: 'public/snippets/layout/barra-navigazione.html',
    description: 'Header di navigazione compatto a pillola con link e marchio evidenziato.',
    tags: ['nav', 'header', 'menu', 'pill'],
    createdAt: 1710005000000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 16px;
    }
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      padding: 10px 18px;
      border-radius: 999px;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
    }
    .brand {
      font-weight: 800;
      color: #4f46e5;
      font-size: 14px;
      letter-spacing: -0.3px;
    }
    .nav-links {
      display: flex;
      gap: 8px;
    }
    .nav-links a {
      color: #64748b;
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      padding: 6px 12px;
      border-radius: 999px;
      transition: all 0.2s ease;
    }
    .nav-links a:hover {
      color: #0f172a;
      background: #f1f5f9;
    }
    .nav-links a.active {
      color: #ffffff;
      background: #4f46e5;
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="brand">✦ PROGETTO</div>
    <div class="nav-links">
      <a href="#" class="active">Home</a>
      <a href="#">Archivio</a>
      <a href="#">Snippet</a>
    </div>
  </nav>
</body>
</html>`,
  },
  {
    id: 'caricamento-pulsante',
    title: 'Spinner di Caricamento Viola',
    category: 'animazioni',
    filePath: 'public/snippets/animazioni/caricamento-pulsante.html',
    description: 'Indicatore circolare di avanzamento con rotazione continua e didascalia.',
    tags: ['loader', 'spinner', 'animation'],
    createdAt: 1710006000000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .spinner-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      padding: 24px 32px;
      border-radius: 16px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.05);
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 3.5px solid #f3e8ff;
      border-top-color: #9333ea;
      border-radius: 50%;
      animation: spin 0.75s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .spinner-label {
      color: #64748b;
      font-size: 13px;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="spinner-box">
    <div class="spinner"></div>
    <span class="spinner-label">Elaborazione in corso...</span>
  </div>
</body>
</html>`,
  },
  {
    id: 'effetto-testo-fluido',
    title: 'Badge di Stato con Effetto Pulse',
    category: 'animazioni',
    filePath: 'public/snippets/animazioni/effetto-testo-fluido.html',
    description: 'Badge pillola con cerchio radar pulsante continuo per monitoraggio stato server.',
    tags: ['pulse', 'badge', 'status', 'radar'],
    createdAt: 1710007000000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .pulse-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 18px;
      border-radius: 999px;
      background: #fdf4ff;
      border: 1px solid #f0abfc;
      color: #86198f;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 2px 6px rgba(192, 38, 211, 0.08);
    }
    .dot-container {
      position: relative;
      width: 10px;
      height: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dot-core {
      width: 8px;
      height: 8px;
      background: #a21caf;
      border-radius: 50%;
    }
    .dot-wave {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #d946ef;
      animation: pulse-ring 1.8s cubic-bezier(0.24, 0, 0.38, 1) infinite;
    }
    @keyframes pulse-ring {
      0% { transform: scale(0.95); opacity: 0.8; }
      100% { transform: scale(2.6); opacity: 0; }
    }
  </style>
</head>
<body>
  <div class="pulse-badge">
    <div class="dot-container">
      <div class="dot-wave"></div>
      <div class="dot-core"></div>
    </div>
    <span>Sistema Operativo Online</span>
  </div>
</body>
</html>`,
  },
  {
    id: 'campo-ricerca-animato',
    title: 'Campo di Ricerca con Icona SVG',
    category: 'form',
    filePath: 'public/snippets/form/campo-ricerca-animato.html',
    description: 'Input di ricerca fluido con icona lente e bordo illuminato corallo al focus.',
    tags: ['form', 'input', 'search'],
    createdAt: 1710008000000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 16px;
    }
    .search-wrapper {
      position: relative;
      width: 100%;
      max-width: 360px;
    }
    .search-input {
      width: 100%;
      padding: 12px 16px 12px 42px;
      background: #ffffff;
      border: 1.5px solid #cbd5e1;
      border-radius: 12px;
      color: #0f172a;
      font-size: 14px;
      outline: none;
      transition: all 0.2s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .search-input:focus {
      border-color: #ea580c;
      box-shadow: 0 0 0 3.5px rgba(234, 88, 12, 0.15);
    }
    .search-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
      pointer-events: none;
      transition: color 0.2s;
    }
    .search-input:focus ~ .search-icon {
      color: #ea580c;
    }
  </style>
</head>
<body>
  <div class="search-wrapper">
    <input type="text" class="search-input" placeholder="Cerca componenti o documenti..." />
    <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </div>
</body>
</html>`,
  },
  {
    id: 'dialog-conferma',
    title: 'Finestra Dialog di Conferma',
    category: 'modali',
    filePath: 'public/snippets/modali/dialog-conferma.html',
    description: 'Modale di avviso/successo con icona verde smeraldo e bottoni di risposta interattivi.',
    tags: ['modal', 'dialog', 'confirm', 'alert'],
    createdAt: 1710009000000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .modal-box {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 24px;
      max-width: 350px;
      width: 100%;
      box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.1);
    }
    .modal-icon {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: #d1fae5;
      color: #059669;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 14px;
      font-size: 20px;
      font-weight: 700;
    }
    .modal-title {
      margin: 0 0 6px 0;
      font-size: 16px;
      color: #0f172a;
      font-weight: 700;
    }
    .modal-text {
      margin: 0 0 20px 0;
      font-size: 13px;
      color: #64748b;
      line-height: 1.5;
    }
    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    .btn-secondary {
      background: #f1f5f9;
      border: 1px solid #e2e8f0;
      color: #475569;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-secondary:hover {
      background: #e2e8f0;
    }
    .btn-confirm {
      background: #059669;
      border: none;
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-confirm:hover {
      background: #047857;
    }
  </style>
</head>
<body>
  <div class="modal-box">
    <div class="modal-icon">✓</div>
    <h3 class="modal-title">Operazione Riuscita</h3>
    <p class="modal-text">Il frammento di codice HTML è stato registrato ed è pronto all'uso.</p>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="alert('Operazione annullata')">Annulla</button>
      <button class="btn-confirm" onclick="this.textContent = 'Fatto!'; setTimeout(() => this.textContent = 'Continua', 1200)">Continua</button>
    </div>
  </div>
</body>
</html>`,
  },
  {
    id: 'menu-dropdown-responsive',
    title: 'Menu Navigazione con Dropdown Interattivo',
    category: 'menu',
    filePath: 'public/snippets/menu/menu-dropdown-responsive.html',
    description: 'Barra di navigazione con logo brand, menu a tendina multilivello al passaggio del mouse e pulsante di azione.',
    tags: ['menu', 'navigation', 'dropdown', 'navbar', 'responsive'],
    createdAt: 1710000700000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px 16px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
    }
    .navbar {
      width: 100%;
      max-width: 900px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 10px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    }
    .nav-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 16px;
      color: #0f172a;
      text-decoration: none;
    }
    .brand-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #0284c7, #0369a1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-weight: 800;
      font-size: 16px;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 6px;
      list-style: none;
    }
    .nav-item {
      position: relative;
    }
    .nav-link {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 8px 14px;
      font-size: 14px;
      font-weight: 500;
      color: #475569;
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .nav-link:hover, .nav-item:hover > .nav-link {
      color: #0284c7;
      background: #f0f9ff;
    }
    .nav-link.active {
      color: #0284c7;
      background: #e0f2fe;
      font-weight: 600;
    }
    /* Dropdown */
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 8px;
      width: 240px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 8px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      opacity: 0;
      visibility: hidden;
      transform: translateY(6px);
      transition: all 0.2s ease;
      z-index: 50;
    }
    .nav-item:hover .dropdown-menu {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .dropdown-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 9px 12px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      color: #334155;
      transition: background 0.15s;
    }
    .dropdown-item:hover {
      background: #f8fafc;
      color: #0284c7;
    }
    .item-tag {
      font-size: 10px;
      font-weight: 700;
      background: #e0f2fe;
      color: #0369a1;
      padding: 2px 6px;
      border-radius: 4px;
    }
    .nav-cta {
      background: #0284c7;
      color: #ffffff;
      font-size: 13px;
      font-weight: 600;
      padding: 8px 18px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 6px rgba(2, 132, 199, 0.25);
    }
    .nav-cta:hover {
      background: #0369a1;
      transform: translateY(-1px);
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <a href="#" class="nav-brand">
      <div class="brand-icon">❖</div>
      <span>StudioNav</span>
    </a>
    <ul class="nav-links">
      <li class="nav-item">
        <a href="#" class="nav-link active">Home</a>
      </li>
      <li class="nav-item">
        <div class="nav-link">
          <span>Prodotti</span>
          <span style="font-size: 10px;">▼</span>
        </div>
        <div class="dropdown-menu">
          <a href="#" class="dropdown-item">
            <span>Editor Componenti</span>
            <span class="item-tag">Pro</span>
          </a>
          <a href="#" class="dropdown-item">
            <span>Libreria Layout</span>
          </a>
          <a href="#" class="dropdown-item">
            <span>Generatore Icone</span>
            <span class="item-tag">Nuovo</span>
          </a>
          <a href="#" class="dropdown-item">
            <span>Esportatore HTML/CSS</span>
          </a>
        </div>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Documentazione</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Prezzi</a>
      </li>
    </ul>
    <button class="nav-cta" onclick="alert('Accesso alla console di navigazione!')">Inizia Ora</button>
  </nav>
</body>
</html>`,
  },
  {
    id: 'header-app-moderno',
    title: 'Header Applicativo con Ricerca e Profilo',
    category: 'header',
    filePath: 'public/snippets/header/header-app-moderno.html',
    description: 'Intestazione top per applicazione web con percorso breadcrumb, ricerca rapida ⌘K, campana notifiche e badge profilo.',
    tags: ['header', 'topbar', 'search', 'avatar', 'notifications'],
    createdAt: 1710000800000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px 16px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
    }
    .app-header {
      width: 100%;
      max-width: 960px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .app-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: #fff1f2;
      border: 1px solid #ffe4e6;
      color: #be123c;
      font-size: 13px;
      font-weight: 700;
      border-radius: 10px;
    }
    .breadcrumb {
      font-size: 13px;
      color: #64748b;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .breadcrumb b {
      color: #0f172a;
    }
    .header-search {
      flex: 1;
      max-width: 360px;
      position: relative;
    }
    .search-input {
      width: 100%;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 10px;
      padding: 8px 36px 8px 34px;
      font-size: 13px;
      color: #1e293b;
      outline: none;
      transition: all 0.2s;
    }
    .search-input:focus {
      background: #ffffff;
      border-color: #e11d48;
      box-shadow: 0 0 0 3px rgba(225, 29, 72, 0.12);
    }
    .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
      font-size: 14px;
    }
    .kbd-shortcut {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 11px;
      font-family: monospace;
      background: #e2e8f0;
      color: #475569;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 600;
    }
    .header-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .icon-btn {
      position: relative;
      width: 36px;
      height: 36px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      background: #ffffff;
      color: #475569;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.2s;
    }
    .icon-btn:hover {
      background: #f8fafc;
      color: #0f172a;
      border-color: #cbd5e1;
    }
    .badge-dot {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 7px;
      height: 7px;
      background: #e11d48;
      border-radius: 50%;
      border: 1.5px solid #ffffff;
    }
    .user-pill {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 10px 4px 4px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .user-pill:hover {
      background: #f1f5f9;
      border-color: #cbd5e1;
    }
    .avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #e11d48;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
    }
    .user-info {
      text-align: left;
    }
    .user-name {
      font-size: 12px;
      font-weight: 700;
      color: #1e293b;
      line-height: 1.2;
    }
    .user-role {
      font-size: 10px;
      color: #64748b;
    }
  </style>
</head>
<body>
  <header class="app-header">
    <div class="header-left">
      <div class="app-badge">
        <span>⚡</span>
        <span>Dashboard</span>
      </div>
      <div class="breadcrumb">
        <span>Workspace</span>
        <span>/</span>
        <b>Panoramica</b>
      </div>
    </div>
    <div class="header-search">
      <span class="search-icon">🔍</span>
      <input type="text" class="search-input" placeholder="Cerca risorse o comandi..." />
      <span class="kbd-shortcut">⌘K</span>
    </div>
    <div class="header-right">
      <button class="icon-btn" title="Notifiche" onclick="alert('Hai 3 notifiche da leggere')">
        <span>🔔</span>
        <span class="badge-dot"></span>
      </button>
      <div class="user-pill" onclick="alert('Profilo Utente: Marco Rossi')">
        <div class="avatar">MR</div>
        <div class="user-info">
          <div class="user-name">Marco Rossi</div>
          <div class="user-role">Team Lead</div>
        </div>
      </div>
    </div>
  </header>
</body>
</html>`,
  },
  {
    id: 'hero-landing-moderna',
    title: 'Hero Section Landing Page con Metric Ribbon',
    category: 'hero',
    filePath: 'public/snippets/hero/hero-landing-moderna.html',
    description: 'Sezione Hero ad alto impatto per landing page con chip novità, titolo con testo sfumato, doppi pulsanti CTA e metriche chiave.',
    tags: ['hero', 'banner', 'landing-page', 'cta', 'metrics'],
    createdAt: 1710000900000,
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 30px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .hero-container {
      width: 100%;
      max-width: 900px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 24px;
      padding: 44px 30px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      position: relative;
      overflow: hidden;
    }
    .hero-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #7c3aed, #06b6d4, #10b981);
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: #f5f3ff;
      border: 1px solid #ddd6fe;
      color: #6d28d9;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .chip-badge {
      background: #7c3aed;
      color: #ffffff;
      font-size: 10px;
      font-weight: 800;
      padding: 2px 7px;
      border-radius: 10px;
      text-transform: uppercase;
    }
    .hero-title {
      font-size: 32px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;
      line-height: 1.25;
      margin-bottom: 14px;
    }
    .hero-title span {
      color: #7c3aed;
      background: linear-gradient(135deg, #7c3aed, #2563eb);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-desc {
      font-size: 15px;
      color: #64748b;
      max-width: 580px;
      margin: 0 auto 28px;
      line-height: 1.6;
    }
    .hero-actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 14px;
      margin-bottom: 36px;
      flex-wrap: wrap;
    }
    .btn-primary {
      background: #7c3aed;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      padding: 12px 26px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 14px rgba(124, 58, 237, 0.3);
    }
    .btn-primary:hover {
      background: #6d28d9;
      transform: translateY(-1px);
    }
    .btn-outline {
      background: #ffffff;
      color: #334155;
      font-size: 14px;
      font-weight: 600;
      padding: 12px 24px;
      border-radius: 10px;
      border: 1px solid #cbd5e1;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
    }
    .btn-outline:hover {
      background: #f8fafc;
      border-color: #94a3b8;
    }
    .metrics-ribbon {
      display: flex;
      justify-content: center;
      gap: 36px;
      padding-top: 24px;
      border-top: 1px solid #f1f5f9;
      flex-wrap: wrap;
    }
    .metric-item {
      text-align: center;
    }
    .metric-num {
      font-size: 20px;
      font-weight: 800;
      color: #0f172a;
    }
    .metric-label {
      font-size: 12px;
      color: #64748b;
      font-weight: 500;
      margin-top: 2px;
    }
  </style>
</head>
<body>
  <div class="hero-container">
    <div class="chip">
      <span class="chip-badge">Novità v2.4</span>
      <span>Esportazione frammenti istantanea</span>
    </div>
    <h1 class="hero-title">
      Costruisci interfacce moderne con <span>frammenti HTML pronti</span>
    </h1>
    <p class="hero-desc">
      Una raccolta di componenti rifiniti, responsive e pronti all'uso con anteprima dal vivo, codifica a colori e gestione locale dei tuoi snippet.
    </p>
    <div class="hero-actions">
      <button class="btn-primary" onclick="alert('Inizializzazione del nuovo progetto in corso!')">Esplora la Collezione</button>
      <button class="btn-outline" onclick="alert('Riproduzione tour guidato 1 min')">▶ Guarda la Demo</button>
    </div>
    <div class="metrics-ribbon">
      <div class="metric-item">
        <div class="metric-num">99.9%</div>
        <div class="metric-label">Compatibilità Browser</div>
      </div>
      <div class="metric-item">
        <div class="metric-num">50K+</div>
        <div class="metric-label">Snippet Organizzati</div>
      </div>
      <div class="metric-item">
        <div class="metric-num">4.9 / 5</div>
        <div class="metric-label">Valutazione Sviluppatori</div>
      </div>
    </div>
  </div>
</body>
</html>`,
  },
];
