import Button from './button';
import { categories } from '../data/perfumeData';

export default function PerfumeCategoryButtons() {
  const renderButtons = (category: string, items: string[]) => {
    return (
      <div className="p-5" key={category}>
        <h3 className="flex justify-center mb-5 text-xl font-semibold">
          {category}
        </h3>
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {items.map((item) => (
            <Button key={item} text={item} />
          ))}
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
