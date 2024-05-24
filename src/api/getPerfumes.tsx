import axiosInstance from './axiosConfig';

export const getPerfumes = async (page: number, size: number) => {
  try {
    // const token = localStorage.getItem('naverToken');
    // if (!token) {
    //   throw new Error('No token found');
    // }
    const response = await axiosInstance.get(
      `myPage/perfumes?page=${page}&size=${size}`,
      {
        headers: {
          Cookie: `JSESSIONID=FCD63CD4F2701D788FC4855804CE4252`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching perfumes:', error);
    throw error;
  }
};
