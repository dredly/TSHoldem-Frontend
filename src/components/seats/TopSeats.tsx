import { PlayersContainer } from "../../styledcomponents/gameComponents";
import { Player } from "../../types";
import PlayerInGame from "../PlayerInGame";

const TopSeats = ({ playersInOriginalOrder }: { playersInOriginalOrder: Player[] }) => {
    if ([4, 5].includes(playersInOriginalOrder.length)) {
        return <PlayerInGame player={playersInOriginalOrder[1]}/>
    }
    if ([6, 7].includes(playersInOriginalOrder.length)) {
        return (
            <PlayersContainer>
                <PlayerInGame player={playersInOriginalOrder[1]}/>
                <PlayerInGame player={playersInOriginalOrder[2]}/>
            </PlayersContainer>
        ) 
    }
    if (playersInOriginalOrder.length === 8) {
        return (
            <PlayersContainer>
                <PlayerInGame player={playersInOriginalOrder[1]}/>
                <PlayerInGame player={playersInOriginalOrder[2]}/>
                <PlayerInGame player={playersInOriginalOrder[3]}/>
            </PlayersContainer>
        ) 
    }
    return null
}

export default TopSeats