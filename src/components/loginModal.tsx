import NaverLogin from './naverLogin';
import close from '../assets/icons/button_close.png';
import {useNavigate} from 'react-router-dom';

const LoginModal = () => {
    const navigate = useNavigate();

    return (
        <div className='modal fade items-center' tabIndex={-1} id='modal'>
            <div className='w-screen h-screen flex items-center justify-center'>
                <div
                    className='w-[710px] h-[432px] bg-login-bg bg-center rounded-30 border-2 border-white text-center relative'>
                    <div className='absolute top-7 right-7'>
                        <img src={close} alt="Close" data-bs-dismiss="modal" aria-label="Close"
                             className="cursor-pointer"/>
                    </div>
                    <div className='flex flex-col w-full items-center justify-center font-pretendard h-full'>
                        <img src="/logo.png" alt="Logo" className="mb-[17px] h-[67px]"/>
                        <div className='text-login-need font-semibold mb-3'>로그인이 필요해요!</div>
                        <div className='text-login-simple font-normal mb-14'>
                            간편하게 로그인하고 <span className='font-semibold'>향수 추천</span>을 받아보세요
                        </div>
                        <NaverLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginModal;