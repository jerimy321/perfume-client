import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

export default function NaverCallback() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const hash = location.hash;
        const params = new URLSearchParams(hash.substring(1));
        const token = params.get('access_token');
        if (token) {
            console.log(`네이버 토큰 파라미터 값 : ${token}`);
            // 로컬 스토리지에 토큰 저장
            localStorage.setItem('naverToken', token);
            // 홈 페이지로 리디렉션
            navigate('/');
        }
    }, [location, navigate]);

    return (
        <div>
            네이버 로그인 처리 중...
        </div>
    );
}