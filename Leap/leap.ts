

export function isLeap(year:number) {

    return divisableBy4(year) && !divisableBy100(year) || divisableBy400(year);
}

export const divisableBy4 = (year: number) => year % 4 === 0;
export const divisableBy100 = (year: number) => year % 100 === 0;
export const divisableBy400 = (year: number) => year % 400 === 0;

console.log("message: ", isLeap(2100))