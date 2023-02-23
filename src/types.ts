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
    betAmount: number,
    started: boolean
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

export interface StartGameMessage {
    gameId: String
}

export type ClientMessage = CreatePlayerMessage | CreateGameMessage | JoinGameMessage | StartGameMessage

export interface PlayerCreatedMessage {
    player: Player
}

export interface GameCreatedMessage {
    game: Game
}

export interface GameJoinedMessage {
    gameJoined: Game
}

export interface GameStartedMessage {
    gameStarted: Game
}

export interface GameUpdatedMessage {
    gameUpdated: Game
}

export type ServerMessage = 
    PlayerCreatedMessage | 
    GameCreatedMessage | 
    GameJoinedMessage | 
    GameStartedMessage |
    GameUpdatedMessage