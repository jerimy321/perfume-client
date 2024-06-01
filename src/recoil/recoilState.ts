import { atom, selector } from 'recoil';
import {getCookie} from '../util/getCookie';
export interface Perfume {
  id: number;
  name: string;
  ename: string;
  brand: string;
  imageURL: string;
  content?: string;
}

export interface MatchedPerfumes {
  mainPerfume: Perfume;
  subPerfumes: Perfume[];
}
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

export const matchedPerfumesState = atom<MatchedPerfumes>({
  key: 'matchedPerfumesState',
  default: {
    mainPerfume: {
      id: 0,
      name: '',
      ename: '',
      brand: '',
      imageURL: '',
      content: ''
    },
    subPerfumes: []
  }
});

const getNaverTokenFromCookie = () => {
  const naverToken = getCookie('JSESSIONID');
  return naverToken ? naverToken : null;
};

export const naverTokenState = atom({
  key: 'naverTokenState',
  default: getNaverTokenFromCookie(),
});
