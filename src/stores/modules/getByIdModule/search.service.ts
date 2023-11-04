import { API_URL } from '../../../utils/API.URL';
import axios from 'axios';

export async function searchGifData(apiKey: string, rating: string, id: string | null) {
  try {
    const response = await axios.get(API_URL + `/${id}`, {
      params: {
        api_key: apiKey,
        rating: rating,
      },
    });

    return response.data.data;
  } catch (error) {
    throw error; 
  }
}
