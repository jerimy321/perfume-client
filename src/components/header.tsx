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
    <header className="fixed top-0 z-10 px-10 w-dvw font-pretendard h-[100px]">
      <nav>
        <ul className="flex items-center justify-between px-10">
          <li>
            <Link
              to="/"
              className="no-underline text-header-default text-[20px]"
            >
              <img src="/logo.png" alt="Logo" className="h-[67px]" />
            </Link>
          </li>
          <ul className="flex flex-row gap-4">
            {naverToken && (
              <li>
                <Link
                  to="/mypage"
                  className="no-underline text-header-default text-[20px] font-normal"
                >
                  MY PAGE
                </Link>
              </li>
            )}
            {naverToken ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="no-underline text-header-default text-[20px] font-normal bg-transparent border-none cursor-pointer"
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
                  className="no-underline text-header-default text-[20px] font-normal bg-transparent border-none cursor-pointer"
                >
                  LOGIN
                </button>
              </li>
            )}
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
