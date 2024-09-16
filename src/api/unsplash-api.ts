import axios from 'axios';
import { UnsplashResponse } from './unsplash-api.types';
const API_KEY = 'KS5X7IWL38mNa_9uPdgjmfMVyfelJ0lYIxDsySToCQo';
const BASE_URL = 'https://api.unsplash.com/';

const unsplashAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

async function fetchPhotoSearch(
  query: string,
  page: number
): Promise<UnsplashResponse> {
  const response = await unsplashAPI.get<UnsplashResponse>('search/photos/', {
    params: { query, page, per_page: 20 },
  });

  return response.data;
}

export default fetchPhotoSearch;