import {useEffect, useRef, useState} from 'react';
import naverDefault from '../assets/images/logo_green.png'
import naverHover from '../assets/images/logo_white.png'

const NaverLogin = () => {
    const [isHover, setIsHover] = useState(false);

    const naverRef = useRef(null);
    const {naver}: any = window;

    const clientId = process.env.REACT_APP_NAVER_CLIENT_ID;
    const clientURL = 'http://localhost:3000/callback'

    useEffect(() => {
        console.log('REACT_APP_NAVER_CLIENT_ID:', clientId);

        if (!clientId) {
            console.error('Missing REACT_APP_NAVER_CLIENT_ID');
            return;
        }
        // DOM 요소가 렌더링된 후에 네이버 로그인 버튼을 초기화합니다.
        const naverLogin = new naver.LoginWithNaverId({
            clientId: clientId,
            callbackUrl: clientURL,
            isPopup: false,
            loginButton: {color: 'green', type: 3, height: '75'},
        });
        naverLogin.init();
    }, []);

    const handleNaverLogin = () => {
        if (
            document &&
            document?.querySelector("#naverIdLogin")?.firstChild &&
            window !== undefined
        ) {
            const loginBtn: any = document.getElementById("naverIdLogin")?.firstChild;
            loginBtn.click();
        }
    };

    return (
        <div className={'flex justify-center items-center '}>
            <div id="naverIdLogin" className="hidden">
            </div>
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {isHover ? (
                    <div
                        className='cursor-pointer inline-flex flex-col w-[460px] h-[94px] px-[103px] py-[27px] items-start gap-2.5 rounded-[15px] bg-naver-default border-2 border-naver-default'
                        onClick={handleNaverLogin}
                    >
                        <div className='flex flex-row w-full h-full justify-between'>
                            <img className='flex-shrink-0 mr-1' src={naverHover}/>
                            <p className='ml-1 w-full h-full text-center text-naver-button text-naver-default text-white'>네이버 간편 로그인</p>
                        </div>
                    </div>
                ) : (
                    <div
                        className='cursor-pointer inline-flex flex-col w-[460px] h-[94px] px-[103px] py-[27px] items-start gap-2.5 rounded-[15px] border-2 border-naver-default'>
                        <div className='flex flex-row w-full h-full justify-between'>
                            <img className='flex-shrink-0 mr-1' src={naverDefault}/>
                            <p className='ml-1 w-full h-full text-center text-naver-button text-naver-default'>네이버 간편 로그인</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NaverLogin;