import { DEFAULT_CHARACTER } from '@/constants/constants';
import { Character } from '@/interfaces/characters';
import { Pagination } from '@/interfaces/Pagination';
import { BASE_URL, ENDPOINTS } from '../Characters/constants';

export const getCharacters = async () => {
  const res = await fetch(BASE_URL);
  const data: Pagination<Character> = await res.json();

  return data;
};

export const getCharactersById = async (id: number) => {
  if (id) {
    const res = await fetch(ENDPOINTS.ID({ id: id.toString() }));
    const data: Character = await res.json();
    return data;
  }
  return DEFAULT_CHARACTER;
};
