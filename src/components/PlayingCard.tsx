import { Card } from "../types"
import { getAssetForCard } from "../utils"

const PlayingCard = ({ card }: { card: Card}) => {
    console.log("card", card)
    console.log(getAssetForCard(card).toString())
    return <img src={getAssetForCard(card).toString()}></img>
}

export default PlayingCard