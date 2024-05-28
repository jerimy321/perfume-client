
import naverDefault from '../assets/images/logo_green.png';
import naverHover from '../assets/images/logo_white.png';
import React, { useState, useEffect } from 'react';

const NaverLogin: React.FC = () => {
    const [isHover, setIsHover] = useState(false);

    const loginNaver = () => {
        const oauth2Url = process.env.REACT_APP_API_URL + '/oauth2/authorization/naver';
        const oauth2Window = window.open(oauth2Url, 'oauth2Window', 'width=800,height=600');

        if (oauth2Window) {
            const checkPopup = setInterval(() => {
                if (oauth2Window.closed) {
                    clearInterval(checkPopup);
                    // 여기에 부모 창으로 인증 정보를 전달하는 로직 추가
                    window.location.reload();  // 예시로 페이지를 새로고침하여 인증 상태를 업데이트합니다.
                }
            }, 1000);
        } else {
            console.error('Popup window could not be opened');
        }
    };

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data === 'authenticated') {
                // 인증 성공 처리 로직
                window.location.reload();
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);
// const NaverLogin = () => {
//   const [isHover, setIsHover] = useState(false);
//   const loginNaver = async () => {
//     try {
//       const response = await axios.get(
//         process.env.REACT_APP_API_URL + '/oauth2/authorization/naver',
//       );
//       window.location.href = response.data;
//     } catch (error) {
//       console.error('Error Posting Login');
//     }
//   };

  return (
    <div className={'flex justify-center items-center mb-[15px]'}>
      <div id="naverIdLogin" className="hidden"></div>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <div
            className="cursor-pointer inline-flex flex-col w-[460px] h-[94px] px-[103px] py-[27px] items-start gap-2.5 rounded-[15px] bg-naver-default border-2 border-naver-default"
            onClick={loginNaver}
          >
            <div className="flex flex-row justify-between w-full h-full">
              <img className="flex-shrink-0 mr-1" src={naverHover} />
              <p className="w-full h-full ml-1 text-center text-white text-naver-button text-naver-default">
                네이버 간편 로그인
              </p>
            </div>
          </div>
        ) : (
          <div className="cursor-pointer inline-flex flex-col w-[460px] h-[94px] px-[103px] py-[27px] items-start gap-2.5 rounded-[15px] border-2 border-naver-default">
            <div className="flex flex-row justify-between w-full h-full">
              <img className="flex-shrink-0 mr-1" src={naverDefault} />
              <p className="w-full h-full ml-1 text-center text-naver-button text-naver-default">
                네이버 간편 로그인
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NaverLogin;
