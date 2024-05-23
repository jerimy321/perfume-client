import {useEffect} from 'react';
import axios from 'axios';

export default function NaverCallback() {
    useEffect(() => {
        const fetchUser = async () => {
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');
            console.log(code)
            if (code) {
                try {
                    const response = await axios.get(`http://223.130.153.50:8080/login/oauth2/code/callback?code=${code}`);
                    console.log(response.data);  // 여기서 사용자를 저장하거나 세션을 설정하는 로직 추가
                    window.location.href = "/";
                } catch (error) {
                    console.error('OAuth2 로그인 실패:', error);
                }
            }
        };
        fetchUser();
    }, []);

    return (
        <div>
            네이버 로그인 처리 중...
        </div>
    );
}