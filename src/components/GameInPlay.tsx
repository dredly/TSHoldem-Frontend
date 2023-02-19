import { Game } from "../types"

const GameInPlay = ({ game }: { game: Game}) => {
    return (
        <>
            <p>Game in play</p>
            <p>Money in pot = <strong>${game.pot}</strong></p>
        </>
    )
}

export default GameInPlay