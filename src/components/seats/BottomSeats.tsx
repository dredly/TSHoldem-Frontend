import { ReversedPlayersContainer } from "../../styledcomponents/gameComponents";
import { Player } from "../../types";
import PlayerInGame from "../PlayerInGame";

const BottomSeats = ({ playersInOriginalOrder }: { playersInOriginalOrder: Player[] }) => {
    if (playersInOriginalOrder.length === 3) {
        return <PlayerInGame player={playersInOriginalOrder[2]}/>
    }
    if (playersInOriginalOrder.length === 4) {
        return <PlayerInGame player={playersInOriginalOrder[3]}/>
    }
    if (playersInOriginalOrder.length === 5) {
        return (
            <ReversedPlayersContainer>
                <PlayerInGame player={playersInOriginalOrder[3]}/>
                <PlayerInGame player={playersInOriginalOrder[4]}/>
            </ReversedPlayersContainer>
        ) 
    }
    if (playersInOriginalOrder.length === 6) {
        return (
            <ReversedPlayersContainer>
                <PlayerInGame player={playersInOriginalOrder[4]}/>
                <PlayerInGame player={playersInOriginalOrder[5]}/>
            </ReversedPlayersContainer>
        ) 
    }
    if (playersInOriginalOrder.length === 7) {
        return (
            <ReversedPlayersContainer>
                <PlayerInGame player={playersInOriginalOrder[4]}/>
                <PlayerInGame player={playersInOriginalOrder[5]}/>
                <PlayerInGame player={playersInOriginalOrder[6]}/>
            </ReversedPlayersContainer>
        ) 
    }
    if (playersInOriginalOrder.length === 8) {
        return (
            <ReversedPlayersContainer>
                <PlayerInGame player={playersInOriginalOrder[5]}/>
                <PlayerInGame player={playersInOriginalOrder[6]}/>
                <PlayerInGame player={playersInOriginalOrder[7]}/>
            </ReversedPlayersContainer>
        ) 
    }
    return null
}

export default BottomSeats