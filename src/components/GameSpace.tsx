import useGameStore from "../state/gameStore"
import GameLobby from "./GameLobby"
import GameInPlay from "./GameInPlay"

const GameSpace = () => {
    const game = useGameStore(state => state.game)
    if (!game) return <div>Loading...</div>

    return (
        <div>
            <h1>{game.players[0].name}'s game</h1>
            {game.started ? <GameInPlay game={game}/> : <GameLobby game={game}/>}
        </div>
    )
}

export default GameSpace