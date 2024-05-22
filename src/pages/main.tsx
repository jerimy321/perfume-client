import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedItemsState } from '../recoil/recoilState';
import Carousel from '../components/carousel';
import Button from '../components/button';

export default function Main() {
  const selectedItems = useRecoilValue(selectedItemsState);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-center bg-cover bg-home-bg">
      <Carousel />
      <div>
        <div className="flex items-center justify-center my-10">
          <Button
            text={'샤넬'}
            type="h-[90px] w-[300px] text-main-button font-medium border border-white border-2 rounded-[15px] shadow-main-button"
          />
        </div>
      </div>
    </div>
  );
}
