import backOfCard from "../assets/backOfCard.svg"
import frontOfCard from "../assets/5-of-hearts.svg"
import { useState } from "react"

const PlayingCard = ({ assetName }: { assetName: String }) => {
    // Placeholder hardcoded card
    const [flipped, setFlipped] = useState<boolean>(false)

    return (
        <>
            <button onClick={() => setFlipped(!flipped)}>Flip card</button>
            <div>
                5 of Hearts
                <img src={flipped ? frontOfCard : backOfCard}></img>
            </div>
        </>
    )
}

export default PlayingCard