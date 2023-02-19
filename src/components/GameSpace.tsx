import PlayingCard from "./PlayingCard"

const GameSpace = () => {
    return (
        <div>
            Game here
            <PlayingCard card={{
                rank: 11, suit: "HEARTS"
            }} />
        </div>
    )
}

export default GameSpace