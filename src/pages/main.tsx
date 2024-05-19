import Button from '../components/button';
import PerfumeCategoryButtons from '../components/perfumeCategoryButtons';

export default function Main() {
  return (
    <div>
      <div className="flex flex-col items-center py-10 bg-gray-300 w-dvw">
        <h1>향수 추천을 위한</h1>
        <h1>당신의 취향을 선택해주세요</h1>
      </div>
      <div>
        <div className="flex items-center justify-center my-10">
          <PerfumeCategoryButtons />
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 my-10">
        <Button text="결과 보러가기" type="bg-slate-200" />
      </div>
    </div>
  );
}
