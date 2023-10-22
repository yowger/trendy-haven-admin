import { Store } from "@prisma/client"
import { create } from "zustand"

interface useStoreState {
    stores: Store[]
}

interface useStoreAction {
    setStores: (stores: Store[]) => void
}

export const useStore = create<useStoreState & useStoreAction>((set) => ({
    stores: [],
    setStores: (stores: Store[]) => set((state) => ({ ...state, stores })),
}))
