import styled from 'styled-components'
import { Game } from "../types"
import PlayingCard from './PlayingCard'

const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const GameTable = styled.div`
    background: #183A1D;
    width: 1000px;
    height: 600px;
`

const GameInPlay = ({ game }: { game: Game}) => {
    // Temporarily displying 5 cards from deck just to test out styling
    return (
        <>
            <GameContainer>
                <p>Money in pot = <strong>${game.pot}</strong></p>
                <GameTable>
                    {game.deck.slice(0, 5).map(c => <PlayingCard card={c} key={c.rank.toString() + c.suit}/>)}
                </GameTable>
                <h2>DEBUG ZONE</h2>
                <p>{JSON.stringify(game)}</p>
            </GameContainer>
        </>
    )
}

export default GameInPlay