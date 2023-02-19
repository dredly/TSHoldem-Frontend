export type Suit = 'SPADES' | 'HEARTS' | 'DIAMONDS' | 'CLUBS'

export interface Card {
    rank: number,
    suit: Suit
}