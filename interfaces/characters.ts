import { GENDER, STATUS } from '@/constants/constants';

export type Status = (typeof STATUS)[keyof typeof STATUS];

export type Gender = (typeof GENDER)[keyof typeof GENDER];
export type Location = {
  name: string;
  url: string;
};

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
