import { useState } from 'react';
import naverDefault from '../assets/images/logo_green.png';
import naverHover from '../assets/images/logo_white.png';
import axios from 'axios';

const NaverLogin = () => {
    const [isHover, setIsHover] = useState(false);

    const loginNaver = async () => {
/*
        const response = await axios.post(process.env.REACT_APP_API_URL + 'oauth2/authorization/naver');
        const url = response.data
*/
        const url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=BnPybIkMVLk8NisAwxuX&scope=nickname%20email&state=zsOdxWpCPRoZxTi-465Uuky817rZWCkyex3bCUsURYc%3D&redirect_uri=https://perfume-bside.site/login/oauth2/code/naver'
        window.location.href = url;
    };

  return (
    <div className={'flex justify-center items-center mb-[70px]'}>
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
