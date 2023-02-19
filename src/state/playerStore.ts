import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Player } from '../types'

interface PlayerState {
    player: Player | null,
    update: (updatedPlayer: Player | null) => void
}

const usePlayerStore = create<PlayerState>()(
    devtools(
        persist(
            (set) => ({
                player: null,
                update: (updatedPlayer: Player | null) => set((state) => ({ player: updatedPlayer })),
            }),
            {
                name: 'player-storage',
            }
        )
    )
)

export default usePlayerStore