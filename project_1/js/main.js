const bread = 15.678;
const alco = 123.965;
const milk = 90.2345;

//max
const maxPrice = Math.max(bread, alco, milk)
console.log("Максимальное число:", maxPrice)

//min
const minPrice = Math.min(bread, alco, milk)
console.log("Минимальное число:", minPrice)

//sum
const sumPrice = bread + alco + milk
console.log("Сума чисел:", sumPrice)

//sum whole numbers
const sumWholeNum = Math.floor(bread) + Math.floor(alco) + Math.floor(milk)
console.log("Сума округленных чисел:", sumWholeNum)

//sum round
const sumRound = Math.round(sumPrice/100)*100
console.log("Сума округленная до сотень:", sumRound)

//boolean
sumWholeNum % 2 === 0 ? console.log("парное число") : console.log("непарное число")

//remainder
const remainder = 500 - sumPrice
console.log("сдача с 500 грн:", remainder)

//average
const averagePrice = console.log("Средняя цена:", Number((sumPrice/3).toFixed(2)))

//sale random
const randomSale = Math.floor(Math.random()*100)
console.log("Скидка в %:", randomSale)

const priceWithSale = Number((sumPrice - (sumPrice * (randomSale / 100))).toFixed(2))
console.log("Сума к оплате с учетом скидки:", priceWithSale)

const profit = Number((priceWithSale - sumPrice/2).toFixed(2))
console.log("профит:", profit)

//Advanced
document.writeln(`
<p><b> Максимальное число: ${maxPrice} </b></p>
<p><b> Минимальное число: ${minPrice} </b><p>
<p><b> Сума чисел: ${sumPrice} </b><p>
<p><b> Сума округленных чисел: ${sumWholeNum} </b><p>
<p><b> Сума округленная до сотень: ${sumRound} </b><p>
<p><b> сдача с 500 грн: ${remainder} </b><p>
<p><b> Скидка в %: ${randomSale} </b><p>
<p><b> Сума к оплате с учетом скидки: ${priceWithSale} </b><p>
<p><b> профит: ${ profit} </b><p>
`)
