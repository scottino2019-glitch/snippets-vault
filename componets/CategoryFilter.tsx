import React from 'react';
import { 
  Layers, 
  MousePointerClick, 
  SquareCode, 
  Compass, 
  CheckSquare, 
  Award, 
  Sparkles, 
  LayoutTemplate, 
  Code,
  Star,
  LayoutGrid,
  List,
  FileCode
} from 'lucide-react';
import { SnippetCategory } from '../types';
import { CATEGORIES_CONFIG } from '../data/defaultSnippets';

interface CategoryFilterProps {
  selectedCategory: SnippetCategory | 'all';
  onSelectCategory: (cat: SnippetCategory | 'all') => void;
  showFavoritesOnly: boolean;
  onToggleFavoritesOnly: () => void;
  favoritesCount: number;
  categoryCounts: Record<string, number>;
  viewMode: 'grid' | 'compact';
  onToggleViewMode: (mode: 'grid' | 'compact') => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Layers,
  MousePointerClick,
  SquareCode,
  Compass,
  CheckSquare,
  Award,
  Sparkles,
  LayoutTemplate,
  Code
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  showFavoritesOnly,
  onToggleFavoritesOnly,
  favoritesCount,
  categoryCounts,
  viewMode,
  onToggleViewMode,
}) => {
  return (
    <div className="space-y-3.5">
      {/* Upper row: Format badge + Favorites filter + View Mode toggle */}
      <div 
        style={{ borderColor: 'var(--border-color)' }}
        className="flex flex-wrap items-center justify-between gap-3 border-b pb-3"
      >
        {/* HTML Engine Indicator */}
        <div className="flex items-center gap-2">
          <div 
            style={{
              backgroundColor: 'var(--toolbar-bg)',
              borderColor: 'var(--border-color)',
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span style={{ color: 'var(--text-main)' }}>Archivio Solo HTML</span>
            <span 
              style={{ color: 'var(--text-subtle)' }}
              className="text-[11px] font-normal"
            >
              &bull; Anteprima 100% istantanea con Tailwind
            </span>
          </div>
        </div>

        {/* Right controls: Favorites & View Layout */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleFavoritesOnly}
            style={{
              backgroundColor: showFavoritesOnly ? 'var(--toolbar-bg)' : 'var(--card-bg)',
              borderColor: showFavoritesOnly ? '#d97706' : 'var(--border-color)',
              color: 'var(--text-main)',
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all hover:opacity-90 cursor-pointer shadow-2xs"
          >
            <Star className={`w-3.5 h-3.5 ${showFavoritesOnly ? 'fill-amber-500 text-amber-500' : 'text-stone-400'}`} />
            <span>Preferiti</span>
            {favoritesCount > 0 && (
              <span 
                style={{ backgroundColor: 'var(--input-bg)' }}
                className="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-bold"
              >
                {favoritesCount}
              </span>
            )}
          </button>

          {/* View mode */}
          <div 
            style={{
              backgroundColor: 'var(--toolbar-bg)',
              borderColor: 'var(--border-color)',
            }}
            className="hidden sm:flex items-center p-0.5 rounded-xl border"
          >
            <button
              onClick={() => onToggleViewMode('grid')}
              style={viewMode === 'grid' ? {
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-main)',
              } : {
                color: 'var(--text-subtle)'
              }}
              className="p-1.5 rounded-lg transition-all cursor-pointer"
              title="Griglia con Mini Anteprima"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleViewMode('compact')}
              style={viewMode === 'compact' ? {
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-main)',
              } : {
                color: 'var(--text-subtle)'
              }}
              className="p-1.5 rounded-lg transition-all cursor-pointer"
              title="Vista Lista Compatta"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills: Distinct color for every category */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-none">
        {CATEGORIES_CONFIG.map((cat) => {
          const Icon = ICON_MAP[cat.icon] || Code;
          const isSelected = selectedCategory === cat.id;
          const count = cat.id === 'all' 
            ? (Object.values(categoryCounts) as number[]).reduce((a, b) => a + (Number(b) || 0), 0)
            : (categoryCounts[cat.id] || 0);

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as any)}
              style={isSelected ? {
                boxShadow: `0 2px 8px ${cat.hex}33`,
              } : {
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-main)',
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 border cursor-pointer active:scale-95 ${
                isSelected ? cat.activeBtnClass : 'hover:opacity-90 hover:border-stone-400'
              }`}
            >
              {/* Colored Indicator Dot */}
              <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : cat.badgeDot} shrink-0`}></span>
              
              <Icon className="w-3.5 h-3.5 opacity-90" />
              <span>{cat.name}</span>
              
              {/* Counter badge */}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                  isSelected 
                    ? 'bg-black/20 text-white dark:bg-white/20' 
                    : 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-300'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
