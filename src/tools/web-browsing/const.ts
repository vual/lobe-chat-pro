import {
  CodeIcon,
  FileIcon,
  FlaskConicalIcon,
  ImageIcon,
  MapIcon,
  MusicIcon,
  NewspaperIcon,
  SearchIcon,
  Share2Icon,
  VideoIcon,
} from 'lucide-react';

export const CATEGORY_ICON_MAP: Record<string, any> = {
  files: FileIcon,
  general: SearchIcon,
  images: ImageIcon,
  it: CodeIcon,
  map: MapIcon,
  music: MusicIcon,
  news: NewspaperIcon,
  science: FlaskConicalIcon,
  social_media: Share2Icon,
  videos: VideoIcon,
};

export const ENGINE_ICON_MAP: Record<string, string> = {
  'arxiv': 'https://icons.duckduckgo.com/ip3/arxiv.org.ico',
  'bilibili': 'https://icons.duckduckgo.com/ip3/bilibili.com.ico',
  'bing': 'https://icons.duckduckgo.com/ip3/www.bing.com.ico',
  'brave': 'https://icons.duckduckgo.com/ip3/brave.com.ico',
  'duckduckgo': 'https://icons.duckduckgo.com/ip3/www.duckduckgo.com.ico',
  'google': 'https://icons.duckduckgo.com/ip3/google.com.ico',
  'google scholar': 'https://icons.duckduckgo.com/ip3/scholar.google.com.ico',
  'npm': 'https://icons.duckduckgo.com/ip3/npmjs.com.ico',
  'qwant': 'https://icons.duckduckgo.com/ip3/www.qwant.com.ico',
  'youtube': 'https://icons.duckduckgo.com/ip3/youtube.com.ico',
};

export const CRAWL_CONTENT_LIMITED_COUNT = 7000;
