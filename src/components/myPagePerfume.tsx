import perfumImg from '../assets/images/perfumeIMG.jpg';

export default function MyPagePerfume() {
  return (
    <div className="flex flex-row items-start gap-2">
      <div className="flex flex-col items-start bg-white w-[280px] h-[400px] shadow-perfume-card p-4 border border-white rounded-[30px]">
        <input type="checkbox" className="mb-2" />
        <div className="flex flex-col items-center w-full">
          <img
            src={perfumImg}
            className="h-[200px] w-[85px] pt-3"
            alt="perfume"
          />
          <div className="border-t border-solid border-white20 w-[194px] my-7"></div>
          <span className="text-xl w-[145px] mx-auto text-center">제품명</span>
        </div>
      </div>
    </div>
  );
}
