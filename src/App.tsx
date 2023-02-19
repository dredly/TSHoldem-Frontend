import { useEffectOnceWhen } from "rooks";
import { useState } from "react";
import NameEntry from "./components/NameEntry"
import { parseServerMessage } from "./parsers";
import { isPlayerCreatedMessage } from "./typeGuards";

const App = () => {
  const [ws, setWs] = useState<WebSocket | null >(null);

  useEffectOnceWhen(() => {
    console.log("using effect")
    const ws = new WebSocket("ws://localhost:8080")
    ws.onopen = ev => {
      console.log("Opened ws connection")
    }
    ws.onmessage = message => {
      console.log("m e s s a g e    r e c e i v e d")
      console.log(message.data)
      try {
        const obj = JSON.parse(message.data)
        try {
          const serverMessage = parseServerMessage(obj)
          if (isPlayerCreatedMessage(serverMessage)) {
            console.log("its a legit playercreated message hahahaha")
          }
        } catch (err) {
          if (err instanceof Error) {
              console.log(err.message)
          }
      }
      } catch (err) {
        console.log("parsing error", err)
      } 
    }
    setWs(ws)
  })

  if (ws) {
    return <NameEntry ws={ws}/>
  }

  return <div>Connecting</div>
}

export default App
