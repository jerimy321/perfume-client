import save from '../assets/images/ic_round-save-alt.png';
import {useState} from 'react';
import {mainPerMockData, myPerfumeData, resultPerfumeData, subPerMockData} from '../data/resultPerfumeData';
import SaveAlert from '../components/saveAlert';
import {useNavigate} from 'react-router-dom';

const subPerfumePerPage = 3;
export default function Result() {
    const [saveComplete, setSaveComplete] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();

    const prevClick = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const nextClick = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, subPerMockData.length - 3));
    };

    const SaveClick = (data: resultPerfumeData) => (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();  // 이벤트 전파 중단
        setSaveComplete(true);
        setTimeout(() => {
            setSaveComplete(false);
        }, 2000);
    };

    const clickSubPerfume = (data: resultPerfumeData) => () => {
        navigate(`/perfumeInfo/${data.id}`, {state: {perfume: data}});
    }
    return (
        <div className='w-screen h-screen'>
            <div className='h-full'>
                {/* 메인 제품 */}
                <div className='w-1/2 mx-auto'>
                    <div className='text-center'>당신의 취향을 저격할 향수</div>
                    <div className='flex justify-between w-full'>
                        <div>
                            <div>{mainPerMockData.brand}</div>
                            <div>{mainPerMockData.name}</div>
                            <div>{mainPerMockData.engName}</div>
                            <div className='flex' onClick={SaveClick(mainPerMockData)}><img src={save}/>내 향수 저장하기</div>
                        </div>
                        <div>
                            <img src={mainPerMockData.imageURL}/>
                        </div>
                    </div>
                </div>

                {/* 비슷한 제품*/}
                <div>
                    <div>내 향수와 비슷한 제품들이에요</div>
                    <div>
                        <div className='flex'>
                            <button onClick={prevClick} disabled={currentPage === 0}>{'<'}</button>
                            {subPerMockData
                                .slice(currentPage, currentPage + subPerfumePerPage)
                                .map((data) => (
                                    <div key={data.id} onClick={clickSubPerfume(data)}
                                         className='relative group mx-2'>
                                        <img src={data.imageURL} alt={data.name}/>
                                        <div
                                            className='absolute inset-0 hidden justify-center group-hover:flex group-hover:bg-black group-hover:bg-opacity-40'>
                                            <div className='flex flex-col text-white items-center justify-center'>
                                                <span>{data.brand}</span>
                                                <span>{data.name}</span>
                                                <span>{data.engName}</span>
                                                <div onClick={SaveClick(data)}>
                                                    <img src={save} className='cursor-pointer opacity-100' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            <button onClick={nextClick}
                                    disabled={currentPage >= subPerMockData.length - 3}>{'>'}</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 저장 알림 모달 */}
            {saveComplete && (
                <SaveAlert/>
            )}
        </div>
    )
};