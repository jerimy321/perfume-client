import GoToMain from '../components/goToMain';

export default function Home() {
    return (
        <div className="bg-cover bg-center bg-home-bg w-screen h-screen flex justify-center items-center">
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col justify-between w-[972px] h-[611px] flex-shrink-0 font-pretendard text-center">
                    <div className='text-home-div font-normal'>
                        <p>당신의<span className='font-semibold'> 취향을 저격할</span></p>
                        <p><span className='font-semibold'>향수를 </span>찾아드릴게요!</p>
                    </div>
                <GoToMain />
                </div>
            </div>
        </div>
    );
};