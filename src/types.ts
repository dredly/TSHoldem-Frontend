export type Role = 'SMALL_BLIND' | 'BIG_BLIND' | 'OTHER'

export type Suit = 'SPADES' | 'HEARTS' | 'DIAMONDS' | 'CLUBS'

export interface Card {
    rank: number,
    suit: Suit
}

export interface Player {
    id: String,
    name: String,
    role: Role,
    cards: Card[]
    money: number,
    moneyInPot: number,
    inPlay: boolean
}

export interface Game {
    id: String,
    players: Player[],
    turnToBet: String, // the id of the player currently betting
    deck: Card[],
    cardsOnTable: Card[]
    pot: number,
    betAmount: number
}

export interface CreatePlayerMessage {
    name: String
}

export interface CreateGameMessage {
    playerId: String
}

export interface JoinGameMessage {
    playerId: String
    gameId: String
}

export type ClientMessage = CreatePlayerMessage | CreateGameMessage | JoinGameMessage

export interface PlayerCreatedMessage {
    player: Player
}

export interface GameCreatedMessage {
    game: Game
}

export type ServerMessage = PlayerCreatedMessage | GameCreatedMessage