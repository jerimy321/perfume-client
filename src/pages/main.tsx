import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedItemsState, hashtagListState } from '../recoil/recoilState';
import Carousel from '../components/carousel';

export default function Main() {
  const selectedItems = useRecoilValue(selectedItemsState);
  const hashtagList = useRecoilValue(hashtagListState);
  const [backgroundImage, setBackgroundImage] = useState(
    '/assets/images/bg_main_6.png',
  );

  const categoryImages: { [key: string]: string } = {
    scent: '/assets/images/bg_main_1.png',
    gender: '/assets/images/bg_main_2.png',
    weather: '/assets/images/bg_main_3.png',
    times: '/assets/images/bg_main_4.png',
    age: '/assets/images/bg_main_5.png',
    brand: '/assets/images/bg_main_6.png',
  };

  const handleCategoryChange = (category: string) => {
    if (categoryImages.hasOwnProperty(category)) {
      setBackgroundImage(categoryImages[category]);
    } else {
      console.error(`No image found for category: ${category}`);
    }
  };

  console.log('Selected Items:', selectedItems);
  console.log('Hashtag List:', hashtagList);

  return (
    <div
      className="flex flex-col flex-1 w-[1920px] h-[1080px] bg-center bg-cover font-pretendard"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Carousel onCategoryChange={handleCategoryChange} />
    </div>
  );
}
