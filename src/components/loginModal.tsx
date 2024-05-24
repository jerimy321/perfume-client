import NaverLogin from './naverLogin';
import close from '../assets/icons/button_close.png';
const LoginModal = () => {
    return (
        <div className={`modal fade items-center`} tabIndex={-1} id='loginModal'>
            <div className='w-screen h-screen flex items-center justify-center'>
                <div className='w-[709px] h-[433px] bg-login-bg bg-center rounded-30 border-2 border-white text-center'>
                    <div className='flex flex-col w-full items-center justify-center font-pretendard'>
                        <div className='w-full mt-7 mr-7 inline-flex justify-end' data-bs-dismiss="modal">
                            <img src={close} alt="Close"  className="cursor-pointer" />
                        </div>
                        <img src="/logo.png" alt="Logo" className="mb-9 h-8 w-20"/>
                        <div className={'text-login-need font-semibold mb-3'}>로그인이 필요해요</div>
                        <div className={'text-login-simple font-normal mb-12 '}>간편하게 로그인하고 <span
                            className={'font-semibold'}>향수 추천</span>을 받아보세요
                        </div>
                        <NaverLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginModal;