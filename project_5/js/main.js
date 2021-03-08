//1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
//У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.

function getRandomArray(length, min, max) {

    const arr = []
    for( let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min)
    }

    return arr
}

console.log('масив випадкових цілих чисел:', getRandomArray(5, 3, 10))

//3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.
function getAverage(...numbers) {
    
    arrayOfIntegers = numbers.filter(num => Number.isInteger(num))

    const mean = arrayOfIntegers.reduce((sum, current) => sum + current, 0) / arrayOfIntegers.length
    
    return mean
}

console.log('середнє арифметичне:', getAverage(8, 5, 4, 3, 7, 9, 5.6))

//4.Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.
function getMedian(...numbers) {
    
    arrayOfIntegers = numbers.filter(num => Number.isInteger(num))

    const medianOfArray = arrayOfIntegers.sort((a, b) => (a - b)).reduce(function(previosValue, num, ind, arr) {
        if(arr.length % 2 == 0) {
            ind1 = arr.length / 2
            ind2 = arr.length / 2 + 1 
            return num = (arr[ind1] + arr[2]) / 2
        } else {
            ind = Math.floor(arr.length / 2) 
            return num = arr[ind]
        }
    })

    return medianOfArray
}

console.log('медіанa:', getMedian(6, 2, 5, 4, 3, 1))

//5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
function filterEvenNumbers(...numbers) {
    const evenNumbers = numbers.filter((num) => num % 2 == 0)

    return evenNumbers
}

console.log('только парные:', filterEvenNumbers(6, 2, 5, 4, 3, 1))

//6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
function countPositiveNumbers(...numbers) {
    const aboveZero = numbers.filter(num => num > 0)

    return aboveZero.length
}

console.log('кількість чисел більших 0:', countPositiveNumbers(1, -2, 3, -4, -5, 6))

//7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
function getDividedByFive(...numbers) {
    const withoutRemainder = numbers.filter(num => num % 5 == 0)

    return withoutRemainder
}

console.log('ті, які діляться на ціло на 5', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))