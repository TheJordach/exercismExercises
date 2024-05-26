export function decodedValue(color: string[], colorMap= COLORS) {
    let twoFirstColor:number[] = [];
    for (const element of color) {
        //find two first colors
        twoFirstColor.push(<number>colorMap.get(element))
    }
    // convert two first colors to string
    twoFirstColor = twoFirstColor.slice(0, 2)
    // convert string to number
    return parseInt(twoFirstColor.join(""))
}

export const COLORS :Map<string, number> = new Map<string, number>(
    [
        ["black", 0],
        ["brown", 1],
        ["red", 2],
        ["orange", 3],
        ["yellow", 4],
        ["green", 5],
        ["blue", 6],
        ["violet",7],
        ["grey", 8],
        ["white", 9]
    ]
)

console.log(decodedValue(["red", "yellow", "blue"]))