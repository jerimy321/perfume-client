import MyPagePerfume from './mypagePerfume';

export default function Album() {
  const handleDeletePerfume = () => {
    alert('향수를 삭제할까요?');
  };

  return (
    <div className="flex flex-col">
      <p
        className="flex justify-end mx-5 mt-5 mb-10 cursor-pointer"
        onClick={handleDeletePerfume}
      >
        삭제하기
      </p>
      <div className="flex flex-row flex-wrap justify-center">
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
      </div>
    </div>
  );
}
