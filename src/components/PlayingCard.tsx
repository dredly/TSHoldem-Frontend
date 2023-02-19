import backOfCard from "../assets/backOfCard.svg"
import { useState } from "react"
import { Card } from "../types"
import { getAssetForCard } from "../utils"

const PlayingCard = ({ card }: { card: Card}) => {
    return <img src={getAssetForCard(card).toString()}></img>
}

export default PlayingCard