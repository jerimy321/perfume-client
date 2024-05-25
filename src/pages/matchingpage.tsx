import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import perfumIMG from '../assets/images/perfumeIMG.png';

export default function MatchingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [matchSuccess, setMatchSuccess] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // 임의로 성공 또는 실패를 결정
      const success = Math.random() > 0.5;
      setMatchSuccess(success);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (matchSuccess) {
        navigate('/result');
      } else {
        navigate('/matchfail');
      }
    }
  }, [isLoading, matchSuccess, navigate]);

  return (
    <div className="flex flex-col items-center w-[1920px] h-[1080px] bg-center bg-cover bg-matching-bg font-pretendard">
      <span className="text-header-default text-pick-subtitle2 mt-[196px] font-medium">
        탕탕탕!
      </span>
      <span className="font-normal text-pick-title mt-[10px]">
        당신의 <span className="font-semibold">취향 저격 중</span>이에요
      </span>
      <div className="">
        <img src={perfumIMG} alt="향수이미지" className="w-[300px]" />
        <span>. . .</span>
      </div>
      {isLoading && <span>로딩 중입니다...</span>}
      {!isLoading && !matchSuccess}
    </div>
  );
}
