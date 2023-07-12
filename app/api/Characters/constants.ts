export const BASE_URL = 'https://rickandmortyapi.com/api/character';
export const ENDPOINTS = {
  ID: ({ id }: { id: string }) => `${BASE_URL}/${id}`,
};
