import {Link} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {authState} from '../recoil/recoilState';

export default function Home() {
    const { isLoggedIn } = useRecoilValue(authState);
    console.log(isLoggedIn)

    return (
        <div>
            <div>홈</div>
            <Link to={'/login'}>로그인</Link> {/* 로그인 기능 구현 위해 임시로 생성 */}
        </div>
    )
}
