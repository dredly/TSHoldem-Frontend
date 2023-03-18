import useGameStore from '../state/gameStore'
import { GameContainer, HorizontalContainer, GameTable } from '../styledcomponents/gameComponents'
import { Game } from "../types"
import BackOfCard from './BackOfCard'
import PlayingCard from './PlayingCard'
import BottomSeats from './seats/BottomSeats'
import LeftSeat from './seats/LeftSeat'
import RightSeat from './seats/RightSeat'
import TopSeats from './seats/TopSeats'

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
            <h1>{playersInOriginalOrder[0].name}'s game</h1>
            <GameContainer>
                <p>Money in pot = <strong>${game.pot}</strong></p>
                <TopSeats playersInOriginalOrder={playersInOriginalOrder}/>
                <HorizontalContainer>
                    <LeftSeat playersInOriginalOrder={playersInOriginalOrder}/>
                    <GameTable>
                        <BackOfCard />
                        {game.cardsOnTable.map(c => <PlayingCard card={c} key={c.rank.toString() + c.suit}/>)}
                    </GameTable>
                    <RightSeat playersInOriginalOrder={playersInOriginalOrder}/>
                </HorizontalContainer>
                <BottomSeats playersInOriginalOrder={playersInOriginalOrder}/>
            </GameContainer>
        </>
    )
}

export default GameInPlay