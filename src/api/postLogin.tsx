import axiosInstance from './axiosConfig';

export const postLogin = async () => {
    try {
        const response = await axiosInstance.post('oauth2/authorization/naver');
        console.log(response.data);
        console.log(response.data.redirectUrl);
        if (response.data.redirectUrl) {
            window.location.href = response.data.redirectUrl;
        }
        return response.data;

    } catch (error) {
        console.error('Error posting hashtags:', error);
        throw error;
    }
};
