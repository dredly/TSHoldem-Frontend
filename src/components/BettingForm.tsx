import { useState } from "react"
import useWebSocketStore from "../state/webSocketStore"
import { BetMessage, FoldMessage } from "../types"

const BettingForm = ({minBet, maxBet, playerId}: {minBet: number, maxBet: number, playerId: String}) => {
    const ws = useWebSocketStore(state => state.ws)
    const [bet, setBet] = useState<number>(minBet)

    const handleSubmit = (evt: { preventDefault: () => void }) => {
        evt.preventDefault()
        console.log("Submitting bet")
        const betMessage: BetMessage = {
            bettingPlayerId: playerId,
            amount: bet
        }
        ws?.send(JSON.stringify(betMessage))
    }

    const handleFold = () => {
        console.log("Folding")
        const foldMessage: FoldMessage = {
            foldingPlayerId: playerId
        }
        ws?.send(JSON.stringify(foldMessage))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="range">bet amount - between {minBet} and {maxBet}
                    <input 
                        type="range" 
                        id="range"
                        min={minBet}
                        max={maxBet} 
                        value={bet} 
                        onChange={({target}) => setBet(Number(target.value))}
                    />
                </label>
                <div>
                    <button type="submit">Make bet</button>
                    ${bet}
                </div>
            </form>
            <button onClick={handleFold}>Fold</button>
        </>
    ) 
}

export default BettingForm