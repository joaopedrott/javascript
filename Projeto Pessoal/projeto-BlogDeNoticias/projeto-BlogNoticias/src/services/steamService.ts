import axios from "axios";

const apiKey = "SUA_CHAVE_API";

export const getSteamUserData = async (steamId: string) => {
  try {
    const response = await axios.get(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamId}`
    );
    return response.data.response.players[0];
  } catch (error) {
    console.error("Erro ao buscar dados do usuário Steam:", error);
    throw error;
  }
};