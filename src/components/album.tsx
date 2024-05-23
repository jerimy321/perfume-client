import { SetStateAction, useEffect, useState } from 'react';
import MyPagePerfume from './myPagePerfume';
import Modal from './modal';
import DeleteLogo from '../assets/icons/icon_delete.svg';
import sampleData from '../data/perfumeAlbum.json';
import Pagination from './pagenation';

export default function Album() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perfumes, setPerfumes] = useState<
    {
      myPerfumeId: number;
      name: string;
      engName: string;
      brand: string;
      imageURL: string;
    }[]
  >([]);
  const [selectedPerfumes, setSelectedPerfumes] = useState<number[]>([]);
  const perfumesPerPage = 6;

  useEffect(() => {
    setPerfumes(sampleData.content);
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setSelectedPerfumes([]); // 편집 모드를 변경할 때 선택 항목 초기화
  };

  const handleDeleteClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleConfirmDelete = () => {
    setPerfumes(
      perfumes.filter(
        (perfume) => !selectedPerfumes.includes(perfume.myPerfumeId),
      ),
    );
    setSelectedPerfumes([]);
    setIsModalVisible(false);
    setIsEditing(false);
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedPerfumes((prevState) =>
      prevState.includes(id)
        ? prevState.filter((perfumeId) => perfumeId !== id)
        : [...prevState, id],
    );
  };

  const indexOfLastPerfume = currentPage * perfumesPerPage;
  const indexOfFirstPerfume = indexOfLastPerfume - perfumesPerPage;
  const currentPerfumes = perfumes.slice(
    indexOfFirstPerfume,
    indexOfLastPerfume,
  );

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col bg-album-card bg-opacity-70 shadow-album-card rounded-30 border w-[1180px] h-screen border-white backdrop-blur-sm">
      <button
        className="flex justify-end mx-5 mt-5 mb-10 cursor-pointer"
        onClick={isEditing ? handleDeleteClick : handleEditClick}
      >
        {isEditing ? '삭제' : '편집'}
      </button>
      <Modal
        title={
          <img src={DeleteLogo} alt="삭제 로고" className="w-[60px] h-[60px]" />
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
        {currentPerfumes.map((perfume) => (
          <MyPagePerfume
            key={perfume.myPerfumeId}
            perfume={perfume}
            isEditing={isEditing}
            onCheckboxChange={handleCheckboxChange}
            checked={selectedPerfumes.includes(perfume.myPerfumeId)}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(perfumes.length / perfumesPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
