import styled from 'styled-components'
import { Card } from "../types"
import { getAssetForCard } from "../utils"

const PlayingCard = ({ card }: { card: Card}) => {
    console.log("card", card)
    console.log(getAssetForCard(card).toString())
    return <img src={getAssetForCard(card).toString()} width="125px"></img>
}

export default PlayingCard