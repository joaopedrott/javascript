import React, { useEffect, useState } from 'react';
import { fetchGames } from '../../services/steamService';
import { Card } from '../../components/Card';
import { HomeContainer } from './Home.styles';


export interface Game {
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
    <HomeContainer>
      <h1>Os 10 jogos ou aplicativos com mais jogadores ativos no momento </h1>
      <ul>
        {games.length > 0 ? (
          games.map((game) => (
            <Card key={game.appid} {...game} />
          ))
        ) : (
          <li>Carregando...</li>
        )}
      </ul>
    </HomeContainer>
  );
}
