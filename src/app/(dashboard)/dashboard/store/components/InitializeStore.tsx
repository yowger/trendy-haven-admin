"use client"

import { useEffect, useRef } from "react"
import { useSession } from "next-auth/react"

interface ActiveStore {
    id: string
    name: string
}

interface HeaderProps {
    currentActiveStore: ActiveStore | null | undefined
}

export default function InitializeStore({
    currentActiveStore,
}: HeaderProps): null {
    const isMountingRef = useRef(false)

    const { data: session, update } = useSession()
    const { activeStore } = session?.user ?? {}

    useEffect(() => {
        if (!isMountingRef.current) {
            if (!activeStore?.name) {
                update({ ...currentActiveStore })
            }
        } else {
            isMountingRef.current = false
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentActiveStore])

    return null
}
