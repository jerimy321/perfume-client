import NaverLogin from '../components/naverLogin';

export default function Login() {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='flex flex-col bg-login-bg bg-cover bg-center w-[709px] h-[433px] mx-auto border-2 border-white rounded-[30px] text-center'>
                <div className={'font-pretendard w-full h-full'}>
                    <div className={'mb-6 mt-14'}>logo</div>
                    <div className={'text-login-need font-semibold mb-3'}>로그인이 필요해요</div>
                    <div className={'text-login-simple font-normal mb-16 '}>간편하게 로그인하고 <span className={'font-semibold'}>향수 추천</span>을 받아보세요</div>
                    <NaverLogin/>
                </div>
            </div>
        </div>
    );
};