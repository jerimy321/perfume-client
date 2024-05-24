import {useState} from 'react';
import naverDefault from '../assets/images/logo_green.png';
import naverHover from '../assets/images/logo_white.png';
import axios from 'axios';

const NaverLogin = () => {
    const [isHover, setIsHover] = useState(false);
    const client_id = process.env.REACT_APP_NAVER_CLIENT_ID;
    const redirect_uri = 'https://perfume-client.vercel.app/callback';
    const state = 'jfsdkhjfjklsdhgjkl';
    const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&state=${state}&redirect_uri=${redirect_uri}`;

    const loginNaver = async () => {
        try {
            // 백엔드 서버로 POST 요청을 보냅니다.
            window.location.href = url;
            // 응답을 받아서 처리할 작업을 여기에 추가하세요.
        } catch (error) {
            console.error('간편로그인 요청 실패:', error);
        }
    }

    return (
        <div className={'flex justify-center items-center '}>
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
                            <img className="flex-shrink-0 mr-1" src={naverHover}/>
                            <p className="w-full h-full ml-1 text-center text-white text-naver-button text-naver-default">
                                네이버 간편 로그인
                            </p>
                        </div>
                    </div>
                ) : (
                    <div
                        className="cursor-pointer inline-flex flex-col w-[460px] h-[94px] px-[103px] py-[27px] items-start gap-2.5 rounded-[15px] border-2 border-naver-default">
                        <div className="flex flex-row justify-between w-full h-full">
                            <img className="flex-shrink-0 mr-1" src={naverDefault}/>
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
