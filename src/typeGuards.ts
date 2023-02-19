import { GameCreatedMessage, PlayerCreatedMessage, ServerMessage } from "./types";

export const isPlayerCreatedMessage = (message: unknown): message is PlayerCreatedMessage => {
    // TODO expand this to be a proper typeGuard
    console.log("message", message)
    return (message as PlayerCreatedMessage).player !== undefined
}

export const isGameCreatedMessage = (message: unknown): message is GameCreatedMessage => {
    return (message as GameCreatedMessage).game !== undefined
}

export const isServerMessage = (obj: unknown): obj is ServerMessage => {
    return isPlayerCreatedMessage(obj) || isGameCreatedMessage(obj)
}