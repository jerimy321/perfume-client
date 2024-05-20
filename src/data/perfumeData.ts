export interface Perfume {
  id: number;
  name: string;
  brand: string;
  scent: string[];
  weather: string[];
  times: string[];
  age: string[];
}

export const perfumes: Perfume[] = [
  {
    id: 1,
    name: 'Eau de Parfum',
    brand: 'Brand A',
    scent: ['floral', 'fresh'],
    weather: ['spring', 'summer'],
    times: ['daytime'],
    age: ['20s'],
  },
  {
    id: 2,
    name: 'Citrus Cologne',
    brand: 'Brand B',
    scent: ['citrus', 'zesty'],
    weather: ['summer'],
    times: ['evening'],
    age: ['30s'],
  },
  // ... 추가 향수 데이터
];

export const categories: Record<string, string[]> = {
  age: ['teen', '20s', '30s', '40s', '50s', 'none'],
  scent: [
    'floral',
    'fresh',
    'citrus',
    'woody',
    'spicy',
    'oriental',
    'feminine',
    'masculine',
    'neutral',
    'none',
  ],
  weather: ['spring', 'summer', 'autumn', 'winter', 'none'],
  times: ['evening', 'daytime', 'none'],
  brand: ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'none'],
};
