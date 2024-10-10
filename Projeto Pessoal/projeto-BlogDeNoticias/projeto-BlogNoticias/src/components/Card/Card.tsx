import { Game } from "../../Pages/Home/Home";
import { CardContainer, Description,Thumbnail } from "./Card.Styles";


export function Card(game: Game) {
  return (
    <CardContainer>
      <li key={game.appid}>
        <Thumbnail>
            <img src={game.imageUrl} alt={game.name} style={{ width: "100px" }} />
        </Thumbnail>
        

        <Description>
            <h3>{game.rank}- {game.name} </h3>
            Jogadores Online: <span className="player-count">{game.player_count}</span>
        </Description>

      </li>
    </CardContainer>
  );
}
