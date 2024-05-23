import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Home from './pages/home';
import Mypage from './pages/mypage';
import NaverCallback from './pages/naverCallback';
import NotFound from './pages/notfound';
import Result from './pages/result';
import PerfumeInfo from './pages/perfumeInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/callback" element={<NaverCallback />} />
        <Route path="/result" element={<Result />} />
        <Route path="/perfumeInfo/:id" element={<PerfumeInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
