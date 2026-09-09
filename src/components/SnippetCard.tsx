import React, { useState, useMemo } from 'react';
import {
  Copy,
  Check,
  Maximize2,
  Code2,
  Trash2,
  Folder,
  Tag,
  RefreshCw,
  Sun,
  Moon,
  Grid,
} from 'lucide-react';
import { Snippet, CategoryInfo, ThemeMode } from '../types';
import { HtmlSyntaxViewer } from './HtmlSyntaxViewer';

interface SnippetCardProps {
  snippet: Snippet;
  category?: CategoryInfo;
  theme: ThemeMode;
  layoutMode: 'grid' | 'stack';
  onDelete?: (id: string) => void;
  onExpandPreview?: (snippet: Snippet) => void;
}

export const SnippetCard: React.FC<SnippetCardProps> = ({
  snippet,
  category,
  theme,
  layoutMode,
  onDelete,
  onExpandPreview,
}) => {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [previewBg, setPreviewBg] = useState<'white' | 'dark' | 'grid'>('white');
  const [iframeKey, setIframeKey] = useState(0);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  // Copy HTML with robust fallback for iframe sandbox
  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(snippet.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      }
    } catch (e) {
      console.warn('Clipboard API non disponibile, uso fallback textarea:', e);
    }

    // Fallback using textarea
    try {
      const ta = document.createElement('textarea');
      ta.value = snippet.code;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      ta.style.top = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copia non riuscita:', err);
    }
  };

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  // Inject background style dynamically into snippet HTML so iframe visibly and instantly updates
  const processedCode = useMemo(() => {
    let bgRule = '';
    if (previewBg === 'dark') {
      bgRule = `body { background-color: #0f172a !important; background-image: none !important; color: #f8fafc; }`;
    } else if (previewBg === 'grid') {
      bgRule = `body { background-color: #f8fafc !important; background-image: radial-gradient(#cbd5e1 1.5px, transparent 1.5px) !important; background-size: 16px 16px !important; color: #0f172a; }`;
    } else {
      // 'white'
      bgRule = `body { background-color: #ffffff !important; background-image: none !important; color: #0f172a; }`;
    }

    const overrideTag = `<style id="snippet-bg-override">${bgRule}</style>`;
    if (snippet.code.includes('</head>')) {
      return snippet.code.replace('</head>', `${overrideTag}</head>`);
    }
    return `${overrideTag}${snippet.code}`;
  }, [snippet.code, previewBg]);

  // Outer container styling for the preview wrapper
  const getPreviewWrapperBg = () => {
    switch (previewBg) {
      case 'dark':
        return 'bg-[#0f172a]';
      case 'grid':
        return 'bg-[#f8fafc] bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:16px_16px]';
      case 'white':
      default:
        return 'bg-white';
    }
  };

  return (
    <div
      id={`snippet-container-${snippet.id}`}
      className="bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 transition-all duration-200 overflow-hidden shadow-md hover:shadow-lg flex flex-col"
    >
      {/* 1. Header of the Snippet Container - DYNAMIC CATEGORY COLOR */}
      <div
        className="border-b shrink-0 transition-colors shadow-xs"
        style={{
          backgroundColor: category?.headerHex || '#0f766e',
          borderColor: category?.headerHex || '#0f766e',
        }}
      >
        {/* Main Row: Category Badge, Title, and Priority Pinned Actions (Copia, Espandi, Cestino) */}
        <div className="px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2">
          {/* Left: Category Badge & Title */}
          <div className="flex items-center gap-2 min-w-0 flex-1 pr-1">
            {category && (
              <span
                className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold shrink-0 bg-white text-slate-900 shadow-xs border border-white/40"
                title={`Categoria: ${category.name}`}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: category.headerHex || category.color }}
                />
                <span className="truncate max-w-[80px] sm:max-w-none">{category.name.split('&')[0].trim()}</span>
              </span>
            )}

            <div className="min-w-0 flex-1">
              <h3
                className="text-sm sm:text-base font-bold text-white tracking-tight truncate drop-shadow-xs"
                title={snippet.title}
              >
                {snippet.title}
              </h3>
              <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-white/80 truncate">
                <Folder size={11} className="shrink-0 opacity-80 text-white" />
                <span className="truncate">
                  {snippet.filePath || `public/snippets/${snippet.category}/${snippet.id}.html`}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Essential Actions (Copia, Espandi, Cestino) - ALWAYS VISIBLE, NEVER CLIPPED */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Copia Codice HTML */}
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                copied
                  ? 'bg-white text-emerald-700 border-white shadow-md'
                  : 'bg-white text-slate-900 border-white hover:bg-slate-100 shadow-xs'
              }`}
              title="Copia codice HTML"
            >
              {copied ? (
                <>
                  <Check size={13} className="stroke-[2.5]" />
                  <span>Copiato!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span className="hidden xs:inline">Copia</span>
                  <span className="hidden md:inline"> HTML</span>
                </>
              )}
            </button>

            {/* Espandi a tutto schermo */}
            {onExpandPreview && (
              <button
                onClick={() => onExpandPreview(snippet)}
                className="p-1.5 rounded-lg border border-white/25 bg-white/15 hover:bg-white/30 text-white transition-colors backdrop-blur-xs shadow-xs"
                title="Espandi anteprima a tutto schermo"
                aria-label="Espandi anteprima"
              >
                <Maximize2 size={14} />
              </button>
            )}

            {/* Cestino / Elimina Snippet - ALWAYS PINNED ON THE HEADER */}
            {onDelete && (
              isConfirmingDelete ? (
                <div className="flex items-center gap-1 bg-white border border-white px-2 py-0.5 rounded-lg text-xs shadow-md animate-in fade-in shrink-0">
                  <span className="font-bold text-rose-700 text-[10px] sm:text-[11px]">Eliminare?</span>
                  <button
                    onClick={() => {
                      onDelete(snippet.id);
                      setIsConfirmingDelete(false);
                    }}
                    className="px-1.5 py-0.5 font-bold text-white bg-rose-600 hover:bg-rose-700 rounded transition-colors text-[10px] sm:text-[11px]"
                  >
                    Sì
                  </button>
                  <button
                    onClick={() => setIsConfirmingDelete(false)}
                    className="px-1.5 py-0.5 font-medium text-slate-700 hover:bg-slate-100 rounded transition-colors text-[10px] sm:text-[11px]"
                  >
                    No
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsConfirmingDelete(true)}
                  className="p-1.5 rounded-lg border border-white/30 bg-white/15 hover:bg-rose-600 hover:border-rose-500 text-white transition-colors backdrop-blur-xs shadow-xs active:scale-95 shrink-0"
                  title="Elimina snippet dal contenitore"
                  aria-label="Elimina snippet"
                >
                  <Trash2 size={14} className="text-white" />
                </button>
              )
            )}
          </div>
        </div>

        {/* Secondary Sub-toolbar: Sfondo preview, Ricarica iframe, Mostra codice */}
        <div className="px-3 sm:px-4 py-1.5 bg-black/15 border-t border-white/15 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          {/* Left: Background Switcher (Bianco / Scuro / Griglia) */}
          <div
            className="flex items-center rounded-lg p-0.5 bg-black/25 backdrop-blur-xs border border-white/20 text-xs shadow-inner shrink-0"
            title="Cambia sfondo anteprima"
          >
            <button
              onClick={() => setPreviewBg('white')}
              className={`flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[11px] transition-all ${
                previewBg === 'white'
                  ? 'bg-white font-bold text-slate-950 shadow-xs'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              }`}
              title="Sfondo Bianco Pulito"
            >
              <Sun size={11} className={previewBg === 'white' ? 'text-amber-500' : 'text-white'} />
              <span className="hidden sm:inline text-[11px]">Bianco</span>
            </button>
            <button
              onClick={() => setPreviewBg('dark')}
              className={`flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[11px] transition-all ${
                previewBg === 'dark'
                  ? 'bg-slate-950 font-bold text-white shadow-xs border border-white/20'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              }`}
              title="Sfondo Scuro Ardesia"
            >
              <Moon size={11} className={previewBg === 'dark' ? 'text-cyan-400' : 'text-white'} />
              <span className="hidden sm:inline text-[11px]">Scuro</span>
            </button>
            <button
              onClick={() => setPreviewBg('grid')}
              className={`flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[11px] transition-all ${
                previewBg === 'grid'
                  ? 'bg-white font-bold text-slate-950 shadow-xs'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              }`}
              title="Sfondo a Griglia Puntinata"
            >
              <Grid size={11} className={previewBg === 'grid' ? 'text-indigo-600' : 'text-white'} />
              <span className="hidden sm:inline text-[11px]">Griglia</span>
            </button>
          </div>

          {/* Right: Ricarica + Codice Toggle */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Ricarica Anteprima */}
            <button
              onClick={handleReload}
              className="p-1 sm:p-1.5 rounded-lg border border-white/25 bg-white/15 hover:bg-white/30 text-white transition-colors backdrop-blur-xs shadow-xs"
              title="Ricarica anteprima interattiva"
              aria-label="Ricarica anteprima"
            >
              <RefreshCw size={13} />
            </button>

            {/* Mostra Codice Toggle */}
            <button
              onClick={() => setShowCode(!showCode)}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold border transition-colors ${
                showCode
                  ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                  : 'bg-white/15 hover:bg-white/30 text-white border-white/25 backdrop-blur-xs'
              }`}
              title={showCode ? 'Nascondi codice sorgente' : 'Mostra codice HTML'}
            >
              <Code2 size={13} />
              <span>{showCode ? 'Nascondi' : 'Codice'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Visual Live Preview Container */}
      <div className="relative flex-1 flex flex-col">
        <div
          className={`relative w-full overflow-hidden transition-colors border-b border-slate-200 ${getPreviewWrapperBg()}`}
          style={{
            minHeight: layoutMode === 'stack' ? '320px' : '260px',
            height: layoutMode === 'stack' ? '380px' : '280px',
          }}
        >
          <iframe
            key={`${snippet.id}-${iframeKey}-${previewBg}`}
            id={`iframe-preview-${snippet.id}`}
            title={`Anteprima ${snippet.title}`}
            srcDoc={processedCode}
            sandbox="allow-scripts allow-modals allow-same-origin allow-forms"
            className="w-full h-full border-0 block pointer-events-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* 3. Collapsible Read-Only HTML Source Code */}
      {showCode && (
        <div className="p-4 border-b border-slate-200 bg-slate-50 transition-all">
          <div className="flex items-center justify-between mb-2 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5 font-mono">
              <Code2 size={13} className="text-teal-600" />
              SORGENTE HTML ({snippet.code.split('\n').length} righe)
            </span>
            <button
              onClick={handleCopy}
              className="text-xs text-teal-700 hover:text-teal-800 flex items-center gap-1 font-mono font-bold"
            >
              <Copy size={11} />
              {copied ? 'Copiato!' : 'Copia'}
            </button>
          </div>
          <HtmlSyntaxViewer code={snippet.code} theme={theme} />
        </div>
      )}

      {/* 4. Bottom Tag & Info Bar */}
      <div className="px-4 py-2.5 bg-slate-50/70 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex flex-wrap items-center gap-1.5">
          {snippet.description && (
            <span className="text-xs text-slate-600 mr-1 hidden sm:inline">
              {snippet.description}
            </span>
          )}
          {snippet.tags && snippet.tags.length > 0 ? (
            snippet.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono bg-white border border-slate-200 text-slate-600"
              >
                <Tag size={10} className="opacity-50" />
                {tag}
              </span>
            ))
          ) : (
            <span className="text-[11px] font-mono opacity-60">Nessun tag</span>
          )}
        </div>

        <span className="font-mono text-[11px] text-slate-400 shrink-0">
          {(new Blob([snippet.code]).size / 1024).toFixed(1)} KB
        </span>
      </div>
    </div>
  );
};
