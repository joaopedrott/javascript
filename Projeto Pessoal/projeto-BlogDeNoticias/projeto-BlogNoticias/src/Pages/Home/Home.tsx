import React, { useEffect, useState } from 'react';
import { fetchGames } from '../../services/steamService';

interface Game {
  appid: number;
  name: string;
  player_count: number;
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
      <h1>Jogos Mais Jogados Online</h1>
      <ul>
        {games.length > 0 ? (
          games.map((game) => (
            <li key={game.appid}>{game.name} - Jogadores Online: {game.player_count}</li>
          ))
        ) : (
          <li>Nenhum jogo encontrado</li>
        )}
      </ul>
    </div>
  );
}
