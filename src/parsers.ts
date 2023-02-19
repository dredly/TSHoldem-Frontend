import { isServerMessage } from "./typeGuards"
import { ServerMessage } from "./types"

export const parseServerMessage = (message: unknown): ServerMessage => {
    if (!message || !isServerMessage(message)) {
        throw new Error("Invalid format for server message")
    }
    return message
}