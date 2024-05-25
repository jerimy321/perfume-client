import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { naverTokenState } from '../recoil/recoilState';
import useLogout from '../hooks/useLogout';
import { useState } from 'react';
import LoginModal from './loginModal';

const Header = () => {
  const naverToken = useRecoilValue(naverTokenState);
  const logout = useLogout();
  const [redirect, setRedirect] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <LoginModal />;
  }

  return (
    <header className="fixed top-0 z-10 w-[1920px] m-0 p-0 font-pretendard h-[100px]">
      <ul className="flex items-center justify-between p-0 m-0">
        <li>
          <Link to="/" className="no-underline text-header-default">
            <img src="/logo.png" alt="Logo" className="w-[130px] ml-[78px]" />
          </Link>
        </li>
        <ul className="flex flex-row">
          {naverToken && (
            <li>
              <Link
                to="/mypage"
                className="no-underline my-[38px] text-header-default text-[20px] font-normal"
              >
                MY PAGE
              </Link>
            </li>
          )}
          {naverToken ? (
            <li>
              <button
                onClick={handleLogout}
                className="no-underline mr-[90px] my-[38px] text-header-default text-[20px] font-normal bg-transparent border-none cursor-pointer"
              >
                LOGOUT
              </button>
            </li>
          ) : (
            <li>
              <button
                data-toggle="modal"
                data-target="#loginModal"
                onClick={handleLogin}
                className="no-underline my-[38px] mr-[90px] text-header-default text-[20px] font-normal bg-transparent border-none cursor-pointer"
              >
                LOGIN
              </button>
            </li>
          )}
        </ul>
      </ul>
    </header>
  );
};

export default Header;
