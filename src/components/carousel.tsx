import { useState } from 'react';
import { perfumeCategory } from '../data/perfumeData';
import CarouselButtons from './carouselButtons';
import getCategoryMessage from '../data/useCategoryMessage';
import CarouselItems from './carouselItems';
import PickHashtagSentence from './pickHashtagSentence';

const Carousel: React.FC = () => {
  const categories = Object.keys(
    perfumeCategory,
  ) as (keyof typeof perfumeCategory)[];
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative flex flex-col items-center h-full overflow-auto">
      <div className="flex justify-center w-full mt-10">
        {categories.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full mx-1 ${index === activeIndex ? 'bg-black' : 'bg-gray-400'}`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
      <PickHashtagSentence />
      {categories.map((category, index) =>
        index === activeIndex ? (
          <div
            key={category}
            className="flex flex-col items-center justify-center h-full text-center w-dvw text-subtitle1"
          >
            <div className="my-[50px] text-subtitle1">
              {getCategoryMessage(category)}
            </div>
            <CarouselItems category={category} />
          </div>
        ) : null,
      )}
      <CarouselButtons onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};

export default Carousel;
