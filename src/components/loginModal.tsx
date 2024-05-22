import NaverLogin from './naverLogin';

const LoginModal= () => {
    return (
        <div className={`modal fade items-center`} tabIndex={-1} id='loginModal'>
            <div className='w-screen h-screen flex items-center justify-center'>
                <div className='w-[709px] h-[433px] bg-login-bg bg-center rounded-30 border-2 border-white text-center'>
                    <div className='flex flex-col w-full h-full font-pretendard'>
                        <div className={'mb-6 mt-14'}>logo</div>
                        <div className={'text-login-need font-semibold mb-3'}>로그인이 필요해요</div>
                        <div className={'text-login-simple font-normal mb-16 '}>간편하게 로그인하고 <span className={'font-semibold'}>향수 추천</span>을 받아보세요</div>
                        <NaverLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginModal;