import {Link} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {naverTokenState} from '../recoil/recoilState';

export default function Home() {
    const token = useRecoilValue(naverTokenState);

    return (
        <div>
            <div>홈</div>
            {/* 로그인 기능 구현을 위해 임시적으로 만듦 */}
            {token !== null ?
                <div>로그인이 완료 되었습니다.</div>
                : (
                    <Link to="/login">로그인</Link>
                )
            }
        </div>
    );
};