import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

const initialState = { bears: 0, food: "honey" }

type BearState = typeof initialState & {
  increae: (by: number) => void
  reset: () => void
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        increae: (by) => set((s) => ({ bears: s.bears + by })),
        reset: () => set(initialState),
      }),
      { name: "bear-storage" }
    )
  )
)
