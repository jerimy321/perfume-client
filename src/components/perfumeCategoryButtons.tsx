import React, { useState } from 'react';
import Button from './button';
import { categories } from '../data/perfumeData';

export default function PerfumeCategoryButtons() {
  const [activeItems, setActiveItems] = useState<Record<string, string | null>>(
    {
      scent: null,
      weather: null,
      brand: null,
      times: null,
    },
  );

  const handleButtonClick = (category: string, item: string) => {
    setActiveItems((prevItems) => ({
      ...prevItems,
      [category]: item,
    }));
    console.log(activeItems);
  };

  const renderButtons = (category: string, items: string[]) => {
    return (
      <div key={category}>
        <h3 className="mb-2 text-xl font-semibold">{category}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {items.map((item) => {
            return (
              <Button
                key={item}
                text={item}
                isActive={activeItems[category] === item}
                onClick={() => handleButtonClick(category, item)}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      {Object.keys(categories).map((category) =>
        renderButtons(category, categories[category]),
      )}
    </div>
  );
}
