import React from 'react';
import { useRecoilState } from 'recoil';
import { perfumeCategory } from '../data/perfumeData';
import Button from './button';
import { selectedItemsState } from '../recoil/recoilState';

interface CarouselItemsProps {
  category: keyof typeof perfumeCategory;
}

const getGridLayout = (length: number) => {
  if (length <= 3) return 'flex flex-row gap-5';
  if (length === 4) return 'grid grid-cols-2 grid-rows-2 gap-5';
  if (length === 5 || length === 6)
    return 'flex flex-wrap justify-center gap-5';
  if (length === 10) return 'flex flex-wrap justify-center gap-5';
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

  return (
    <>
      {items.length > 4 ? (
        <>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {items.slice(0, 3).map((item) => (
              <Button
                key={item}
                text={item}
                type="h-[90px] w-[300px] text-main-button font-medium border border-white border-2 rounded-[15px] shadow-main-button"
                isActive={selectedItems.get(category) === item}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 m-3">
            {items.slice(3, 7).map((item) => (
              <Button
                key={item}
                text={item}
                type="h-[90px] w-[300px] text-main-button font-medium border border-white border-2 rounded-[15px] shadow-main-button"
                isActive={selectedItems.get(category) === item}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>
          {items.length > 7 && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              {items.slice(7).map((item) => (
                <Button
                  key={item}
                  text={item}
                  type="h-[90px] w-[300px] text-main-button font-medium border border-white border-2 rounded-[15px] shadow-main-button"
                  isActive={selectedItems.get(category) === item}
                  onClick={() => handleItemClick(item)}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div
          className={`flex justify-center items-center ${getGridLayout(items.length)}`}
        >
          {items.map((item) => (
            <Button
              key={item}
              text={item}
              type="h-[90px] w-[300px] text-main-button font-medium border border-white border-2 rounded-[15px] shadow-main-button"
              isActive={selectedItems.get(category) === item}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CarouselItems;
