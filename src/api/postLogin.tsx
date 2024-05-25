import axiosInstance from './axiosConfig';

export const postLogin = async (hashtagList: string[]) => {
    try {
        const response = await axiosInstance.post('login');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting hashtags:', error);
        throw error;
    }
};
