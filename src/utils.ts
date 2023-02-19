import { Card } from "./types";

const rankNameMapping = new Map<number, String>([
    [0, "two"],
    [1, "three"],
    [2, "four"],
    [3, "five"],
    [4, "six"],
    [5, "seven"],
    [6, "eight"],
    [7, "nine"],
    [8, "ten"],
    [9, "jack"],
    [10, "queen"],
    [11, "king"],
    [12, "ace"],
])

const getRankName = (rank: number, mapping: Map<number, String>): String => {
    const rankName = mapping.get(rank)
    if (!rankName) throw new Error("No name for that rank")
    return rankName
}

export const getAssetForCard = (card: Card): String => {
    return "/src/assets/" + getRankName(card.rank, rankNameMapping) + "_of_" + card.suit.toLowerCase() + ".svg"
}