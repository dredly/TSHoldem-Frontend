import { Card } from "./types";

const rankNameMapping = new Map<number, String>([
    [0, "2"],
    [1, "3"],
    [2, "4"],
    [3, "5"],
    [4, "6"],
    [5, "7"],
    [6, "8"],
    [7, "9"],
    [8, "10"],
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
    return "/" + getRankName(card.rank, rankNameMapping) + "_of_" + card.suit.toLowerCase() + ".svg"
}