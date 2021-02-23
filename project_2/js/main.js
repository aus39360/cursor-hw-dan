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
for( i = numberN; i <= numberM; i++) {
    let sum = i + numberM
    console.log(sum)
}