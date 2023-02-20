import styled from 'styled-components'
import { Game } from "../types"
import PlayingCard from './PlayingCard'

const GameTable = styled.div`
    background: #183A1D;
    width: 800px;
    height: 550px;
`

const GameInPlay = ({ game }: { game: Game}) => {
    // Temporarily displying 5 cards from deck just to test out styling
    return (
        <>
            <p>Game in play</p>
            <p>Money in pot = <strong>${game.pot}</strong></p>
            <GameTable>
                {game.deck.slice(0, 5).map(c => <PlayingCard card={c} key={c.rank.toString() + c.suit}/>)}
            </GameTable>
        </>
    )
}

export default GameInPlay