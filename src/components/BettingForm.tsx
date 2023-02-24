import { useState } from "react"

const BettingForm = ({minBet, maxBet}: {minBet: number, maxBet: number}) => {
    const [bet, setBet] = useState<number>(minBet)

    const handleSubmit = (evt: { preventDefault: () => void }) => {
        evt.preventDefault()
        console.log("Submitting bet")
    }

    const handleFold = () => {
        console.log("Folding")
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