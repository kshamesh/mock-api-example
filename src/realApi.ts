import axios from 'axios';
import { User } from './types';

const API_URL = 'https://jsonplaceholder.typicode.com'; // Replace with your real API URL

const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users from the real API');
  }
};

export default {
  getUsers,
};
