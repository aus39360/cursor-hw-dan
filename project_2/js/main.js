//проверка на целое число
let numberN 
do {
    numberN = Number(prompt('Введите число N'))
} while (!Number.isInteger(numberN))
console.log('число N:', numberN)

let numberM 
do {
    numberM = Number(prompt('Введите число M'))
} while (!Number.isInteger(numberM))
console.log('число M:', numberM)

//promt на парные числа
const skipPairedNum = confirm('Пропускать парные числа?')
console.log(skipPairedNum)

//N + M
/*let sum = 0
if(skipPairedNum === true) {
    for( i = numberN; i <= numberM; i++) {
        if (i % 2 == 0) continue
        sum += i 
    }    
} else {
    for( i = numberN; i <= numberM; i++) {
        sum += i 
    } 
}
console.log(sum)*/

let sum = 0
for( let i = numberN; i <= numberM; i++) {
    if (skipPairedNum && i % 2 == 0) continue
    sum += i 
}
console.log(sum)