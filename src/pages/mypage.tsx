import Album from '../components/album';
import Myinfo from '../components/myinfo';

export default function Mypage() {
  return (
    <div className="flex flex-col items-center bg-slate-200">
      <div className="flex flex-col items-center my-4">
        <h1 className="p-4 text-2xl font-bold">MY PAGE</h1>
        <div className="flex flex-row gap-3">
          <h2 className="text-2xl">향수 앨범</h2>
          <h2 className="text-2xl">|</h2>
          <h2 className="text-2xl">내 정보</h2>
        </div>
      </div>
      <div className="flex flex-col bg-slate-50 h-[625px] w-4/5">
        <Album />
        <Myinfo />
      </div>
      <div className="py-10">1 2 3</div>
    </div>
  );
}
