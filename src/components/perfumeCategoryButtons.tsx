import { selectedItemsState } from '../recoil/recoilState';
import { useRecoilState } from 'recoil';

export default function PerfumeCategoryButtons() {
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);

  const handleButtonClick = (item: string) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      item,
    }));
  };

  // const renderButtons = (items: string[], category?: string) => {
  //   return (
  //     <div key={items}>
  //       <h3 className="mb-2 text-xl font-semibold">{category}</h3>
  //       <div className="flex flex-wrap gap-2 mb-4">
  //         {items.map((item) => {
  //           return (
  //             <MainpageButton
  //               key={item}
  //               text={item}
  //               isActive={selectedItems[category] === item}
  //               onClick={() => handleButtonClick(item)}
  //             />
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // };

  return <div></div>;
}
