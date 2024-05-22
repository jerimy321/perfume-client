import MyPagePerfume from './myPagePerfume';

export default function Album() {
  const handleDeletePerfume = () => {
    alert('향수를 삭제할까요?');
  };

  return (
    <div className="flex flex-col bg-album-card shadow-album-card rounded-[30px] border w-[90%] border-white backdrop-blur-sm">
      <p
        className="flex justify-end mx-5 mt-5 mb-10 cursor-pointer"
        onClick={handleDeletePerfume}
      >
        삭제하기
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
      </div>
      <div>1 2 3 </div>
    </div>
  );
}
