import { create } from "zustand"

import type { Store } from "@/types/storeTypes"

// interface Store {
//     id: string,
//     name: string
// }

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
