import axiosInstance from './axiosConfig';

export const saveMyPerfume = async (id: number) => {
    try {
        const response = await axiosInstance.post(`/api/myPage/perfumes/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error posting saveMyPerfume:', error);
        throw error;
    }
};