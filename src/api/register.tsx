import axios from 'axios';


export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/signup/`, {
      username: name,
      first_name: name,
      last_name: name,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response?.status === 400) {
        const { data } = error.response;

        if (data.email && data.email.length > 0) {
          throw new Error(data.email[0]);
        }

        if (data.password && data.password.length > 0) {
          throw new Error(data.password[0]);
        }
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
