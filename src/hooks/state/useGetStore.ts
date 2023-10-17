import { create } from "zustand"

import type { Store } from "@/types/storeTypes"

// interface Store {
//     id: string,
//     name: string
// }

interface useStoreState {
    stores: Store[]
    activeStore: Store | null
}

interface useStoreAction {
    setStores: (stores: Store[]) => void
}

export const useStore = create<useStoreState & useStoreAction>((set) => ({
    stores: [],
    activeStore: null,
    setStores: (stores: Store[]) => set((state) => ({ ...state, stores })),
}))
