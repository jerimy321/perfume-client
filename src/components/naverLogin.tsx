import { useState } from 'react';
import naverDefault from '../assets/images/logo_green.png';
import naverHover from '../assets/images/logo_white.png';
import axios from 'axios';

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

            // 첫 번째 요청: 서버에서 302 리디렉션 주소를 받기
            const queryString = new URLSearchParams(params).toString();
            const response = await axios.get(
                `https://perfume-bside.site/oauth2/authorization/naver?${queryString}`,
                {
                    maxRedirects: 0 // 리디렉션을 거부
                }
            );

            // 두 번째 요청: 프록시를 통해 302 리디렉션 주소로 우회 요청
            if (response.status === 302) {
                const redirectUrl = response.headers.location;
                if (redirectUrl) {
                    // 프록시를 통해 네이버 로그인 창 요청
                    const naverResponse = await axios.get(redirectUrl, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        withCredentials: true
                    });

                    // 네이버 로그인 창 HTML을 브라우저에 반환
                    document.open();
                    document.write(naverResponse.data);
                    document.close();
                }
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            const err = error as any;
            if (err.response && err.response.status === 302) {
                // 302 응답의 location 헤더에서 URL을 가져와 리디렉션
                const redirectUrl = err.response.headers.location;
                if (redirectUrl) {
                    // 프록시를 통해 네이버 로그인 창 요청
                    const naverResponse = await axios.get(redirectUrl, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        withCredentials: true
                    });

                    // 네이버 로그인 창 HTML을 브라우저에 반환
                    document.open();
                    document.write(naverResponse.data);
                    document.close();
                }
            } else {
                console.error('Error fetching login URL', err);
            }
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
                            <img className="flex-shrink-0 mr-1" src={naverHover} alt="Naver Hover"/>
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
                            <img className="flex-shrink-0 mr-1" src={naverDefault} alt="Naver Default"/>
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
