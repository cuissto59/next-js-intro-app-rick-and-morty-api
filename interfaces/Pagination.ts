import { Character } from './characters';

export interface PaginationInfo {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface Pagination<T extends Character> {
  info: PaginationInfo;
  results: T[];
}
