import { useState } from 'react';
import axios from 'axios';
import naverDefault from '../assets/images/logo_green.png';
import naverHover from '../assets/images/logo_white.png';

const NaverLogin = () => {
    const [isHover, setIsHover] = useState(false);

    // 동적 state 생성 함수
    const generateState = () => {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0].toString(16);
    };

    const loginNaver = async () => {
        try {
            // 동적 파라미터 생성
            const state = generateState();
            const params = {
                response_type: 'code',
                client_id: 'BnPybIkMVLk8NisAwxuX',
                scope: 'nickname email',
                state: state,
                redirect_uri: 'https://perfume-bside.site/login/oauth2/code/naver'
            };

            // 네이버 로그인 URL 생성
            const queryString = new URLSearchParams(params).toString();
            const naverAuthUrl = `/naver-oauth-proxy?${queryString}`;

            // 프록시를 통해 네이버 로그인 창 요청
            const response = await axios.get(naverAuthUrl, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true
            });

            // 네이버 로그인 창 HTML을 브라우저에 반환
            document.open();
            document.write(response.data);
            document.close();
        } catch (error) {
            console.error('Error fetching login URL', error);
        }
    };

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
                            <img className="flex-shrink-0 mr-1" src={naverHover} alt="Naver Hover" />
                            <p className="w-full h-full ml-1 text-center text-white text-naver-button text-naver-default">
                                네이버 간편 로그인
                            </p>
                        </div>
                    </div>
                ) : (
                    <div
                        className="cursor-pointer inline-flex flex-col w-[460px] h-[94px] px-[103px] py-[27px] items-start gap-2.5 rounded-[15px] border-2 border-naver-default"
                        onClick={loginNaver}
                    >
                        <div className="flex flex-row justify-between w-full h-full">
                            <img className="flex-shrink-0 mr-1" src={naverDefault} alt="Naver Default" />
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
