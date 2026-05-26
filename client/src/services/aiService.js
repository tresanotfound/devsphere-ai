import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const askAI = async (prompt) => {

  const response = await API.post('/ai/chat', {
    prompt,
  });

  return response.data;
};