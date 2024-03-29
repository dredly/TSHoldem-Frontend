import useGameStore from "../state/gameStore";
import usePlayerStore from "../state/playerStore";
import { CurrentPlayerHolder, PlayerHolder } from "../styledcomponents/gameComponents";
import { Player } from "../types";
import BackOfCard from "./BackOfCard";
import BettingForm from "./BettingForm";
import PlayingCard from "./PlayingCard";

const PlayerInGame = ({ player }: { player: Player }) => {
    const currentPlayer = usePlayerStore(state => state.player)
    const bettingPlayerId = useGameStore(state => state.game?.turnToBet)
    const amountToBet = useGameStore(state => state.game?.betAmount)
    if (!bettingPlayerId || !amountToBet) return <div>Error</div>

    if (currentPlayer && currentPlayer.id === player.id) {
        return (
            <CurrentPlayerHolder>
                <h2>ME- {player.role.toLowerCase().replace("_", " ")}</h2>
                {player.inPlay ? null : <h3>FOLDED</h3>}
                <h4>Current money: ${player.money}</h4> 
                <p>Bet: ${player.moneyInPot}</p>
                {player.cards.map(c => <PlayingCard card={c} key={c.rank.toString() + c.suit}/>)}
                {currentPlayer.id === bettingPlayerId
                    ? <BettingForm minBet={amountToBet - player.moneyInPot} maxBet={player.money} playerId={player.id}/> 
                    : null
                }  
            </CurrentPlayerHolder>
        )
    }
    return (
        <PlayerHolder>
            <h3>{player.name} - {player.role.toLowerCase().replace("_", " ")}</h3>
            {player.inPlay ? null : <h3>FOLDED</h3>}
            <h4>Current money: ${player.money}</h4>
            <p>Bet: ${player.moneyInPot}</p>
            {player.cards ? <><BackOfCard /><BackOfCard /></> : null}      
        </PlayerHolder>
    )
}

export default PlayerInGame