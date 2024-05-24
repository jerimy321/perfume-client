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
  const maxDeletableItems = 8; // 최대 삭제 가능한 개수

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
        : prevState.length < maxDeletableItems
          ? [...prevState, id]
          : prevState,
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
    <div className="flex flex-col bg-album-card mt-5 bg-opacity-70 shadow-album-card rounded-30 border w-[1180px] min-h-[622px] max-h-[1023px] border-white backdrop-blur-sm">
      <div className="flex justify-between mx-5 mt-5 mb-10 cursor-pointer">
        <div>
          {isEditing && (
            <span className="ml-4 text-[20px]">
              <span className="text-black">{selectedPerfumes.length}</span>
              <span className="text-gray-500"> / {maxDeletableItems}</span>
            </span>
          )}
        </div>
        <div>
          <button
            className="text-gray-500 text-[20px]"
            onClick={isEditing ? handleDeleteClick : handleEditClick}
          >
            {isEditing ? '삭제' : '편집'}
          </button>
          {isEditing && (
            <button
              onClick={handleEditClick}
              className="ml-3 text-[20px] text-mainbutton-default"
            >
              취소
            </button>
          )}
        </div>
      </div>
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
        {currentPerfumes.length > 0 ? (
          currentPerfumes.map((perfume) => (
            <MyPagePerfume
              key={perfume.myPerfumeId}
              perfume={perfume}
              isEditing={isEditing}
              onCheckboxChange={handleCheckboxChange}
              checked={selectedPerfumes.includes(perfume.myPerfumeId)}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-[624px]">
            <span className="text-gray150 text-[32px] font-normal">
              내 향수를 <strong>저장</strong>해보세요!
            </span>
          </div>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(perfumes.length / perfumesPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
