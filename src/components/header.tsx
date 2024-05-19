const Header = () => {
  return (
    <header className="fixed top-0 z-10 flex justify-between p-4 bg-white shadow-md w-dvw">
      <div className="flex-1">향수러버</div>
      <div className="flex space-x-4">
        <div>MY PAGE</div>
        <div>LOGOUT</div>
      </div>
    </header>
  );
};

export default Header;
