import { PerfumeCategory } from './perfumeData';

const getCategoryMessage = (category: keyof PerfumeCategory): string => {
  switch (category) {
    case 'scent':
    case 'gender':
      return '이런 향을 선호해요.';
    case 'weather':
      return '이런 계절과 어울리면 좋겠어요.';
    case 'times':
      return '사용은 주로 이 시간에 할거예요.';
    case 'age':
      return '이 연령대와 잘 어울렸으면 좋겠어요.';
    case 'brand':
      return '이런 브랜드를 선호해요.';
    default:
      return '';
  }
};

export default getCategoryMessage;
