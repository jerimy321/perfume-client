import {useEffect, useRef, useState} from 'react';
import naverLoginBtn from '../assets/images/button_login_default.svg'
import naverLoginBtnHover from '../assets/images/button_login_hover.svg'

const NaverLogin = () => {
    const [isHover, setIsHover] = useState(false);

    const naverRef = useRef(null);
    const { naver } : any = window;

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
            loginButton: { color: 'green', type: 3, height: '75' },
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
        <div className={'flex justify-center items-center'}>
            <div id="naverIdLogin" className="hidden">
            </div>
            <div
                onMouseEnter={()=>setIsHover(true)}
                onMouseLeave={()=>setIsHover(false)}
            >
                {isHover ? (
                    <img
                        src={naverLoginBtnHover}
                        onClick={handleNaverLogin}
                    />

                ) : (
                    <img src={naverLoginBtn}/>
                )}
            </div>
        </div>
    );
};

export default NaverLogin;