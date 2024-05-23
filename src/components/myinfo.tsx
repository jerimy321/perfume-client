import React, { useState } from 'react';
import Button from './button';
import LogoutIcon from '../assets/icons/icon_logout.svg';
import Logo from '../assets/icons/naver_circle.svg';
import Modal from './modal';
import DeleteLogo from '../assets/icons/icon_delete.svg';
import { useNavigate } from 'react-router-dom';

export default function Myinfo() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleConfirmDelete = () => {
    // 탈퇴 로직 추가 필요
    setIsModalVisible(false);
    navigate('/');
  };

  const handleLogoutButtonClick = () => {
    // 로그아웃 로직 추가 필요
    navigate('/');
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-row items-center justify-around m-6 w-[1180px] h-[200px] backdrop-blur-sm bg-album-card shadow-info-card rounded-[30px]">
        <img src={Logo} alt="네이버로고" />
        <div className="text-[26px] font-semibold">장원영</div>
        <div className="text-[26px] font-normal">abcdefg@naver.com</div>
        <Button
          text={'로그아웃'}
          type={
            'bg-gray60 text-white w-[160px] h-[62px] rounded-[30px] font-bold text-[18px] mb-0 font-medium'
          }
          imgSrc={LogoutIcon}
          onClick={handleLogoutButtonClick}
        />
      </div>
      <div className="flex items-center justify-center mb-3">
        <Button
          text={'탈퇴하기'}
          type={
            'text-[20px] font-normal text-gray150 rounded-[30px] w-[194px] h-[62px]'
          }
          onClick={handleDeleteClick}
        />
      </div>
      <Modal
        title={
          <img src={DeleteLogo} alt="탈퇴 로고" className="w-[60px] h-[60px]" />
        }
        content={
          <div className="flex flex-col items-center gap-1 mb-3">
            <div>정말 탈퇴할까요?</div>
            <div>
              탈퇴 시 저장된 정보들은 <strong>영구 삭제</strong> 됩니다.
            </div>
          </div>
        }
        negativeAnswer="아니요"
        positiveAnswer="네, 탈퇴할래요"
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
