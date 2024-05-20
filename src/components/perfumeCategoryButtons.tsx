import Button from './button';
import { categories } from '../data/perfumeData';
import { selectedItemsState } from '../recoil/recoilState';
import { useRecoilState } from 'recoil';

export default function PerfumeCategoryButtons() {
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);

  const handleButtonClick = (category: string, item: string) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [category]: item,
    }));
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
                isActive={selectedItems[category] === item}
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
