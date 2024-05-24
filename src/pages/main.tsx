import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedItemsState, hashtagListState } from '../recoil/recoilState';
import Carousel from '../components/carousel';

export default function Main() {
  const selectedItems = useRecoilValue(selectedItemsState);
  const hashtagList = useRecoilValue(hashtagListState);
  const [backgroundImage, setBackgroundImage] = useState(
    '/assets/images/bg_main_1.svg',
  );

  const handleSlideChange = (index: number) => {
    const images = [
      '/assets/images/bg_main_2.svg',
      '/assets/images/bg_main_3.svg',
      '/assets/images/bg_main_4.svg',
      '/assets/images/bg_main_5.svg',
      '/assets/images/bg_main_6.svg',
    ];
    setBackgroundImage(images[index % images.length]);
  };

  console.log('Selected Items:', selectedItems);
  console.log('Hashtag List:', hashtagList);

  return (
    <div
      className="flex flex-col flex-1 w-screen h-screen bg-center bg-cover font-pretendard"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Carousel onSlideChange={handleSlideChange} />
    </div>
  );
}
