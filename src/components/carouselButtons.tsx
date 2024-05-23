interface CarouselButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

const CarouselButtons: React.FC<CarouselButtonsProps> = ({
  onPrev,
  onNext,
}) => {
  return (
    <div className="absolute flex justify-center w-full gap-4 bottom-5">
      <button
        className="flex items-center justify-center w-12 h-12 bg-black bg-opacity-50 rounded-full"
        onClick={onPrev}
      >
        <span
          className="block w-5 h-5 custom-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="flex items-center justify-center w-12 h-12 bg-black bg-opacity-50 rounded-full"
        onClick={onNext}
      >
        <span
          className="block w-5 h-5 custom-next-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default CarouselButtons;
