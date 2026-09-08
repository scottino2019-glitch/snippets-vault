export type ThemeMode = 'light' | 'sky';

export type LayoutMode = 'grid' | 'stack';

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export interface CategoryInfo {
  id: string;
  name: string;
  color: string;
  dotBg: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  headerBg: string;
  headerBorder: string;
  headerHex: string;
}

export interface Snippet {
  id: string;
  title: string;
  category: string;
  code: string;
  filePath?: string;
  isCustom?: boolean;
  createdAt: number;
  description?: string;
  tags?: string[];
}

