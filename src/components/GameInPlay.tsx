import styled from 'styled-components'
import useGameStore from '../state/gameStore'
import { Game } from "../types"
import PlayingCard from './PlayingCard'
import RightSeat from './seats/RightSeat'

const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const GameTable = styled.div`
    background: #183A1D;
    width: 1000px;
    height: 500px;
`

const HorizontalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const GameInPlay = ({ game }: { game: Game}) => {
    const originalPlayerOrder = useGameStore(state => state.originalPlayerOrder)
    if (!originalPlayerOrder.length) return <div>Error: could not get original player order from store</div>

    // Get the players with their up to date data, but in the initial order to place them around the table
    const playersInOriginalOrder = originalPlayerOrder.map(playerId => {
        const player = game.players.find(p => p.id === playerId)
        if (!player) {
            throw new Error("Could not find player")
        }
        return player
    })

    // Temporarily displying 5 cards from deck just to test out styling
    return (
        <>
            <GameContainer>
                <p>Money in pot = <strong>${game.pot}</strong></p>
                <HorizontalContainer>
                    <div>{playersInOriginalOrder[0].name} - {playersInOriginalOrder[0].role.toLowerCase()}</div>
                    <GameTable>
                        {game.deck.slice(0, 5).map(c => <PlayingCard card={c} key={c.rank.toString() + c.suit}/>)}
                    </GameTable>
                    <RightSeat playersInOriginalOrder={playersInOriginalOrder}/>
                </HorizontalContainer>
            </GameContainer>
        </>
    )
}

export default GameInPlay