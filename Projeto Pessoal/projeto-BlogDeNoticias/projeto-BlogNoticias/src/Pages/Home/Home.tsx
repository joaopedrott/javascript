import React, { useEffect, useState } from 'react';
import { getGameNews } from '../../services/steamService';

interface NewsItem {
  gid: string;
  title: string;
  url: string;
  author: string;
  contents: string;
  date: number;
}

export function Home() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const appid = 730; // Substitua pelo App ID do jogo desejado

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getGameNews(appid);
        setNews(data);
      } catch (error) {
        console.error("Erro ao buscar notícias: ", error);
      }
    };

    fetchNews();
  }, [appid]);

  return (
    <div>
      <h1>Notícias do Jogo</h1>
      <ul>
        {news.map((item) => (
          <li key={item.gid}>
            <h2>{item.title}</h2>
            <p>{item.contents}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">Leia mais</a>
            <p>Autor: {item.author}</p>
            <p>Data: {new Date(item.date * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
