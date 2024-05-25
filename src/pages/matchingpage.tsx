import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { matchedPerfumesState } from '../recoil/recoilState';
import perfumIMG from '../assets/images/perfumeIMG.png';

export default function MatchingPage() {
  const [matchSuccess, setMatchSuccess] = useState<boolean | null>(null);
  const [matchedPerfumes, setMatchedPerfumes] =
    useRecoilState(matchedPerfumesState);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        matchedPerfumes.subPerfumes &&
        matchedPerfumes.subPerfumes.length > 0
      ) {
        setMatchSuccess(true);
      } else {
        setMatchSuccess(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [matchedPerfumes]);

  useEffect(() => {
    if (matchSuccess === true) {
      navigate('/result');
    } else if (matchSuccess === false) {
      navigate('/matchfail');
    }
  }, [matchSuccess, navigate]);

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
    </div>
  );
}
