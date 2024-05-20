import { atom } from 'recoil';

export const selectedItemsState = atom<Record<string, string | null>>({
  key: 'selectedItemsState',
  default: {
    age: null,
    scent: null,
    weather: null,
    brand: null,
    times: null,
  },
});
