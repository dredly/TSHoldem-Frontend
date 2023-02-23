import { PlayerHolder } from "../styledcomponents/gameComponents";
import { Player } from "../types";

const PlayerInGame = ({ player }: { player: Player }) => {
    return <PlayerHolder>{player.name} - {player.role.toLowerCase()}</PlayerHolder>
}

export default PlayerInGame