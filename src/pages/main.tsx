import { useRecoilValue } from 'recoil';
import { selectedItemsState } from '../recoil/recoilState';
import Carousel from '../components/carousel';

export default function Main() {
  const selectedItems = useRecoilValue(selectedItemsState);

  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen bg-center bg-cover bg-home-bg font-pretendard">
      <div className="flex flex-col items-center justify-center w-full">
        <Carousel />
      </div>
    </div>
  );
}
