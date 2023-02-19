import { useState } from "react"
import { CreatePlayerMessage } from "../types"

const NameEntry = ({ws}: {ws: WebSocket}) => {
    const [playerName, setPlayerName] = useState('')

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
        </div>
    )
}

export default NameEntry