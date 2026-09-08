import React, { useState, useMemo } from 'react';
import { 
  Copy, 
  Check, 
  Maximize2, 
  Moon, 
  Sun, 
  RotateCw, 
  Download, 
  Star, 
  Trash2, 
  FileCode 
} from 'lucide-react';
import { Snippet } from '../types';
import { generateIframeDoc } from '../utils/previewRunner';
import { getCategoryConfig } from '../data/defaultSnippets';

interface SnippetCardProps {
  snippet: Snippet;
  onOpenDetail: (snippet: Snippet) => void;
  onToggleFavorite: (id: string) => void;
  onDelete?: (id: string) => void;
  viewMode?: 'grid' | 'compact';
}

export const SnippetCard: React.FC<SnippetCardProps> = ({
  snippet,
  onOpenDetail,
  onToggleFavorite,
  onDelete,
  viewMode = 'grid',
}) => {
  const [copied, setCopied] = useState(false);
  const [isDarkPreview, setIsDarkPreview] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const categoryTheme = getCategoryConfig(snippet.category);

  const iframeSrcDoc = useMemo(() => {
    return generateIframeDoc(snippet.code, snippet.type, isDarkPreview);
  }, [snippet.code, snippet.type, isDarkPreview, refreshKey]);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    const filename = `${snippet.id}.html`;
    const blob = new Blob([snippet.code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Compact View Layout
  if (viewMode === 'compact') {
    return (
      <div 
        onClick={() => onOpenDetail(snippet)}
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--border-color)',
          borderLeftColor: categoryTheme.hex,
          borderLeftWidth: '4px',
        }}
        className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 border rounded-xl hover:border-stone-400 transition-all cursor-pointer shadow-2xs hover:shadow-sm"
      >
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(snippet.id);
            }}
            className="text-stone-300 hover:text-amber-500 transition cursor-pointer"
          >
            <Star className={`w-4 h-4 ${snippet.favorite ? 'fill-amber-400 text-amber-500' : ''}`} />
          </button>

          {/* Category colored pill */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-bold border shrink-0 ${categoryTheme.badgeClass}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${categoryTheme.badgeDot}`}></span>
            {categoryTheme.shortLabel}
          </span>

          <div className="truncate">
            <h3 
              style={{ color: 'var(--text-main)' }}
              className="text-sm font-semibold transition truncate group-hover:opacity-80"
            >
              {snippet.title}
            </h3>
            {snippet.path && (
              <p 
                style={{ color: 'var(--text-subtle)' }}
                className="text-[11px] font-mono truncate"
              >
                {snippet.path}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-2 sm:mt-0 w-full sm:w-auto justify-end">
          <div className="hidden md:flex items-center gap-1 mr-2">
            {snippet.tags.slice(0, 3).map((t) => (
              <span 
                key={t} 
                style={{
                  backgroundColor: 'var(--toolbar-bg)',
                  color: 'var(--text-muted)',
                }}
                className="text-[10px] px-1.5 py-0.5 rounded"
              >
                #{t}
              </span>
            ))}
          </div>

          <button
            onClick={handleCopy}
            style={{ color: 'var(--text-muted)' }}
            className="p-1.5 hover:opacity-80 rounded-lg transition cursor-pointer"
            title="Copia codice HTML"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
          
          <button
            onClick={handleDownload}
            style={{ color: 'var(--text-muted)' }}
            className="p-1.5 hover:opacity-80 rounded-lg transition cursor-pointer"
            title="Scarica file .html"
          >
            <Download className="w-4 h-4" />
          </button>

          {onDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(snippet.id);
              }}
              className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition cursor-pointer"
              title="Elimina snippet"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => onOpenDetail(snippet)}
            style={{
              backgroundColor: 'var(--toolbar-bg)',
              color: 'var(--text-main)',
            }}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg transition hover:opacity-80 cursor-pointer"
          >
            Dettagli
          </button>
        </div>
      </div>
    );
  }

  // Full Grid View with Mini Anteprima
  return (
    <div 
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border-color)',
        borderTopColor: categoryTheme.hex,
        borderTopWidth: '3px',
      }}
      className="flex flex-col border rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group hover:border-stone-400"
    >
      
      {/* Card Header */}
      <div 
        style={{ borderColor: 'var(--border-subtle)' }}
        className="p-3.5 pb-2.5 flex items-start justify-between gap-2 border-b"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
            {/* Category colored badge */}
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-bold border ${categoryTheme.badgeClass}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${categoryTheme.badgeDot}`}></span>
              {categoryTheme.shortLabel}
            </span>

            <span 
              style={{
                backgroundColor: 'var(--toolbar-bg)',
                color: 'var(--text-muted)',
              }}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md"
            >
              HTML
            </span>

            {snippet.path && (
              <span 
                style={{ color: 'var(--text-subtle)' }}
                className="hidden sm:inline-block text-[10px] font-mono truncate max-w-[130px]" 
                title={snippet.path}
              >
                {snippet.path}
              </span>
            )}
          </div>

          <h3 
            onClick={() => onOpenDetail(snippet)}
            style={{ color: 'var(--text-main)' }}
            className="text-sm font-semibold transition cursor-pointer truncate group-hover:opacity-80"
            title={snippet.title}
          >
            {snippet.title}
          </h3>
        </div>

        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(snippet.id);
          }}
          className="p-1.5 text-stone-300 hover:text-amber-500 transition rounded-lg cursor-pointer"
          title={snippet.favorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
        >
          <Star className={`w-4 h-4 ${snippet.favorite ? 'fill-amber-400 text-amber-500' : ''}`} />
        </button>
      </div>

      {/* Mini Preview Toolbar */}
      <div 
        style={{
          backgroundColor: 'var(--toolbar-bg)',
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-muted)',
        }}
        className="flex items-center justify-between px-3 py-1.5 border-b text-[11px]"
      >
        <span className="font-medium flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${categoryTheme.badgeDot}`}></span>
          Mini Anteprima
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsDarkPreview(!isDarkPreview)}
            className="p-1 hover:opacity-80 rounded transition cursor-pointer"
            title={isDarkPreview ? 'Sfondo chiaro' : 'Sfondo scuro'}
          >
            {isDarkPreview ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setRefreshKey((k) => k + 1)}
            className="p-1 hover:opacity-80 rounded transition cursor-pointer"
            title="Ricarica anteprima"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenDetail(snippet)}
            className="p-1 hover:opacity-80 rounded transition cursor-pointer"
            title="Apri a schermo intero"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mini Preview Canvas (Isolated Iframe) */}
      <div 
        onClick={() => onOpenDetail(snippet)}
        style={{
          backgroundColor: isDarkPreview ? '#090d16' : '#fafafa',
        }}
        className="relative h-44 w-full overflow-hidden cursor-pointer transition-colors"
      >
        <iframe
          key={`mini-iframe-${snippet.id}-${refreshKey}-${isDarkPreview ? 'dark' : 'light'}`}
          srcDoc={iframeSrcDoc}
          title={`Mini anteprima di ${snippet.title}`}
          sandbox="allow-scripts"
          className="w-full h-full border-0 pointer-events-none select-none"
        />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 dark:group-hover:bg-stone-100/5 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span 
            style={{
              backgroundColor: 'var(--card-bg)',
              color: 'var(--text-main)',
              borderColor: 'var(--border-color)',
            }}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold shadow-md border transform translate-y-2 group-hover:translate-y-0 transition-transform"
          >
            Clicca per Dettagli &amp; Codice
          </span>
        </div>
      </div>

      {/* Card Footer: Tags & Actions */}
      <div 
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--border-subtle)',
        }}
        className="p-3 pt-2.5 border-t flex items-center justify-between gap-2"
      >
        {/* Tags */}
        <div className="flex items-center gap-1 overflow-hidden min-w-0">
          {snippet.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: 'var(--toolbar-bg)',
                color: 'var(--text-muted)',
              }}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md truncate max-w-[90px]"
            >
              #{tag}
            </span>
          ))}
          {snippet.tags.length > 2 && (
            <span 
              style={{ color: 'var(--text-subtle)' }}
              className="text-[10px]"
            >
              +{snippet.tags.length - 2}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handleCopy}
            style={{
              backgroundColor: copied ? '#059669' : 'var(--toolbar-bg)',
              color: copied ? '#ffffff' : 'var(--text-main)',
              borderColor: 'var(--border-color)',
            }}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg border transition cursor-pointer active:scale-95"
            title="Copia codice sorgente HTML"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copiato</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copia</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            style={{
              backgroundColor: 'var(--toolbar-bg)',
              color: 'var(--text-muted)',
              borderColor: 'var(--border-color)',
            }}
            className="p-1.5 rounded-lg border transition hover:opacity-80 cursor-pointer"
            title="Scarica file .html"
          >
            <Download className="w-3.5 h-3.5" />
          </button>

          {onDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(snippet.id);
              }}
              className="p-1.5 rounded-lg border border-transparent text-stone-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer"
              title="Elimina snippet dal contenitore"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
