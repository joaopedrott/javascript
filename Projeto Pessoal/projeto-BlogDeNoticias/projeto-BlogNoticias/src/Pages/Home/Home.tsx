import React, { useEffect, useState } from 'react';
import { fetchGames } from '../../services/steamService';

interface Game {
  appid: number;
  name: string;
  player_count: number;
  rank: number;
  imageUrl: string;
}

export function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchGames().then(data => {
      console.log("Games fetched:", data);
      setGames(data);
    });
  }, []);

  return (
    <div>
      <h1>Os 10 jogos com mais jogadores ativos no momento </h1>
      <ul>
        {games.length > 0 ? (
          games.map((game) => (
            <li key={game.appid}>
              <img src={game.imageUrl} alt={game.name} style={{ width: '100px' }} />
              {game.rank}- {game.name} - Jogadores Online: {game.player_count}</li>
          ))
        ) : (
          <li>Carregando...</li>
        )}
      </ul>
    </div>
  );
}
