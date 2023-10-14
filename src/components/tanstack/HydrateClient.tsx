import { Hydrate, HydrateProps } from "@tanstack/react-query"

export default function HydrateClient(props: HydrateProps): JSX.Element {
    return <Hydrate {...props} />
}
