import usePlayerStore from "../state/playerStore"
import { CreateGameMessage } from "../types"

const StartOrJoin = () => {
    const playerId = usePlayerStore(state => state.player?.id)
    if (!playerId) return <div>Error</div>

    const handleHost = () => {
        const createGameMessage: CreateGameMessage = { playerId }
    }

    return (
        <>
            <div>Enter the id of an existing game to join</div>
            <div>Or host your own</div>
            <button onClick={handleHost}>Host Game</button>
        </>
    )
}

export default StartOrJoin