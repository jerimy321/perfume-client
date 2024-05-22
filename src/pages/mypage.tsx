import { useState } from 'react';
import Album from '../components/album';
import Myinfo from '../components/myinfo';

export default function Mypage() {
  const [activeTab, setActiveTab] = useState('album');

  return (
    <div className="flex flex-col items-center min-h-screen bg-center bg-cover bg-mypage-bg font-pretendard">
      <div className="flex flex-col items-center my-4">
        <h1 className="p-4 text-mypage-title">MY PAGE</h1>
        <div className="flex flex-row gap-10 bg-white items-center justify-center bg-opacity-50 h-[80px] shadow-[0px_0px_30px_8px_rgba(0,0,0,0.06)] border border-white  w-[400px] rounded-[100px]">
          <h2
            className={`text-mypage-tap cursor-pointer ${activeTab === 'album' ? 'font-bold underline-custom' : ''}`}
            onClick={() => setActiveTab('album')}
          >
            향수 앨범
          </h2>
          <h2 className="text-mypage-tap">|</h2>
          <h2
            className={`text-mypage-tap cursor-pointer ${activeTab === 'myinfo' ? 'font-bold underline-custom' : ''}`}
            onClick={() => setActiveTab('myinfo')}
          >
            내 정보
          </h2>
        </div>
      </div>
      <div className="flex flex-col bg-opacity-70 min-h-[625px] w-4/5">
        {activeTab === 'album' && <Album />}
        {activeTab === 'myinfo' && <Myinfo />}
      </div>
    </div>
  );
}
