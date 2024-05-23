import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Home from './pages/home';
import Mypage from './pages/mypage';
import NaverCallback from './pages/naverCallback';
import NotFound from './pages/notfound';
import Layout from './layouts/layout';
import NoHeaderLayout from './layouts/noHeaderLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="callback" element={<NaverCallback />} />
        </Route>
        <Route path="*" element={<NoHeaderLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
