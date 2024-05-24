import React from 'react';
import { useRecoilValue } from 'recoil';
import { perfumeCategories } from '../data/perfumeData';
import CarouselButtons from './carouselButtons';
import CarouselItems from './carouselItems';
import PickHashtagSentence from './pickHashtagSentence';
import { hashtagListState } from '../recoil/recoilState';
import { postHashtags } from '../api/perfumeMatching';
import useCarousel from '../hooks/useCarousel';

const Carousel: React.FC = () => {
  const categories = perfumeCategories.map((cat) => cat.category);
  const { activeIndex, handlePrev, handleNext, handleIndicatorClick } =
    useCarousel(categories);
  const hashtagList = useRecoilValue(hashtagListState);

  const handleSubmit = async () => {
    try {
      const response = await postHashtags(hashtagList);
      console.log('Submission successful:', response);
    } catch (error) {
      console.error('Error submitting hashtags:', error);
    }
  };

  return (
    <div className="relative flex flex-col items-center h-full overflow-auto">
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <span className="text-[20px] text-gray150">
          {activeIndex + 1} / {categories.length}
        </span>
        <div>
          {categories.map((_, index) => (
            <button
              key={categories[index]}
              type="button"
              className={`w-[50px] h-1 mx-1 ${index <= activeIndex ? 'bg-black' : 'bg-gray150'}`}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>
      </div>
      <PickHashtagSentence />
      {categories.map((category, index) =>
        index === activeIndex ? (
          <div
            key={category}
            className="flex flex-col items-center justify-center h-full text-center w-dvw text-subtitle1"
          >
            <div className="my-[50px] text-subtitle1">
              {
                perfumeCategories.find((cat) => cat.category === category)
                  ?.message
              }
            </div>
            <CarouselItems category={category} />
          </div>
        ) : null,
      )}
      <CarouselButtons
        onPrev={handlePrev}
        onNext={handleNext}
        isFirstPage={activeIndex === 0}
        isLastPage={activeIndex === categories.length - 1}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Carousel;
