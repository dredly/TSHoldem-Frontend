import { Player } from "../../types"

const RightSeat = ({ playersInOriginalOrder }: { playersInOriginalOrder: Player[] }) => {
    if ([2, 3].includes(playersInOriginalOrder.length)) {
        return <div>{playersInOriginalOrder[1].name} - {playersInOriginalOrder[1].role.toLowerCase()}</div>
    }
    if ([4, 5].includes(playersInOriginalOrder.length)) {
        return <div>{playersInOriginalOrder[2].name} - {playersInOriginalOrder[2].role.toLowerCase()}</div>
    }
    if ([6, 7].includes(playersInOriginalOrder.length)) {
        return <div>{playersInOriginalOrder[3].name} - {playersInOriginalOrder[3].role.toLowerCase()}</div> 
    }
    if (playersInOriginalOrder.length === 8) {
        return <div>{playersInOriginalOrder[4].name} - {playersInOriginalOrder[4].role.toLowerCase()}</div>
    }
    
    // Should never hit this
    return <div>Error</div>
}

export default RightSeat