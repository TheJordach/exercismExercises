

// https://exercism.org/tracks/typescript/exercises/resistor-color-trio


/**
 * Instruction : Calculates the decoded resistor value based on the given color codes.
 * @Input colors: string[] - take 3 colors as input,
 * @returns {number} The decoded resistor value in ohms.
 * Hint : The third color stands for how many zeros need to be added to the main value.
 * The main value plus the zeros gives us a value in ohms. For the exercise it doesn't matter what ohms really are.
 * For example:
 *  - orange-orange-black would be 33 and no zeros, which becomes 33 ohms.
 *  -orange-orange-red would be 33 and 2 zeros, which becomes 3300 ohms.
 */
export function decodedResistorValue(colors: string[], band =ColorsBand) {
    //if we have less than 3 colors, return 0
    if(colors.length < 3) return 0

    // Get the values of the color bands
    let [color1, color2, color3] = getValueOfBand(colors, band);

    console.log("Colors values: ", color1, color2, color3)

    //we assume that we ALWAYShave 3 colors
    if(color1 === null || color1 === undefined) return 0
    if(color2 === null || color2 === undefined) return 0
    if(color3 === null || color3 === undefined) return 0

   // Calculate the main value of the resistor. example: 3 3 become 3*10+3=33
    let mainValue:number = color1*10 + color2
    let ohmsValue = mainValue * 10 ** color3
    //The expression mainValue * 10 ** color3 calculates 10 raised to the power of zeros(color3).
    // For example, if zeros is 2, this evaluates to 100 (10^2).

    console.log(ohmsValue.toString() + " ohms")
   return stringOhmsRepresentation(ohmsValue, color3);

}

/*
*  Return the values of the 3 color bands
*  @Input colors: string[] - we assure contain 3 colors,
*  @Output number - return 1 or undefined values per iteration
*  Hint: map return undefined if not found
* */
export const getValueOfBand = (colors: string[], band =ColorsBand) => {
    //we assume that we ALWAYShave 3 colors
    return colors.map(colors => band.get(colors))
}

export const stringOhmsRepresentation = (ohmsValue: number,zeros: number,defaultZeros = 3) => {
    switch (zeros) {
       case 2: return  ohmsValue/(10**defaultZeros) +" kiloohms"
       case 3: return  ohmsValue/(10**zeros) +" kiloohms"
       case 4: return  ohmsValue/(10**defaultZeros) +" kiloohms"
       case 5: return  ohmsValue/(10**defaultZeros) +" kiloohms"
       case 6: return  ohmsValue/(10**zeros) +" megaohms"
       case 9: return  ohmsValue/(10**zeros) +" gigaohms"
       case 12: return ohmsValue/(10**zeros) +" teraohms"
       case 15: return ohmsValue/(10**zeros) +" petaohms"
       case 18: return ohmsValue/(10**zeros) +" exaohms"
       case 21: return ohmsValue/(10**zeros) +" zettaohms"
       case 24: return ohmsValue/(10**zeros) +" yottaohms"
       default: return ohmsValue.toString() +" ohms"
    }
}

export const ColorsBand:Map<string,number> = new Map<string,number>(
    [
        ["black", 0],
        ["brown", 1],
        ["red", 2],
        ["orange", 3],
        ["yellow", 4],
        ["green", 5],
        ["blue", 6],
        ["violet", 7],
        ["grey", 8],
        ["white", 9]
    ]
)


console.log("Ω: ", decodedResistorValue(['black', 'black', 'black']))