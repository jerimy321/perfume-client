import {useLocation, useNavigate} from 'react-router-dom';

export default function PerfumeInfo() {
    const location = useLocation();
    const navigation = useNavigate();
    const { perfume } = location.state;

    const backToResult = () => {
        navigation(-1);
    }
    return (
        <div>
            <div>
                <h1>{perfume.name}</h1>
            </div>
            <div onClick={backToResult}>
                뒤로가기
            </div>
        </div>
    );
}