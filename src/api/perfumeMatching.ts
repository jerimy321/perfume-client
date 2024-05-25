import axiosInstance from './axiosConfig';

export const postHashtags = async (hashtagList: string[]) => {
  try {
    const response = await axiosInstance.post('recommend', { hashtagList });
    return response.data;
  } catch (error) {
    console.error('Error posting hashtags:', error);
    throw error;
  }
};
