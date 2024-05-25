import { atom, selector } from 'recoil';

export const selectedItemsState = atom<Map<string, string>>({
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

export const matchedPerfumesState = atom({
  key: 'matchedPerfumesState',
  default: {
    mainPerfume: {},
    subPerfumes: [],
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
