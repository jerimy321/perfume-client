import React from 'react';
import { useRecoilState } from 'recoil';
import { perfumeCategories } from '../data/perfumeData';
import Button from './button';
import { selectedItemsState } from '../recoil/recoilState';

interface CarouselItemsProps {
  category: string;
}

const CarouselItems: React.FC<CarouselItemsProps> = ({ category }) => {
  const categoryData = perfumeCategories.find(
    (cat) => cat.category === category,
  );
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);
  if (!categoryData) return null;

  const items = categoryData.items;

  const handleItemClick = (item: string) => {
    const newSelectedItems = new Map(selectedItems);
    newSelectedItems.set(category, item);
    setSelectedItems(newSelectedItems);
  };

  const renderButtons = (items: string[]) => (
    <div className="flex flex-wrap items-center justify-center gap-10">
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
    <div>
      {items.length > 4 ? (
        <>
          {renderButtons(items.slice(0, 3))}
          <div className="m-4">{renderButtons(items.slice(3, 7))}</div>
          {items.length > 7 && renderButtons(items.slice(7))}
        </>
      ) : items.length === 4 ? (
        <div className="flex items-center justify-center">
          {renderGrid(items)}
        </div>
      ) : (
        <div className="flex items-center justify-center mt-8">
          {renderButtons(items)}
        </div>
      )}
    </div>
  );
};

export default CarouselItems;
