import { create } from "zustand"
import { persist, devtools } from "zustand/middleware"
import type { Player, RoleId, GamePhase } from "../types/roles"

interface GameState {
  players: Player[]
  selectedRoles: RoleId[]
  nightOrder: RoleId[]
  currentPhase: GamePhase
  currentNightStep: number
  discussionTimerMinutes: number

  addPlayer: (name: string) => void
  removePlayer: (id: string) => void
  toggleRole: (roleId: RoleId) => void
  setNightOrder: (newOrder: RoleId[]) => void
  assignRoles: () => void

  setPhase: (phase: GamePhase) => void
  killPlayer: (id: string) => void
  toggleMayor: (id: string) => void
  toggleLoved: (id: string) => void
  nextNightStep: () => void
  resetGame: () => void
}

export const useGameStore = create<GameState>()(
  devtools(
    persist(
      (set, get) => ({
        players: [],
        selectedRoles: ["werewolf", "werewolf", "witch", "seer", "villager"],
        nightOrder: ["cupid", "thief", "seer", "werewolf", "witch", "matratze"],
        currentPhase: "setup",
        currentNightStep: 0,
        discussionTimerMinutes: 5,

        // --- Setup Actions ---
        addPlayer: (name) => {
          const trimmed = name.trim()
          if (!trimmed) return

          const newPlayer: Player = {
            id: crypto.randomUUID(),
            name: trimmed,
            roleId: null,
            isAlive: true,
            isMayor: false,
            isLoved: false,
            isProtected: false,
          }

          set((state) => ({ players: [...state.players, newPlayer] }))
        },

        removePlayer: (id) =>
          set((state) => ({
            players: state.players.filter((p) => p.id !== id),
          })),

        toggleRole: (roleId) =>
          set((state) => {
            const exists = state.selectedRoles.includes(roleId)
            const updatedRoles = exists
              ? state.selectedRoles.filter((r) => r !== roleId)
              : [...state.selectedRoles, roleId]

            return { selectedRoles: updatedRoles }
          }),

        setNightOrder: (newOrder) => set({ nightOrder: newOrder }),

        assignRoles: () => {
          const { players, selectedRoles } = get()
          if (players.length === 0 || selectedRoles.length < players.length)
            return

          // Fisher-Yates shuffle algorithm
          const shuffledRoles = [...selectedRoles].sort(
            () => Math.random() - 0.5
          )

          const updatedPlayers = players.map((player, index) => ({
            ...player,
            roleId: shuffledRoles[index],
            isAlive: true,
            isLoved: false,
            isProtected: false,
          }))

          set({ players: updatedPlayers, currentPhase: "reveal" })
        },

        // --- Game Actions ---
        setPhase: (phase) => set({ currentPhase: phase }),

        killPlayer: (id) =>
          set((state) => {
            const target = state.players.find((p) => p.id === id)
            if (!target || !target.isAlive) return state

            // Primary Kill
            let updatedPlayers = state.players.map((p) =>
              p.id === id ? { ...p, isAlive: false } : p
            )

            // Cascading Rule: Lover Heartbreak Death
            if (target.isLoved) {
              updatedPlayers = updatedPlayers.map((p) =>
                p.isLoved ? { ...p, isAlive: false } : p
              )
            }

            return { players: updatedPlayers }
          }),

        toggleMayor: (id) =>
          set((state) => ({
            players: state.players.map((p) => ({
              ...p,
              isMayor: p.id === id ? !p.isMayor : false, // Only 1 Mayor at a time
            })),
          })),

        toggleLoved: (id) =>
          set((state) => ({
            players: state.players.map((p) =>
              p.id === id ? { ...p, isLoved: !p.isLoved } : p
            ),
          })),

        nextNightStep: () =>
          set((state) => {
            const nextIndex = state.currentNightStep + 1
            if (nextIndex >= state.nightOrder.length) {
              return { currentPhase: "day", currentNightStep: 0 }
            }
            return { currentNightStep: nextIndex }
          }),

        resetGame: () =>
          set({
            players: [],
            currentPhase: "setup",
            currentNightStep: 0,
          }),
      }),
      {
        name: "werwolf-game-store"
      }
    )
  )
)
