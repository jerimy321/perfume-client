import React from 'react';
import { useRecoilState } from 'recoil';
import { perfumeCategory } from '../data/perfumeData';
import Button from './button';
import { selectedItemsState } from '../recoil/recoilState';

interface CarouselItemsProps {
  category: keyof typeof perfumeCategory;
}

const getGridLayout = (length: number): string => {
  if (length <= 3) return 'flex flex-row gap-5';
  if (length >= 5) return 'flex flex-wrap justify-center gap-5';
  return 'flex flex-wrap justify-center gap-5';
};

const CarouselItems: React.FC<CarouselItemsProps> = ({ category }) => {
  const items = perfumeCategory[category];
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);

  const handleItemClick = (item: string) => {
    const newSelectedItems = new Map(selectedItems);
    newSelectedItems.set(category, item);
    setSelectedItems(newSelectedItems);
  };

  const renderButtons = (items: string[]) => (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {items.map((item) => {
        const isActive = selectedItems.get(category) === item;
        const buttonClass = `h-[90px] w-[300px] text-main-button font-medium border border-white border-2 rounded-[15px] shadow-main-button ${isActive ? 'bg-white text-black' : 'bg-mainbutton-bg text-mainbutton-default'}`;
        return (
          <Button
            key={item}
            text={item}
            type={buttonClass}
            onClick={() => handleItemClick(item)}
          />
        );
      })}
    </div>
  );

  const renderGrid = (items: string[]) => (
    <div className="grid grid-cols-2 gap-5">
      {items.map((item) => {
        const isActive = selectedItems.get(category) === item;
        const buttonClass = `h-[90px] w-[300px] text-main-button font-medium border border-white border-2 rounded-[15px] shadow-main-button ${isActive ? 'bg-white text-black' : 'bg-mainbutton-bg text-mainbutton-default'}`;
        return (
          <Button
            key={item}
            text={item}
            type={buttonClass}
            onClick={() => handleItemClick(item)}
          />
        );
      })}
    </div>
  );

  return (
    <>
      {items.length > 4 ? (
        <>
          {renderButtons(items.slice(0, 3))}
          <div className="m-3">{renderButtons(items.slice(3, 7))}</div>
          {items.length > 7 && renderButtons(items.slice(7))}
        </>
      ) : items.length === 4 ? (
        <div className="flex items-center justify-center h-full">
          {renderGrid(items)}
        </div>
      ) : (
        <div
          className={`flex justify-center items-center ${getGridLayout(items.length)}`}
        >
          {renderButtons(items)}
        </div>
      )}
    </>
  );
};

export default CarouselItems;
