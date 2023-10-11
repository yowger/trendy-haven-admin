export function handleDecimalsOnValue(value: string): string {
    const regex = /([0-9]*[.]{0,1}[0-9]{0,2})/
    const match = value.match(regex)
    return match ? match[0] : ""
}
