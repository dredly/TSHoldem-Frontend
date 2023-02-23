import { Player } from "../../types"
import PlayerInGame from "../PlayerInGame"

const RightSeat = ({ playersInOriginalOrder }: { playersInOriginalOrder: Player[] }) => {
    if ([2, 3].includes(playersInOriginalOrder.length)) {
        return <PlayerInGame player={playersInOriginalOrder[1]}/>
    }
    if ([4, 5].includes(playersInOriginalOrder.length)) {
        return <PlayerInGame player={playersInOriginalOrder[2]}/>
    }
    if ([6, 7].includes(playersInOriginalOrder.length)) {
        return <PlayerInGame player={playersInOriginalOrder[3]}/>
    }
    if (playersInOriginalOrder.length === 8) {
        return <PlayerInGame player={playersInOriginalOrder[4]}/>
    }
    
    // Should never hit this
    return <div>Error</div>
}

export default RightSeat