//1.Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
function getMaxDigit(num) {
    num = String(num)
    let maxNum = 0
    for ( let i = 0; i < num.length; i++ ) {
        if (maxNum < num[i]) {
            maxNum = num[i]
        }
    }
    return maxNum
}

console.log('наибольшая цифра в числе:', getMaxDigit(12345685))


//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function getNecessaryCase(name) {
    const correctСase = name[0].toUpperCase() + name.slice(1).toLowerCase()
    return correctСase
}
console.log('исправленные регистры:', getNecessaryCase('dAN'))


//4.Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%)
function getBalanceOfWages(wages) {
    tax = 19.5
    wageWithTax = wages - (wages / 100 * tax)
    return wageWithTax
}
console.log('зп после налога:', getBalanceOfWages(1000))


//5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. 
function getRandomNumber(numberN, numberM) {
    randomNum = numberN + Math.random() * (numberM + 1 - numberN);
    return Math.floor(randomNum);
}
console.log('случайное число в заданом диапазоне', getRandomNumber(3, 12))

//6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові. 
function counter (letter, word) {
    letter = letter.toLowerCase()
    word = word.toLowerCase()
    
    quantityLetters = 0
    for ( let i = 0; i < word.length; i++ ) {
        if (letter == word[i]) {
            quantityLetters += 1
        }
    }
    return quantityLetters
}
console.log('скільки разів певна буква повторюється в слові:', counter('а', 'Австралия'))


//7.Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 
function сurrencyConverter(currency) {

    for ( let i = 0; i < currency.length; i++ ) {
        if ('$' == currency[i]) return parseFloat(currency) * 28
        if ('U' == currency[i]) return parseFloat(currency) * 0.036 
    }
}
console.log('конвертер:', сurrencyConverter('1$'))