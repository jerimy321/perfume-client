import axiosInstance from './axiosConfig';

export const deleteAccount = async () => {
  const token = localStorage.getItem('naverToken');
  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await axiosInstance.delete('/myPage/account', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting account:', error);
    throw error;
  }
};
