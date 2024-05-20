import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Home from './pages/home';
import Mypage from './pages/mypage';
import NaverCallback from './pages/naverCallback';
import Login from './pages/login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<Main />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/callback" element={<NaverCallback />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
