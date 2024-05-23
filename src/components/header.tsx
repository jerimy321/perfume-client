import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 z-10 px-10 py-3 w-dvw font-pretendard h-[100px]">
      <nav>
        <ul className="flex justify-between px-10">
          <li>
            <Link
              to="/"
              className="no-underline text-header-default text-[24px]"
            >
              로고
            </Link>
          </li>
          <li className="flex flex-row gap-4">
            <li>
              <Link
                to="/mypage"
                className="no-underline text-header-default text-[24px] font-normal"
              >
                MY PAGE
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="no-underline text-header-default text-[24px] font-normal"
              >
                LOGOUT
              </Link>
            </li>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
