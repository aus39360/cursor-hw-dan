const breadPrice = 15.678;
const alcoPrice = 123.965;
const milkPrice = 90.2345;

//max
const maxPrice = Math.max(breadPrice, alcoPrice, milkPrice)
console.log("Максимальное число:", maxPrice)

//min
const minPrice = Math.min(breadPrice, alcoPrice, milkPrice)
console.log("Минимальное число:", minPrice)

//sum
const sumPrice = breadPrice + alcoPrice + milkPrice
console.log("Сума чисел:", sumPrice)

//sum whole numbers
const sumRoundedPrices = Math.floor(breadPrice) + Math.floor(alcoPrice) + Math.floor(milkPrice)
console.log("Сума округленных чисел:", sumRoundedPrices)

//sum round
const sumRound = Math.round(sumPrice / 100) * 100
console.log("Сума округленная до сотень:", sumRound)

//boolean
sumRoundedPrices % 2 === 0 ? console.log("парное число") : console.log("непарное число")

//remainder
clientPaysUSD = 500
const remainder = clientPaysUSD - sumPrice
console.log("сдача с 500 грн:", remainder)

//average
const averagePrice = Number((sumPrice / 3).toFixed(2))
console.log("Средняя цена:", averagePrice)

//sale random
const randomSale = Math.floor(Math.random() * 100)
console.log("Скидка в %:", randomSale)

const priceWithSale = Number((sumPrice - (sumPrice * (randomSale / 100))).toFixed(2))
console.log("Сума к оплате с учетом скидки:", priceWithSale)

const profit = Number(((sumPrice / 2) - (sumPrice - priceWithSale)).toFixed(2))
console.log("профит:", profit)

//Advanced
document.writeln(`
<p><b> Максимальное число: ${maxPrice} </b></p>
<p><b> Минимальное число: ${minPrice} </b><p>
<p><b> Сума чисел: ${sumPrice} </b><p>
<p><b> Сума округленных чисел: ${sumRoundedPrices} </b><p>
<p><b> Сума округленная до сотень: ${sumRound} </b><p>
<p><b> сдача с 500 грн: ${remainder} </b><p>
<p><b> Скидка в %: ${randomSale} </b><p>
<p><b> Сума к оплате с учетом скидки: ${priceWithSale} </b><p>
<p><b> профит: ${ profit} </b><p>
`)
