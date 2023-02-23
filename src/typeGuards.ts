import { 
    GameCreatedMessage, 
    Player, 
    PlayerCreatedMessage, 
    Role, 
    Suit, 
    ServerMessage, 
    Card, 
    Game, 
    GameJoinedMessage, 
    GameStartedMessage, 
    GameUpdatedMessage
} from "./types";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isRole = (text: unknown): text is Role => {
    return isString(text) && ["SMALL_BLIND", "BIG_BLIND", "OTHER"].includes(text)
}

const isSuit = (text: unknown): text is Suit => {
    return isString(text) && ['SPADES', 'HEARTS', 'DIAMONDS', 'CLUBS'].includes(text)
}

const isCard = (obj: unknown): obj is Card => {
    return (obj as Card).rank !== undefined && typeof (obj as Card).rank === 'number'
        && (obj as Card).suit !== undefined && isSuit((obj as Card).suit) 
}

const isCardsArray = (obj: unknown): obj is Card[] => {
    return (obj as Array<Card>) !== undefined
}

const isPlayer = (player: unknown): player is Player => {
    return (player as Player).id !== undefined && isString((player as Player).id)
        && (player as Player).name !== undefined && isString((player as Player).name)
        && (player as Player).money !== undefined && typeof (player as Player).money === 'number'
        && (player as Player).moneyInPot !== undefined && typeof (player as Player).moneyInPot === 'number'
        && (player as Player).inPlay !== undefined && typeof (player as Player).inPlay === 'boolean'
        && (player as Player).role !== undefined && isRole((player as Player).role)
        && (player as Player).cards !== undefined && isCardsArray((player as Player).cards)
}

const isPlayersArray = (obj: unknown): obj is Player[] => {
    return (obj as Array<Player>) !== undefined
}

const isGame = (game: unknown): game is Game => {
    return (game as Game).id !== undefined && isString((game as Game).id)
        && (game as Game).turnToBet !== undefined && isString((game as Game).turnToBet)
        && (game as Game).betAmount !== undefined && typeof (game as Game).betAmount === 'number'
        && (game as Game).pot !== undefined && typeof (game as Game).pot === 'number'
        && (game as Game).deck !== undefined && isCardsArray((game as Game).deck)
        && (game as Game).cardsOnTable !== undefined && isCardsArray((game as Game).cardsOnTable)
        && (game as Game).players !== undefined && isPlayersArray((game as Game).players)
        && (game as Game).started !== undefined && typeof (game as Game).started === 'boolean'
}

export const isPlayerCreatedMessage = (message: unknown): message is PlayerCreatedMessage => {
    return (message as PlayerCreatedMessage).player !== undefined 
        &&  isPlayer((message as PlayerCreatedMessage).player) 
}

export const isGameCreatedMessage = (message: unknown): message is GameCreatedMessage => {
    return (message as GameCreatedMessage).game !== undefined
        && isGame((message as GameCreatedMessage).game)
}

export const isGameJoinedMessage = (message: unknown): message is GameJoinedMessage => {
    return (message as GameJoinedMessage).gameJoined !== undefined
        && isGame((message as GameJoinedMessage).gameJoined)
}

export const isGameStartedMessage = (message: unknown): message is GameStartedMessage => {
    return (message as GameStartedMessage).gameStarted !== undefined
        && isGame((message as GameStartedMessage).gameStarted)
}

export const isGameUpdatedMessage = (message: unknown): message is GameUpdatedMessage => {
    return (message as GameUpdatedMessage).gameUpdated !== undefined
        && isGame((message as GameUpdatedMessage).gameUpdated)
}

export const isServerMessage = (obj: unknown): obj is ServerMessage => {
    return isPlayerCreatedMessage(obj) 
        || isGameCreatedMessage(obj) 
        || isGameJoinedMessage(obj) 
        || isGameStartedMessage(obj)
        || isGameUpdatedMessage(obj)
}