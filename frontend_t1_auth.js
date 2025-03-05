import axios from 'axios';

// Authentication function
export const authenticateUser = async (email, password) => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      email,
      password,
    });
    return response.data.token;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
};
