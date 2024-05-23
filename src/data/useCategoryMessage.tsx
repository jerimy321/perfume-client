import { PerfumeCategory } from './perfumeData';

const getCategoryMessage = (category: keyof PerfumeCategory): string => {
  switch (category) {
    case 'scent':
    case 'gender':
      return '이런 향이 좋아요';
    case 'weather':
      return '이런 계절에 어울리면 좋겠어요';
    case 'times':
      return '이때 사용할 거예요';
    case 'age':
      return '이 연령대에요';
    case 'brand':
      return '이 브랜드를 선호해요';
    default:
      return '';
  }
};

export default getCategoryMessage;
