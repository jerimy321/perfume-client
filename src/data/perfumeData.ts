export interface PerfumeCategory {
  category: string;
  items: string[];
  message: string;
}

export const perfumeCategories: PerfumeCategory[] = [
  {
    category: 'scent',
    items: [
      '상큼한 향',
      '꽃 향',
      '따뜻/달콤한 향',
      '달콤 과일 향',
      '상쾌/시원한 향',
      '푸른 풀잎 향',
      '나무 향',
      '흙/이끼 향',
      '강렬/짜릿한 향',
      '스모키 향',
    ],
    message: '이런 향을 선호해요.',
  },
  {
    category: 'gender',
    items: ['여성향', '남성향', '중성향'],
    message: '이런 향을 선호해요.',
  },
  {
    category: 'weather',
    items: ['봄', '여름', '가을', '겨울'],
    message: '이런 계절과 어울리면 좋겠어요.',
  },
  {
    category: 'times',
    items: ['낮', '밤'],
    message: '사용은 주로 이 시간에 할거예요.',
  },
  {
    category: 'age',
    items: ['10대', '20대', '30대', '40대', '50대 이상'],
    message: '이 연령대와 잘 어울렸으면 좋겠어요.',
  },
  {
    category: 'brand',
    items: ['샤넬', '디올', '르라보', '조말론', '딥디크', '톰포드'],
    message: '이런 브랜드를 선호해요.',
  },
];

export const getCategoryMessage = (category: string): string => {
  const foundCategory = perfumeCategories.find(
    (cat) => cat.category === category,
  );
  return foundCategory ? foundCategory.message : '';
};
