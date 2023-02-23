import { Card } from "../types"
import { getAssetForCard } from "../utils"

const PlayingCard = ({ card }: { card: Card}) => {
    return <img src={getAssetForCard(card).toString()} width="125px"></img>
}

export default PlayingCard