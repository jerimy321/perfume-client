export interface PerfumeCategory {
  scent: string[];
  gender: string[];
  weather: string[];
  times: string[];
  age: string[];
  brand: string[];
}

export const perfumeCategory: PerfumeCategory = {
  scent: [
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
  gender: ['여성향', '남성향', '중성향'],
  weather: ['봄', '여름', '가을', '겨울'],
  times: ['낮', '밤'],
  age: ['10대', '20대', '30대', '40대', '50대 이상'],
  brand: ['샤넬', '디올', '르라보', '조말론', '딥디크', '톰포드'],
};
