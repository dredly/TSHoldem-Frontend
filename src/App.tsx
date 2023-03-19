import { useEffectOnceWhen } from "rooks";
import { useState } from "react";
import NameEntry from "./components/NameEntry"
import { parseServerMessage } from "./parsers";
import { isGameCreatedMessage, isGameJoinedMessage, isGameStartedMessage, isGameUpdatedMessage, isPlayerCreatedMessage } from "./typeGuards";
import usePlayerStore from "./state/playerStore";
import useWebSocketStore from "./state/webSocketStore";
import useGameStore from "./state/gameStore";
import GameSpace from "./components/GameSpace";

const App = () => {
  const ws = useWebSocketStore(state => state.ws)
  const game = useGameStore(state => state.game)
  const updateWs = useWebSocketStore(state => state.update)
  const updatePlayer = usePlayerStore(state => state.update)
  const updateGame = useGameStore(state => state.updateGame)
  const updatePlayingOrder = useGameStore(state => state.updateOriginalPlayerOrder)

  const wsUrl = window.location.href.includes("ts-holdem") ? "wss://tsholdem-v2.fly.dev" : "ws://localhost:8080"

  useEffectOnceWhen(() => {
    updateWs(new WebSocket(wsUrl))
    updatePlayer(null)
    updateGame(null)
    updatePlayingOrder([])
  })

  if (!ws) return <div>Connecting...</div>

  ws.onopen = ev => {
    console.log("Opened ws connection")
  }
  ws.onmessage = message => {
    console.log("m e s s a g e    r e c e i v e d")
    try {
      const obj = JSON.parse(message.data)
      try {
        const serverMessage = parseServerMessage(obj)
        if (isPlayerCreatedMessage(serverMessage)) {
          console.log("PLAYER CREATED")
          updatePlayer(serverMessage.player)
        }
        if (isGameCreatedMessage(serverMessage)) {
          console.log("GAME CREATED")
          updateGame(serverMessage.game)
        }
        if (isGameJoinedMessage(serverMessage)) {
          console.log("GAME JOINED")
          updateGame(serverMessage.gameJoined)
        }
        if (isGameStartedMessage(serverMessage)) {
          console.log("GAME STARTED")
          updateGame(serverMessage.gameStarted)
          updatePlayingOrder(serverMessage.gameStarted.players.map(p => p.id))
        }
        if (isGameUpdatedMessage(serverMessage)) {
          console.log("GAME UPDATED")
          updateGame(serverMessage.gameUpdated)
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

  if (!game) return <NameEntry />
  return <GameSpace />
}

export default App
