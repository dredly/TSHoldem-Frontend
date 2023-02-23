import { Player } from "../../types"
import PlayerInGame from "../PlayerInGame"

const LeftSeat = ({ playersInOriginalOrder }: { playersInOriginalOrder: Player[] }) => {
    return <PlayerInGame player={playersInOriginalOrder[0]}/>
}

export default LeftSeat