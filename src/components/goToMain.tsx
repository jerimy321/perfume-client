import {useRecoilValue} from 'recoil';
import {naverTokenState} from '../recoil/recoilState';
import {useNavigate} from 'react-router-dom';
import toMainButton from '../assets/images/Button_main_default.png'
import toMainButtonHover from '../assets/images/Button_main_hover.png'
import {useState} from 'react';

const GoToMain = () => {
    const naverToken = useRecoilValue(naverTokenState);
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    const toMain = () => {
        if (!naverToken) {
            navigate('/login');
        } else {
            navigate('/main');
        }
    }
    return (
        <div className='flex justify-center items-center mx-auto cursor-pointer'
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             onClick={toMain}
        >
            {hover ? (
                <img src={toMainButtonHover} alt="추천 받으러 가기"/>
            ) : (
                <img src={toMainButton} alt="추천 받으러 가기"/>
            )}
        </div>
    );
};

export default GoToMain;