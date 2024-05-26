

export function toRna(dna:string) {
    if (!isValidDnaSequence(dna)) {
        throw new Error('Invalid input DNA.')
    }
    return dna.split('').map((nucleotide) => rnaSequence.get(nucleotide)).join('')

}

const rnaSequence = new Map<string, string>([["G","C"],["C","G"],["T","A"],["A","U"]])



/**
 * Return true if the input is invalid dna sequence, false otherwise
 *  @param dna
 */
const isValidDnaSequence = (dna:string): boolean =>  /^[GCTA]+$/.test(dna)


