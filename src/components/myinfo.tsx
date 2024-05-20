import Button from './button';

export default function Myinfo() {
  return (
    <div className="flex flex-row items-center justify-around m-6 bg-slate-100">
      <div className="text-lg">로고</div>
      <div className="text-lg">장원영</div>
      <div className="text-lg">abcdefg@naver.com</div>
      <Button text={'로그아웃'} type={'rounded-none'} />
    </div>
  );
}
