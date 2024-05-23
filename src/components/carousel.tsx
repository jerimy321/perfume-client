import { useState } from 'react';
import { perfumeCategory } from '../data/perfumeData';
import Button from './button';
import CarouselButtons from './carouselButtons';
import getCategoryMessage from '../data/useCategoryMessage';

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
    <div id="carouselIndicators" className="relative overflow-hidden">
      <div className="carousel-inner">
        {categories.map((category, index) => (
          <div
            key={category}
            className={`carousel-item ${index === activeIndex ? 'active' : 'hidden'} w-full h-screen flex items-center justify-center`}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <h5 className="mb-4 text-subtitle1">
                {getCategoryMessage(category)}
              </h5>
              <div className="flex flex-wrap justify-center gap-2">
                {perfumeCategory[category].map((item) => (
                  <Button
                    key={item}
                    text={item}
                    type="h-[90px] w-[300px] text-main-button font-medium border border-white border-2 rounded-[15px] shadow-main-button"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <CarouselButtons onPrev={handlePrev} onNext={handleNext} />
      <div className="absolute bottom-0 flex justify-center w-full pb-2">
        {categories.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full mx-1 ${index === activeIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
