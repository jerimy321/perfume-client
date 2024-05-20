import {useEffect} from 'react';

const { naver } : any = window;
const NaverLogin = () => {
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
            loginButton: { color: 'green', type: 3, height: '48' },
        });
        naverLogin.init();
    }, []);

    return (
        <div id="naverIdLogin" className="w-1/4">
        </div>
    );
};

export default NaverLogin;