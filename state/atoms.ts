import { getCharactersById } from '@/app/api/Characters/characters';
import { Character } from '@/interfaces/characters';
import { atom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';

export const characterAtomId = atom<number>(Math.round(Math.random() * 800));
export const [CharacterAtom, CharacterAtomStatus] = atomsWithQuery<Character>(
  (get) => {
    const id = get(characterAtomId);
    return {
      queryKey: ['character', id],
      queryFn: async () => await getCharactersById(id),
      enabled: !!id,
    };
  }
);
