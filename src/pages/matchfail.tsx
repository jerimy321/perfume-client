import { useNavigate } from 'react-router-dom';

export default function MatchFail() {
  const nav = useNavigate();
  const handleClicked = () => {
    nav('/main');
  };
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-center bg-cover bg-matching-none-bg font-pretendard">
      <span className="text-[68px] font-normal mt-20">아쉬워요,</span>
      <span className="text-[68px] font-normal">
        <span className="font-semibold">취향 저격 향수</span>를 찾을 수 없어요.
      </span>

      <span className="text-[42px] font-normal mt-[100px] mb-20  text-mainbutton-default">
        취향을 수정해 다시 한 번 시도해볼까요?
      </span>

      <button
        onClick={handleClicked}
        className="flex w-384 h-90 py-2 px-67 justify-center items-center gap-2.5 mx-auto rounded-2xl border-2 border-white font-pretendard text-home-button bg-home-button shadow-home-button hover:bg-white hover:shadow-home-button-hover"
      >
        추천 받으러 가기
      </button>
    </div>
  );
}
