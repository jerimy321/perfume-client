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

const getNaverTokenFromLocalStorage = () => {
  const naverToken = localStorage.getItem('naverToken');
  return naverToken ? naverToken : null;
}

export const naverTokenState = atom({
  key: 'naverTokenState',
  default: getNaverTokenFromLocalStorage(),
});