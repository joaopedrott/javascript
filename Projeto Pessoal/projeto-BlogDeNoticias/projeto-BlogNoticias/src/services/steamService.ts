import axios from 'axios';

const api = axios.create({
  baseURL: '/api',

});

interface NewsItem {
  gid: string;
  title: string;
  url: string;
  author: string;
  contents: string;
  date: number;
}

interface SteamNewsResponse {
  appnews: {
    newsitems: NewsItem[];
  };
}

export const getGameNews = async (appid: number): Promise<NewsItem[]> => {
  try {
    const response = await api.get<SteamNewsResponse>(`/ISteamNews/GetNewsForApp/v2/?appid=${appid}`);
    console.log(response.data.appnews.newsitems);
    return response.data.appnews.newsitems;
  } catch (error) {
    console.error("Erro ao buscar notícias: ", error);
    throw error;
  }
};
