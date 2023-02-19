import { useState } from "react"
import usePlayerStore from "../state/playerStore"
import { CreatePlayerMessage } from "../types"
import StartOrJoin from "./StartOrJoin"

const NameEntry = ({ws}: {ws: WebSocket}) => {
    const [playerName, setPlayerName] = useState('')
    const player = usePlayerStore(state => state.player)

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