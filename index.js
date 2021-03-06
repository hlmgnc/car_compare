const cars = [
    {brand :'bmw', model : 'm3', year: 2018 , power: 431, price :60000,acc: 3.9},
    {brand :'porsche', model : '718gt', year: 2019 , power: 450, price :58000 ,acc: 3.9},
    {brand :'porsche', model : '911 turbo', year: 2017 , power: 450, price :105000 ,acc: 3.5},
    {brand :'mercedes', model : 'e63', year: 2018 , power: 610, price :87500 ,acc: 3.8},
    {brand :'mercedes', model : 'c63', year: 2019 , power: 435, price :73800 ,acc: 4.1},
    {brand :'mercedes', model : 'amg gt', year: 2020 , power: 600, price :119000 ,acc: 3.5},
    {brand :'bmw', model : 'm5', year: 2019 , power: 625, price :98000 ,acc: 3.8},
    {brand :'audi', model : 'r8', year: 2016 , power: 580, price :53000 ,acc: 4.2},
    {brand :'bmw', model : 'i8', year: 2018 , power: 380, price :69000 ,acc: 4},
    {brand :'bmw', model : 'm4', year: 2017 , power: 431, price :68500 ,acc: 3.8},
    {brand :'audi', model : 'rs6', year: 2015 , power: 580, price :66700 ,acc: 3.9},
    {brand :'porsche', model : 'panamera turbo', year: 2016 , power: 490, price:67000 ,acc: 4},
    {brand :'audi', model : 'rs5', year: 2020 , power: 480, price :90000 ,acc: 4.1},
    {brand :'bmw', model : 'm6', year: 2014 , power: 475, price :41000 ,acc: 4.3},
    {brand :'porsche', model : '718', year: 2019 , power: 320, price :57500 ,acc: 4.6},
    {brand :'tesla', model : 'modelX', year: 2019 , power: 500, price :98000 ,acc: 2.9}
];

// filter the cars which are over than 450 hp

const overPerformanceCars = cars.filter(car => (car.power > 450 ))
console.table(overPerformanceCars)

const expensiveCars = cars.filter(car => (car.price>= 60000))
console.table(expensiveCars)

const cheapCars = cars.filter(car => (car.price< 60000))
console.table(cheapCars)

const effForPerformance = cars.filter(car=> cheapCars.includes(car) && overPerformanceCars.includes(car))
console.log(effForPerformance)

const listNames = cars.map(car => (car.brand + ' ' + car.model ))
console.table(listNames)

const ascendingPrices = cars.sort((a,b) => a.price > b.price ? 1 : -1 )
console.table(ascendingPrices)

const descendingPrices = cars.sort((a,b) => a.price < b.price ? 1 : -1 )
console.table(descendingPrices)

const names = cars.reduce(function(obj,item) {
 if (!obj[item.brand]){
 obj[item.brand]=0
 }
 obj[item.brand]++
 return obj
}, {});
console.log(names)
