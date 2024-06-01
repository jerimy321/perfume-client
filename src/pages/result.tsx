import saveAfter from '../assets/images/save_complete.png';
import saveDef from '../assets/images/save_default.png';
import subDef from '../assets/icons/sub_def.png';
import left from '../assets/icons/icon_left.png';
import right from '../assets/icons/icon_right.png';
import {useState} from 'react';
import SaveAlert from '../components/saveAlert';
import {useRecoilValue} from 'recoil';
import {matchedPerfumesState} from '../recoil/recoilState';
import {saveMyPerfume} from '../api/saveMyPerfume';

const subPerfumePerPage = 3;
export default function Result() {
    const [saveComplete, setSaveComplete] = useState(false);
    const [saveAlert, setSaveAlert] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const {mainPerfume, subPerfumes} = useRecoilValue(matchedPerfumesState);

    const prevClick = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const nextClick = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, subPerfumes.length - 3));
    };

    const SaveClick = (id: number) => async (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation(); // 이벤트 전파 중단
        try {
            await saveMyPerfume(id);
            setSaveComplete(true);
            setSaveAlert(true);
            setTimeout(() => {
                setSaveAlert(false);
            }, 2000);
        } catch (error) {
            console.error('Error saving perfume:', error);
        }
    };

    return (
        <div className='w-screen h-[1600px] flex flex-col bg-result-bg bg-center bg-cover font-pretendard'>
            <div className='flex flex-col h-full w-full mx-auto px-auto mt-0 border'>
                {/* 메인 제품 */}
                <div className='text-center mt-[187px] text-result-title font-normal not-italic'>이 <span
                    className='font-bold'>향수</span>를 <span className='font-bold'>추천</span>드려요!
                </div>
                <div className='w-[1180px] mx-auto'>
                    <div
                        className='flex mx-auto h-[532px] mt-[52px] shadow-main-div border border-white rounded-[30px] bg-white-70'>
                        <div className='flex justify-between w-full'>
                            <div className='ml-[100px]'>
                                <div
                                    className='ml-1 mt-[85px] text-2xl font-medium text-caption1 tracking-caption1'>{mainPerfume.brand}</div>
                                <div
                                    className='ml-1 mt-4 text-5xl font-semibold leading-tight'>{mainPerfume.name}</div>
                                <div
                                    className='ml-1 mt-1.5 text-caption1 font-normal leading-tight text-[28px]'>{mainPerfume.ename}</div>
                                <div
                                    className='w-[300px] h-20 bg-white-50 cursor-pointer border border-white rounded-[100px] pl-10 pr-10 mt-[100px] mb-20 pt-6 pb-[26px] shadow-home-button-hover'
                                    onClick={SaveClick(mainPerfume.id)}>
                                    <div className='flex items-center justify-between'>
                                        {saveComplete ? (<img src={saveDef}/>) : (<img src={saveAfter}/>)}
                                        <p className='mb-0 text-2xl text-save-button'>내 향수 저장하기</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[578px]'>
                                <div className='h-full flex items-center justify-center'>
                                    <img src={mainPerfume.imageURL} className='max-w-full max-h-full'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 비슷한 제품*/}
                <div className='mt-0.5 text-left mx-auto w-[1180px] text-result-subtitle mt-40'>내
                    향수와 <span className='font-semibold'>비슷한 제품</span>들이에요
                </div>

                <div className='h-full mx-auto '>
                    {/* 서브 향수 리스트 */}
                    <div className='flex mt-14 justify-between'>
                        <button className='mr-[42px]' onClick={prevClick} disabled={currentPage === 0}><img
                            src={left}/>
                        </button>
                        <div className='flex justify-center w-[1180px]'>
                            {subPerfumes
                                .slice(currentPage, currentPage + subPerfumePerPage)
                                .map((data) => (
                                    <div key={data.id}
                                         className='relative group mx-[21px] w-[360px] h-[360px] flex-shrink-0 rounded-[20px] bg-white shadow-subPerfume-div flex justify-center items-center'>
                                        <img className='' src={data.imageURL} alt={data.name}/>
                                        <div
                                            className='absolute inset-0 hidden justify-center group-hover:flex group-hover:bg-black group-hover:bg-opacity-40 rounded-[20px] flex justify-center items-center'>
                                            <div className='w-[290px] h-[290px]'>
                                                <div className='flex justify-end'>
                                                    <img src={subDef}/>
                                                </div>
                                                <div
                                                    className='flex flex-col text-white items-center justify-center mt-12'>
                                                    <span
                                                        className='text-sub-brand font-bold text-center'>{data.brand}</span>
                                                    <span
                                                        className='text-sub-name font-bold mt-4 text-center'>{data.name}</span>
                                                    <span
                                                        className='text-sub-eName font-medium text-center'>{data.ename}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        {/* 서브 향수 아이템 */}
                        <button className='ml-[42px]' onClick={nextClick}
                                disabled={currentPage >= subPerfumes.length - 3}><img src={right}/></button>
                    </div>
                </div>
            </div>
            {/* 저장 알림 모달 */}
            {saveAlert && (
                <SaveAlert/>
            )}
        </div>
    );
};