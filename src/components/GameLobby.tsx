import { Game } from "../types"

const GameLobby = ({ game }: { game: Game} ) => {
    return (
        <>
            <h3>{game.players.length}/8 players</h3>
            <button>Leave</button>
            <button disabled>Start</button>
        </>
    )
}

export default GameLobby