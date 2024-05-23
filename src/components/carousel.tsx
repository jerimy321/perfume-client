import React from 'react';
import { perfumeCategory } from '../data/perfumeData';
import '../index.css';
import Button from './button';
import CarouselButtons from './carouselButtons';
import getCategoryMessage from '../data/useCategoryMessage';

const Carousel: React.FC = () => {
  const categories = Object.keys(
    perfumeCategory,
  ) as (keyof typeof perfumeCategory)[];

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel"
      data-interval="false"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {categories.map((category, index) => (
          <div
            key={category}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <div className="flex flex-col items-center justify-center text-center d-block w-dvw h-dvh">
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
      <CarouselButtons />
    </div>
  );
};

export default Carousel;
