export interface Perfume {
  id: number;
  name: string;
  brand: string;
  scent: string[];
  weather: string[];
  times: string[];
}

export const perfumes: Perfume[] = [
  {
    id: 1,
    name: 'Eau de Parfum',
    brand: 'Brand A',
    scent: ['floral', 'fresh'],
    weather: ['spring', 'summer'],
    times: ['daytime'],
  },
  {
    id: 2,
    name: 'Citrus Cologne',
    brand: 'Brand B',
    scent: ['citrus', 'zesty'],
    weather: ['summer'],
    times: ['evening'],
  },
  // ... 추가 향수 데이터
];

export const categories: Record<string, string[]> = {
  scent: ['floral', 'fresh', 'citrus', 'woody', 'spicy', 'oriental'],
  weather: ['spring', 'summer', 'autumn', 'winter'],
  brand: ['Brand A', 'Brand B', 'Brand C', 'Brand D'],
  times: ['evening', 'daytime'],
};
