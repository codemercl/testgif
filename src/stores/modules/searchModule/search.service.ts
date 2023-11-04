import { API_URL } from '@/utils/API.URL';
import axios from 'axios';

export async function searchGifData(searchTextOrStateText: string | null, apiKey: string, lang: string, rating: string, offset: number, limit: number) {
  try {
    const response = await axios.get(API_URL + '/search', {
      params: {
        api_key: apiKey,
        lang: lang,
        rating: rating,
        offset: offset,
        limit: limit,
        q: searchTextOrStateText, 
      },
    });

    return response.data.data;
  } catch (error) {
    throw error; 
  }
}

export async function getRandomGifData( apiKey: string, tag: string | null, rating: string ) {
  try {
    const response = await axios.get(API_URL + '/random', {
      params: {
        api_key: apiKey,
        tag: tag, 
        rating: rating,
      },
    });

    return response.data;
  } catch (error) {
    throw error; 
  }
}