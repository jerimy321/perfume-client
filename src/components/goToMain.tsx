import { useNavigate } from 'react-router-dom';
import LoginModal from './loginModal';

const GoToMain = () => {
  const navigate = useNavigate();

  const toMain = () => {
    navigate('/main');
  };
  const isLogin = (
    <button
      className="flex w-384 h-90 py-2 px-67 justify-center items-center gap-2.5 mx-auto rounded-2xl border-2 border-white font-pretendard text-home-button bg-home-button shadow-home-button hover:bg-white hover:shadow-home-button-hover"
      onClick={toMain}
    >
      추천 받으러 가기
    </button>
  );
  const isNotLogin = (
    <>
      <button
        className="flex w-384 h-90 py-2 px-67 justify-center items-center gap-2.5 mx-auto rounded-2xl border-2 border-white font-pretendard text-home-button bg-home-button shadow-home-button hover:bg-white hover:shadow-home-button-hover"
        data-toggle="modal"
        data-target="#loginModal"
      >
        추천 받으러 가기
      </button>
      <LoginModal />
    </>
  );

  return (
    <>
      {/*{naverToken ? isLogin : isNotLogin}*/}
      {isNotLogin}
    </>
  );
};

export default GoToMain;
