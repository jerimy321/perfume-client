import axiosInstance from './axiosConfig';

export const postHashtags = async (hashtags: string[]) => {
  try {
    const response = await axiosInstance.post('recommend', { hashtags });
    return response.data;
  } catch (error) {
    console.error('Error posting hashtags:', error);
    throw error;
  }
};
