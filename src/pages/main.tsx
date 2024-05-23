import { useRecoilValue } from 'recoil';
import { selectedItemsState } from '../recoil/recoilState';
import Carousel from '../components/carousel';
import PickHashtagSentence from '../components/pickHashtagSentence';

export default function Main() {
  const selectedItems = useRecoilValue(selectedItemsState);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-center bg-cover bg-home-bg font-pretendard">
      <PickHashtagSentence />
      <Carousel />
    </div>
  );
}
