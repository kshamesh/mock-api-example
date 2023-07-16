import axios from 'axios';
import { User } from './types';

const API_BASE_URL = 'http://localhost:4000';

const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users from the mock API');
  }
};

export default {
    getUsers,
};
