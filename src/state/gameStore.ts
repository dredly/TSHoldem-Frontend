import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Game } from '../types'

interface GameState {
    game: Game | null,
    update: (updatedGame: Game | null) => void
}

const useGameStore = create<GameState>()(
    devtools(
        persist(
            (set) => ({
                game: null,
                update: (updatedGame: Game | null) => set((state) => ({ game: updatedGame })),
            }),
            {
                name: 'game-storage',
            }
        )
    )
)

export default useGameStore