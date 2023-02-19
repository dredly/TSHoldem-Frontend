import { useState } from "react"
import usePlayerStore from "../state/playerStore"
import useWebSocketStore from "../state/webSocketStore"
import { CreatePlayerMessage } from "../types"
import StartOrJoin from "./StartOrJoin"

const NameEntry = () => {
    const ws = useWebSocketStore(state => state.ws)
    const [playerName, setPlayerName] = useState('')
    const player = usePlayerStore(state => state.player)

    if (!ws) return <div>Error: not connected to websocket</div>

    const handleSubmit = (evt: { preventDefault: () => void }) => {
        evt.preventDefault()
        const createPlayerMessage: CreatePlayerMessage = {
            name: playerName
        }
        ws.send(JSON.stringify(createPlayerMessage))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Please enter your name
                    <input 
                        type="text" 
                        value={playerName}
                        onChange={({target}) => setPlayerName(target.value)} 
                    />
                </label>
                <button type="submit">Confirm</button>
            </form>
            {player ? <StartOrJoin /> : "player not yet created"}
        </div>
    )
}

export default NameEntry