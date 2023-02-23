import usePlayerStore from "../state/playerStore";
import { CurrentPlayerHolder, PlayerHolder } from "../styledcomponents/gameComponents";
import { Player } from "../types";
import PlayingCard from "./PlayingCard";

const PlayerInGame = ({ player }: { player: Player }) => {
    const currentPlayer = usePlayerStore(state => state.player)
    if (currentPlayer && currentPlayer.id === player.id) {
        return (
            <CurrentPlayerHolder>
                <h2>ME- {player.role.toLowerCase()}</h2>
                <h4>Current money: ${player.money}</h4> 
                <p>Bet: ${player.moneyInPot}</p>
                {player.cards.map(c => <PlayingCard card={c} key={c.rank.toString() + c.suit}/>)}
            </CurrentPlayerHolder>
        )
    }
    return (
        <PlayerHolder>
            <h3>{player.name} - {player.role.toLowerCase()}</h3>
            <h4>Current money: ${player.money}</h4>
            <p>Bet: ${player.moneyInPot}</p>
            {player.cards.map(c => <PlayingCard card={c} key={c.rank.toString() + c.suit}/>)}
        </PlayerHolder>
    )
}

export default PlayerInGame