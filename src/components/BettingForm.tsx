const BettingForm = ({minBet, maxBet}: {minBet: number, maxBet: number}) => {

    const handleSubmit = (evt: { preventDefault: () => void }) => {
        evt.preventDefault()
        console.log("Submitting bet")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>bet amount - between {minBet} and {maxBet}</label>
            <div>
                <button type="submit">Make bet</button>
            </div>
        </form>
    ) 
}

export default BettingForm