import usePlayerStore from "../state/playerStore"
import useWebSocketStore from "../state/webSocketStore"
import { CreateGameMessage } from "../types"

const StartOrJoin = () => {
    const playerId = usePlayerStore(state => state.player?.id)
    const ws = useWebSocketStore(state => state.ws)
    if (!playerId || !ws) return <div>Error</div>

    const handleHost = () => {
        const createGameMessage: CreateGameMessage = { playerId }
        ws.send(JSON.stringify(createGameMessage))
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