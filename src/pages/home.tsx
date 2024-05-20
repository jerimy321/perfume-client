import {Link} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {naverTokenState} from '../recoil/recoilState';

export default function Home() {
    const token = useRecoilValue(naverTokenState);

    return (
        <div>
            <div>홈</div>
            {token !== null ?
                <div>로그인이 완료 되었습니다.</div>
                : (
                    <Link to="/login">로그인</Link>
                )
            } /* 로그인 기능 확인을 위해 임시로 작성 */
        </div>
    );
};