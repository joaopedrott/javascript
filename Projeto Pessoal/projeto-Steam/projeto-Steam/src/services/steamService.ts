// src/steamService.ts

import axios from 'axios';

interface Game {
  appid: number;
  name: string;
  player_count: number;
  rank: number;
  imageUrl: string;
}

const apiKey = 'SUA_CHAVE_API_AQUI'; // Substitua pela sua chave da API

export const fetchGames = async (): Promise<Game[]> => {
  try {
    //pega os 100 jogos com mais jogadores online
    const response = await axios.get(`/api/steam/ISteamChartsService/GetMostPlayedGames/v1/?key=${apiKey}`);
    const gamesList = response.data.response.ranks;
    //console.log("tome",gamesList)

    //usando gameList, pega os detalhes dos 10 jogos com mais jogadores online
    const gameDetails = await Promise.all(gamesList.slice(0, 10).map(async (game: Game) => {
      const detailsResponse = await axios.get(`/api/store/api/appdetails?appids=${game.appid}`);
      const gameName = detailsResponse.data[game.appid].data.name;

      const imageUrl = detailsResponse.data[game.appid].data.header_image;

      //quantidade de jogadores de cada jogo
      const response2 = await axios.get(`/api/steam/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${game.appid}&key=${apiKey}`);
      const players = response2.data.response.player_count;

      return {
        appid: game.appid,
        name: gameName,
        player_count: players,
        rank: game.rank,
        imageUrl: imageUrl
      };
    }));


    return gameDetails;


  } catch (error) {

    console.error("Erro ao buscar dados da API:", error);
    return [];
  }
};
