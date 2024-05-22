import NaverLogin from '../components/naverLogin';

export default function Login () {
    return (
        <div className='flex justify-center items-center w-full py-10 bg-gray-300 h-screen'>
            <div className='flex flex-col justify-center py-5 mx-auto rounded-lg text-center w-1/3 h-1/4 bg-gray-200'>
                <h1>추천을 위해</h1>
                <h1>로그인이 필요해요</h1>
                <NaverLogin />
            </div>
        </div>
    )
}