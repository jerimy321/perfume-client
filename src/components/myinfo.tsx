import Button from './button';
import LogoutIcon from '../assets/icons/icon_logout.svg';
import Logo from '../assets/icons/naver_circle.svg';

export default function Myinfo() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-row items-center justify-around m-6 w-[90%] h-[200px] backdrop-blur-sm bg-album-card shadow-info-card rounded-[30px]">
        <img src={Logo} alt="네이버로고" />
        <div className="text-[26px] font-semibold">장원영</div>
        <div className="text-[26px] font-normal">abcdefg@naver.com</div>
        <Button
          text={'로그아웃'}
          type={
            'bg-gray60 text-white w-[224px] h-[62px] rounded-[30px] font-bold text-[26px] font-medium'
          }
          imgSrc={LogoutIcon}
        />
      </div>
      <div className="flex items-center justify-center mb-6">
        <Button
          text={'탈퇴하기'}
          type={
            'text-[26px] font-normal border border-gray40 rounded-[30px] w-[194px] h-[62px]'
          }
        />
      </div>
    </div>
  );
}
