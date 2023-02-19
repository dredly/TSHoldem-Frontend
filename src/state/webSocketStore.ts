import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface WebSocketState {
    ws: WebSocket | null,
    update: (updatedWebSocket: WebSocket | null) => void
}

const useWebSocketStore = create<WebSocketState>()(
    devtools(
        persist(
            (set) => ({
                ws: null,
                update: (updatedWebSocket: WebSocket | null) => set((state) => ({ ws: updatedWebSocket })),
            }),
            {
                name: 'websocket-storage',
            }
        )
    )
)

export default useWebSocketStore