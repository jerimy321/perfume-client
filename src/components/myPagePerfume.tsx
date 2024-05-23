import perfumImg from '../assets/images/perfumeIMG.png';

interface Perfume {
  myPerfumeId: number;
  name: string;
  engName: string;
  brand: string;
  imageURL: string;
}
interface MyPagePerfumeProps {
  perfume: Perfume;
}

const MyPagePerfume: React.FC<MyPagePerfumeProps> = ({ perfume }) => {
  return (
    <div className="flex flex-col items-start bg-white w-[282px] h-[382px] shadow-perfume-card p-4 border border-white rounded-[30px]">
      <div className="flex flex-col items-center w-full">
        <input type="checkbox" className="content-start mb-2" />
        <img
          src={perfumImg}
          className="h-[200px] w-[85px] pt-3"
          alt={perfume.name}
        />
        <ul className="flex flex-col p-0 m-0 text-center">
          <li className="text-[14px] my-2 text-header-default font-medium">
            {perfume.brand}
          </li>
          <li className="text-[18px] text-center text-nowrap">
            {perfume.name}
          </li>
          <li className="text-[18px] text-gray150 font-normal text-center text-nowrap">
            {perfume.engName}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyPagePerfume;
