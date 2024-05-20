import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';
import {naverTokenState} from '../recoil/recoilState';

export default function NaverCallback() {
    const location = useLocation();
    const setTokenState = useSetRecoilState(naverTokenState);

    useEffect(() => {
        const hash = location.hash;
        const params = new URLSearchParams(hash.substring(1));
        const token = params.get('access_token');
        if (token) {
            setTokenState(token);
            window.location.href = '/';
        }
    }, [location]);

    return (
        <div>
            네이버 로그인 처리 중...
        </div>
    );
}