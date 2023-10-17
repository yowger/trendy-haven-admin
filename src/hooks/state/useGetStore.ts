import { create } from "zustand"

interface Store {
    id: string
    name: string
}

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
