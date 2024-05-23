import {useState} from 'react';
import naverDefault from '../assets/images/logo_green.png'
import naverHover from '../assets/images/logo_white.png'

const NaverLogin = () => {
    const [isHover, setIsHover] = useState(false);

    const loginNaver = () => {
        window.location.href = 'http://223.130.153.50:8080/login';
    }

    return (
        <div className={'flex justify-center items-center '}>
            <div id="naverIdLogin" className="hidden">
            </div>
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {isHover ? (
                    <div
                        className='cursor-pointer inline-flex flex-col w-[460px] h-[94px] px-[103px] py-[27px] items-start gap-2.5 rounded-[15px] bg-naver-default border-2 border-naver-default'
                        onClick={loginNaver}
                    >
                        <div className='flex flex-row w-full h-full justify-between'>
                            <img className='flex-shrink-0 mr-1' src={naverHover}/>
                            <p className='ml-1 w-full h-full text-center text-naver-button text-naver-default text-white'>네이버 간편 로그인</p>
                        </div>
                    </div>
                ) : (
                    <div
                        className='cursor-pointer inline-flex flex-col w-[460px] h-[94px] px-[103px] py-[27px] items-start gap-2.5 rounded-[15px] border-2 border-naver-default'>
                        <div className='flex flex-row w-full h-full justify-between'>
                            <img className='flex-shrink-0 mr-1' src={naverDefault}/>
                            <p className='ml-1 w-full h-full text-center text-naver-button text-naver-default'>네이버 간편 로그인</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NaverLogin;