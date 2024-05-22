import { useState } from 'react';
import MyPagePerfume from './myPagePerfume';
import Modal from './modal';
import DeleteLogo from '../assets/icons/icon_delete.svg';

export default function Album() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDeleteClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleConfirmDelete = () => {
    // 삭제 로직 추가 필요
    setIsModalVisible(false);
  };

  return (
    <div className="flex flex-col bg-album-card shadow-album-card rounded-[30px] border min-w-[90%] h-screen border-white backdrop-blur-sm">
      <button
        className="flex justify-end mx-5 mt-5 mb-10 cursor-pointer"
        onClick={handleDeleteClick}
      >
        삭제하기
      </button>
      <Modal
        title={
          <img src={DeleteLogo} alt="탈퇴 로고" className="w-[60px] h-[60px]" />
        }
        content={
          <div className="flex flex-col items-center gap-1 mb-3">
            <div>
              선택한 향수 앨범을 <strong>삭제</strong>할까요?
            </div>
          </div>
        }
        negativeAnswer="아니요"
        positiveAnswer="네, 삭제할게요"
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
      <div className="flex flex-row flex-wrap justify-center gap-8">
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
        <MyPagePerfume />
      </div>
      <div>1 2 3 </div>
    </div>
  );
}
