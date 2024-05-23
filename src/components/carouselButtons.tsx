import React from 'react';
import Button from './button';
import NextIcon from '../assets/icons/icon_next.svg';

interface CarouselButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  isLastPage?: boolean;
  onSubmit?: () => void;
}

const CarouselButtons: React.FC<CarouselButtonsProps> = ({
  onPrev,
  onNext,
  isLastPage,
  onSubmit,
}) => {
  return (
    <div className="fixed flex justify-center w-full gap-4 bottom-4">
      <Button
        type="gap-2 flex items-center text-modal-button justify-center w-[190px] h-[62px] rounded-30 text-gray176"
        text="Back"
        onClick={onPrev}
        imgSrc={NextIcon}
      />

      <Button
        type="gap-2 flex flex-row-reverse text-modal-button items-center justify-center w-[190px] h-[62px] rounded-30 bg-black text-white"
        onClick={isLastPage ? onSubmit : onNext}
        text={isLastPage ? 'Submit' : 'Next'}
        imgSrc={NextIcon}
        imgClassName="rotate-180"
      />
      <Button
        type="flex items-center text-modal-button justify-center w-[190px] h-[62px] rounded-30 text-gray176"
        text="Skip"
        onClick={onNext}
      />
    </div>
  );
};

export default CarouselButtons;
