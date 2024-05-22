import Button from '../components/button';
import { useRecoilValue } from 'recoil';
import { selectedItemsState } from '../recoil/recoilState';
import PerfumeCategoryButtons from '../components/perfumeCategoryButtons';
import Modal from '../components/modal';

export default function Main() {
  const selectedItems = useRecoilValue(selectedItemsState);
  const handleResultButtonClick = () => {
    console.log(selectedItems);
  };
  return (
    <div>
      <div className="flex flex-col items-center py-10 bg-gray-300 w-dvw">
        <h1>향수 추천을 위한</h1>
        <h1>당신의 취향을 선택해주세요</h1>
      </div>

      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#modal"
      >
        모달시험
      </button>

      <Modal
        title="휴지통이모티콘"
        content="선택된 향수 앨범을 삭제할까요?"
        negativeAnswer="아니요"
        positiveAnswer="네, 삭제할래요"
      />

      <div>
        <div className="flex items-center justify-center my-10">
          <PerfumeCategoryButtons />
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 my-10">
        <Button
          text="결과 보러가기"
          onClick={handleResultButtonClick}
          type="bg-slate-200"
        />
      </div>
    </div>
  );
}
