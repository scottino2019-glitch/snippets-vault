import React, { useState } from 'react';
import {
  Copy,
  Check,
  Trash2,
  FileCode2,
  ChevronRight,
  Eye,
  EyeOff,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Snippet, CategoryInfo, ThemeMode } from '../types';

interface SnippetListProps {
  snippets: Snippet[];
  categories: CategoryInfo[];
  selectedSnippetId: string | null;
  onSelectSnippet: (id: string) => void;
  onDeleteSnippet: (id: string) => void;
  theme: ThemeMode;
}

export const SnippetList: React.FC<SnippetListProps> = ({
  snippets,
  categories,
  selectedSnippetId,
  onSelectSnippet,
  onDeleteSnippet,
  theme,
}) => {
  const isSlate = theme === 'slate';
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedPreviewIds, setExpandedPreviewIds] = useState<Record<string, boolean>>({});

  const handleCopy = (e: React.MouseEvent, snippet: Snippet) => {
    e.stopPropagation();
    navigator.clipboard.writeText(snippet.code);
    setCopiedId(snippet.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const toggleInlinePreview = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setExpandedPreviewIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getCategory = (catId: string): CategoryInfo => {
    const found = categories.find((c) => c.id === catId);
    return (
      found || {
        id: catId,
        name: catId,
        color: '#94a3b8',
        dotBg: 'bg-slate-400',
        badgeBg: 'bg-slate-500/15',
        badgeText: 'text-slate-300',
        badgeBorder: 'border-slate-500/30',
      }
    );
  };

  if (snippets.length === 0) {
    return (
      <div className="p-8 text-center flex flex-col items-center justify-center h-64">
        <FileCode2
          size={36}
          className={`mb-3 ${isSlate ? 'text-slate-600' : 'text-stone-400'}`}
        />
        <p className={`text-sm font-medium ${isSlate ? 'text-slate-300' : 'text-stone-700'}`}>
          Nessuno snippet trovato
        </p>
        <p className={`text-xs mt-1 max-w-xs ${isSlate ? 'text-slate-500' : 'text-stone-500'}`}>
          Prova a modificare i filtri o usa il pulsante "Nuovo Snippet" per aggiungerne uno.
        </p>
      </div>
    );
  }

  return (
    <div
      id="snippet-list-container"
      className="divide-y overflow-y-auto h-full"
      style={{
        borderColor: isSlate ? '#313c4c' : '#d2ccc2',
      }}
    >
      {snippets.map((snippet) => {
        const isSelected = snippet.id === selectedSnippetId;
        const cat = getCategory(snippet.category);
        const hasInlinePreview = expandedPreviewIds[snippet.id];

        return (
          <div
            key={snippet.id}
            id={`snippet-item-${snippet.id}`}
            onClick={() => onSelectSnippet(snippet.id)}
            className={`group relative p-3.5 transition-all cursor-pointer border-l-3 ${
              isSelected
                ? isSlate
                  ? 'bg-[#293240] border-l-teal-400'
                  : 'bg-[#faf6ee] border-l-teal-700 shadow-xs'
                : isSlate
                ? 'border-l-transparent hover:bg-[#232b37]'
                : 'border-l-transparent hover:bg-[#eae5dc]'
            }`}
            style={{
              borderBottomColor: isSlate ? '#2e3745' : '#d7d1c6',
            }}
          >
            {/* Top row: Category badge & Actions */}
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium border ${cat.badgeBg} ${cat.badgeText} ${cat.badgeBorder}`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                  {cat.name}
                </span>

                {snippet.isCustom && (
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] px-1.5 py-0.2 rounded font-mono ${
                      isSlate
                        ? 'bg-purple-950/60 text-purple-300 border border-purple-800/40'
                        : 'bg-purple-100 text-purple-800 border border-purple-300'
                    }`}
                  >
                    <Sparkles size={10} />
                    Personalizzato
                  </span>
                )}
              </div>

              {/* Fast hover actions */}
              <div className="flex items-center gap-1">
                <button
                  onClick={(e) => toggleInlinePreview(e, snippet.id)}
                  className={`p-1 rounded transition-colors ${
                    hasInlinePreview
                      ? 'text-teal-400 bg-teal-950/50'
                      : isSlate
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/60'
                      : 'text-stone-500 hover:text-stone-800 hover:bg-stone-300'
                  }`}
                  title={hasInlinePreview ? 'Nascondi anteprima' : 'Anteprima rapida nella scheda'}
                >
                  {hasInlinePreview ? <EyeOff size={13} /> : <Eye size={13} />}
                </button>

                <button
                  onClick={(e) => handleCopy(e, snippet)}
                  className={`p-1 rounded transition-colors ${
                    copiedId === snippet.id
                      ? 'text-teal-400'
                      : isSlate
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/60'
                      : 'text-stone-500 hover:text-stone-800 hover:bg-stone-300'
                  }`}
                  title="Copia codice HTML"
                >
                  {copiedId === snippet.id ? <Check size={13} /> : <Copy size={13} />}
                </button>

                {snippet.isCustom && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteSnippet(snippet.id);
                    }}
                    className={`p-1 rounded transition-colors ${
                      isSlate
                        ? 'text-slate-500 hover:text-rose-400 hover:bg-slate-700/60'
                        : 'text-stone-400 hover:text-rose-700 hover:bg-stone-300'
                    }`}
                    title="Elimina snippet"
                  >
                    <Trash2 size={13} />
                  </button>
                )}
              </div>
            </div>

            {/* Title */}
            <div className="flex items-center justify-between gap-2">
              <h3
                className={`text-xs md:text-sm font-semibold truncate ${
                  isSelected
                    ? isSlate
                      ? 'text-slate-100 font-bold'
                      : 'text-stone-900 font-bold'
                    : isSlate
                    ? 'text-slate-200'
                    : 'text-stone-800'
                }`}
              >
                {snippet.title}
              </h3>
              <ChevronRight
                size={14}
                className={`shrink-0 transition-transform ${
                  isSelected
                    ? 'translate-x-0.5 text-teal-400'
                    : isSlate
                    ? 'text-slate-600 group-hover:text-slate-400'
                    : 'text-stone-400 group-hover:text-stone-600'
                }`}
              />
            </div>

            {/* Path / Description */}
            <p
              className={`text-[11px] truncate mt-1 ${
                isSlate ? 'text-slate-400 font-mono' : 'text-stone-600 font-mono'
              }`}
            >
              {snippet.filePath || `locale/${snippet.id}.html`}
            </p>

            {/* Optional Description / Tags */}
            {snippet.description && (
              <p
                className={`text-[11px] line-clamp-1 mt-1 leading-snug ${
                  isSlate ? 'text-slate-400' : 'text-stone-600'
                }`}
              >
                {snippet.description}
              </p>
            )}

            {/* Mini Inline Preview if toggled */}
            {hasInlinePreview && (
              <div
                className="mt-2.5 rounded-md overflow-hidden border transition-all"
                style={{
                  borderColor: isSlate ? '#384353' : '#cbcfd8',
                }}
              >
                <div
                  className={`px-2 py-1 text-[10px] font-mono flex items-center justify-between border-b ${
                    isSlate
                      ? 'bg-[#181d24] text-slate-400 border-slate-700/60'
                      : 'bg-[#ded8ce] text-stone-600 border-stone-300'
                  }`}
                >
                  <span>Anteprima Live Scheda</span>
                  <span className="text-[9px]">sandbox isolata</span>
                </div>
                <div className="h-32 w-full bg-[#1e242c] relative">
                  <iframe
                    title={`mini-preview-${snippet.id}`}
                    srcDoc={snippet.code}
                    sandbox="allow-scripts"
                    className="w-full h-full border-0 pointer-events-none scale-90 origin-top-left"
                    style={{ width: '111%', height: '111%' }}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
