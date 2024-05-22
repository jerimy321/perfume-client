import {useRecoilValue} from 'recoil';
import {naverTokenState} from '../recoil/recoilState';
import {useNavigate} from 'react-router-dom';
import toMainButton from '../assets/images/Button_main_default.png'
import toMainButtonHover from '../assets/images/Button_main_hover.png'
import {useState} from 'react';

const GoToMain = () => {
    const naverToken = useRecoilValue(naverTokenState);
    const navigate = useNavigate();

    const toMain = () => {
        if (!naverToken) {
            navigate('/login');
        } else {
            navigate('/main');
        }
    }
    return (
        <button
            className='flex w-384 h-90 py-2 px-67 justify-center items-center gap-2.5 mx-auto rounded-2xl border-2 border-white font-pretendard text-home-button bg-home-button shadow-home-button hover:bg-white hover:shadow-home-button-hover'
            onClick={toMain}
        >
            추천 받으러 가기
        </button>
    );
};

export default GoToMain;