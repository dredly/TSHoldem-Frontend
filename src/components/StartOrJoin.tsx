import { useState } from "react"
import usePlayerStore from "../state/playerStore"
import useWebSocketStore from "../state/webSocketStore"
import { CreateGameMessage, JoinGameMessage } from "../types"

const StartOrJoin = () => {
    const playerId = usePlayerStore(state => state.player?.id)
    const ws = useWebSocketStore(state => state.ws)
    const [gameId, setGameId] = useState('')

    if (!playerId || !ws) return <div>Error</div>

    const handleJoin = (evt: { preventDefault: () => void }) => {
        evt.preventDefault()
        const joinGameMessage: JoinGameMessage = { playerId, gameId }
        ws.send(JSON.stringify(joinGameMessage))
    }

    const handleHost = () => {
        const createGameMessage: CreateGameMessage = { playerId }
        ws.send(JSON.stringify(createGameMessage))
    }

    return (
        <>
            <div>Enter the id of an existing game to join</div>
            <form onSubmit={handleJoin}>
                <label>game id
                    <input 
                        type="text" 
                        value={gameId}
                        onChange={({target}) => setGameId(target.value)} 
                    />
                </label>
                <button type="submit">Find Game</button>
            </form>
            <div>Or host your own</div>
            <button onClick={handleHost}>Host Game</button>
        </>
    )
}

export default StartOrJoin