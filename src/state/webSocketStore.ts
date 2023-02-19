import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface WebSocketState {
    ws: WebSocket | null,
    update: (updatedWs: WebSocket | null) => void
}

const useWebSocketStore = create<WebSocketState>()(
    devtools(
        persist(
            (set) => ({
                ws: null,
                update: (updatedWs: WebSocket | null) => set((state) => ({ ws: updatedWs }))
            }),
            {
                name: 'websocket-storage',
            }
        )
    )
)

export default useWebSocketStore