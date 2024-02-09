import axios from 'axios';


export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/login/`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response?.status === 401) {
        const { data } = error.response;

        throw new Error(data.detail);
      } else if (error.response) {
        throw new Error(error.response.statusText);
      } else if (error.request) {
        throw new Error('Нет ответа от сервера');
      } else {
        throw new Error(error.message);
      }
    }

    throw error;
  }
};
