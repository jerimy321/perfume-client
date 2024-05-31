import React, {useState} from 'react';
import naverDefault from '../assets/images/logo_green.png';
import naverHover from '../assets/images/logo_white.png';

const NaverLogin = () => {
    const [isHover, setIsHover] = useState(false);

    const handleNaverLogin = async () => {
        try {
            const response = await fetch('https://perfume-bside.site/oauth2/authorization/naver',{
                method: 'GET',
                credentials: 'include', // 자격증명
                });
            if (response.ok) {
                console.log('Login Succeed');
            } else {
                console.error('Login failed', response.statusText);
            }
        } catch (error) {
            console.error('로그인 중 오류 발생', error);
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
                        onClick={handleNaverLogin}
                    >
                        <div className="flex flex-row justify-between w-full h-full">
                            <img className="flex-shrink-0 mr-1" src={naverHover} alt="Naver Login Hover"/>
                            <p className="w-full h-full ml-1 text-center text-white text-naver-button text-naver-default">
                                네이버 간편 로그인
                            </p>
                        </div>
                    </div>
                ) : (
                    <div
                        className="cursor-pointer inline-flex flex-col w-[460px] h-[94px] px-[103px] py-[27px] items-start gap-2.5 rounded-[15px] border-2 border-naver-default"
                        onClick={handleNaverLogin}>
                        <div className="flex flex-row justify-between w-full h-full">
                            <img className="flex-shrink-0 mr-1" src={naverDefault} alt="Naver Login"/>
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
