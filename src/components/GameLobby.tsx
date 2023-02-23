import usePlayerStore from "../state/playerStore"
import useWebSocketStore from "../state/webSocketStore"
import { Game, StartGameMessage } from "../types"

const GameLobby = ({ game }: { game: Game}) => {
    // TODO: disable the start button for player who is not the host
    const ws = useWebSocketStore(state => state.ws)
    const playerId = usePlayerStore(state => state.player?.id)

    if (!ws) return <div>Error: not connected to websocket</div>
    if (!playerId) return <div>Error: No player found in store</div>
    
    const MIN_PLAYERS = 2

    const authorisedToStart = playerId === game.players[0].id && game.players.length >= MIN_PLAYERS

    const handleStart = () => {
        const startGameMessage: StartGameMessage = {
            gameId: game.id
        }
        ws.send(JSON.stringify(startGameMessage))
    }

    return (
        <>
            <h1>{game.players[0].name}'s game</h1>
            <h3>{game.players.length}/8 players</h3>
            <p>Unique id to join game: <strong>{game.id}</strong></p>
            <button>Leave</button>
            <button disabled={!authorisedToStart} onClick={handleStart}>
                Start
            </button>
        </>
    )
}

export default GameLobby