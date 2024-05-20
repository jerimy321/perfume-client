import {useEffect} from 'react';

const NaverCallback = () => {
    useEffect(() => {
            window.location.href = '/';
    }, []);

    return (
        <div>
            네이버 로그인 처리 중...
        </div>
    )
}

export default NaverCallback;