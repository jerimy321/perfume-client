import axiosInstance from './axiosConfig';

export const postLogin = async () => {
    try {
        const response = await axiosInstance.post('/oauth2/authorization/naver');
        console.log('아니면 이게 url?' +response.data);
        console.log('이게 url?' + response.data.redirectUrl);
        if (response.data.redirectUrl) {
            window.location.href = response.data.redirectUrl;
        }
        return response.data;
    } catch (error) {
        console.error('Error posting hashtags:', error);
        throw error;
    }
};
