import useWebSocketStore from "../state/webSocketStore"
import { Game, StartGameMessage } from "../types"

const GameLobby = ({ game }: { game: Game}) => {
    // TODO: disable the start button for player who is not the host
    const ws = useWebSocketStore(state => state.ws)
    if (!ws) return <div>Error: not connected to websocket</div>
    
    const MIN_PLAYERS = 2
    const handleStart = () => {
        const startGameMessage: StartGameMessage = {
            gameId: game.id
        }
        ws.send(JSON.stringify(startGameMessage))
    }

    return (
        <>
            <h3>{game.players.length}/8 players</h3>
            <p>Unique id to join game: <strong>{game.id}</strong></p>
            <button>Leave</button>
            <button disabled={game.players.length < MIN_PLAYERS} onClick={handleStart}>
                Start
            </button>
        </>
    )
}

export default GameLobby