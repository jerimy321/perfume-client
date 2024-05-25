import axiosInstance from './axiosConfig';

export const saveMyPerfume = async (id: number) => {
    try {
      const response = await axiosInstance.post(`perfumes/${id}`, {
          headers: {
              Cookie: `JSESSIONID=FCD63CD4F2701D788FC4855804CE4252`,
          },
      }
      );
      return response.data;
    } catch (error) {
        console.error('Error posting saveMyperfume:', error);

    }
}