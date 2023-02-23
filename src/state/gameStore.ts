import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Game, Player } from '../types'

interface GameState {
    game: Game | null,
    // originalPlayerOrder used to keep track of order players started off in for rendering purposes, by their ids
    originalPlayerOrder: String[],
    updateGame: (updatedGame: Game | null) => void,
    updateOriginalPlayerOrder: (playerOrder: String[]) => void
}

const useGameStore = create<GameState>()(
    devtools(
        persist(
            (set) => ({
                game: null,
                originalPlayerOrder: [],
                updateGame: (updatedGame: Game | null) => set((state) => ({ game: updatedGame })),
                updateOriginalPlayerOrder: (playerOrder: String[]) => set((state) => ({ originalPlayerOrder: playerOrder }))
            }),
            {
                name: 'game-storage',
            }
        )
    )
)

export default useGameStore