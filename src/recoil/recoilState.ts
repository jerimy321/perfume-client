import { atom, selector } from 'recoil';
import { perfumeCategory, PerfumeCategory } from '../data/perfumeData';

export const selectedItemsState = atom<Map<keyof PerfumeCategory, string>>({
  key: 'selectedItemsState',
  default: new Map(),
});

export const hashtagListState = selector({
  key: 'hashtagListState',
  get: ({ get }) => {
    const selectedItems = get(selectedItemsState);
    return Array.from(selectedItems.values());
  },
});

const getNaverTokenFromLocalStorage = () => {
  const naverToken = localStorage.getItem('naverToken');
  return naverToken ? naverToken : null;
};

export const naverTokenState = atom({
  key: 'naverTokenState',
  default: getNaverTokenFromLocalStorage(),
});
