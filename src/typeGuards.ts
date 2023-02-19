import { GameCreatedMessage, Player, PlayerCreatedMessage, Role, Suit, ServerMessage, Card } from "./types";

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

export const isPlayerCreatedMessage = (message: unknown): message is PlayerCreatedMessage => {
    return (message as PlayerCreatedMessage).player !== undefined 
        &&  isPlayer((message as PlayerCreatedMessage).player) 
}

export const isGameCreatedMessage = (message: unknown): message is GameCreatedMessage => {
    return (message as GameCreatedMessage).game !== undefined
}

export const isServerMessage = (obj: unknown): obj is ServerMessage => {
    return isPlayerCreatedMessage(obj) || isGameCreatedMessage(obj)
}