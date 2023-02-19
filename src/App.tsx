import { useEffectOnceWhen } from "rooks";
import GameSpace from "./components/GameSpace"

const App = () => {
  
  useEffectOnceWhen(() => {
    console.log("using effect")
    const ws = new WebSocket("ws://localhost:8080")
    ws.onopen = ev => {
      console.log("Opened ws connection")
    }
  })

  return (
    <GameSpace />
  )
}

export default App
