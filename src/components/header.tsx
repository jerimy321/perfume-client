import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 z-10 px-10 py-3 w-dvw font-pretendard">
      <nav>
        <ul className="flex justify-between space-x-4">
          <li>
            <Link to="/" className="text-black no-underline">
              로고
            </Link>
          </li>
          <li className="flex flex-row gap-4">
            <li>
              <Link to="/mypage" className="text-black no-underline">
                MY PAGE
              </Link>
            </li>
            <li>LOGOUT</li>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
