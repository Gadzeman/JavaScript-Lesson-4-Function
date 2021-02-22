// структура функції + можливість створювати елементи в пару кліків

function createDomElement(tag, txt) {
    let a = document.createElement(tag)
    a.classList.add("item")
    a.innerText = txt;
    document.body.appendChild(a)
}

createDomElement("h1", "Functions")
createDomElement("div", "Lesson 4")

// ==============================================================================
// в цьому прикладі бачимо, як створити функцію за допомогою переміної

let foo = function () {
    console.log("It's foo function")
}

foo()

// ==============================================================================
// arrow ()=>{} - стрілкова функція. дозволяє коротше писати функцію

let func = () => {
    console.log("Hello! It's func")
}
func()

// ==============================================================================
// recursion - функція, яка сама себе викликає

function increment(start) {
    start++
    if (start > 10) {
        return
    } else {
        console.log(start)
    }
    increment(start)
}

increment(0)

// ==============================================================================
// selfinvoke - функція, яка сама себе викликає
// приклад в index.html

function res() {
    console.log("You've pressed on me:)")
}

console.log("===================================task=================================")
// - створити функцію яка виводить масив

function array() {
    let a = [
        "vasya",
        "kolya",
        "petya",
        "sasha"
    ]
    console.log(a)
}
array()

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

console.log("======================================================================")

function sort(a, b) {
    if (a > b) {
        return b
    } else
        return a
}

console.log(sort(4, 8))

console.log("================or===============")

function minNum(a, b, c) {
    let res = Math.min(a, b, c)
    console.log(res)
}

minNum(12, 24, 45)

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

console.log("======================================================================")

function maxNum(a, b, c) {
    let result = Math.max(a, b, c)
    console.log(result)
}

maxNum(12, 21, 44)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

console.log("======================================================================")

function numb(...x) {
    let minNum = Math.min(...x)
    let maxNum = Math.max(...x)
    console.log(maxNum)
    return minNum
}

numb(34, 23, 52, 21, 34)

// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

console.log("======================================================================")
let arr = [12, 33, 44, 55, 66]

function rifm(array) {
    let count = 0
    // for (let i = 0; i != array.length; i++) {
    //     count += array[i]
    // }
    for (let i = 0; i < array.length; i++) {
        count += array[i]
        
    }
    console.log(`середнє арифметичне масива [${array}] :`, count / array.length)
}

rifm(arr)

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

console.log("======================================================================")

let array1 = [1,2,3,4]
let array2 = [2,3,4,5]

function fun(firstArray, secondArray){
    let result = []
    // for (const index of firstArray) {
    //     result.push(firstArray[index] + secondArray[index])
    // }
    for (let i = 0; i != firstArray.length; i++) {
        result.push(firstArray[i] + secondArray[i])
        
    }

    console.log(result)
}

fun(array1, array2)

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

console.log("======================================================================")

let ar = [2, 4, 1, 4, 6, 0, 2, 0, 7, 9, 0, 1]

function zeroFunction(array) {
    let arrayForNum = []
    let arrayForZero = []
    for (const num of array) {
        if(num == 0){
            arrayForZero.push(num)
        }else{
            arrayForNum.push(num)
        }
    }

    return arrayForNum.concat(arrayForZero) 
}

console.log(zeroFunction(ar))

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

let cars = [{
    model: "BMW",
    engine: "3,8",
    color: "white",
    theDriver: {
        name: "Oleh",
        age: 23
    }
},
{
    model: "OPEL",
    engine: "1,7",
    color: "silver",
    theDriver: {
        name: "Viktor",
        age: 50
    }
},
{
    model: "Audi",
    engine: "3,0",
    color: "black",
    theDriver: {
        name: "Alex",
        age: 30
    }
}]

function carsFunction(array){

    let container = document.createElement("div")
    container.classList.add("wrap")


    for (const car of array) {
        let item = document.createElement("div")
        item.classList.add("item")

        let model = document.createElement("h3")
        model.innerText = `Model: ${car.model} ${car.engine}`
        item.appendChild(model)

        let color = document.createElement("h3")
        color.innerText = `Color: ${car.color}`
        item.appendChild(color)

        let driver = document.createElement("p")
        driver.innerHTML = `Driver: ${car.theDriver.name} <br/>Age: ${car.theDriver.age}`
        item.appendChild(driver)

        container.appendChild(item)
    }

    document.body.appendChild(container)
}

carsFunction(cars)

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:



// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];
// "

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

console.log("==============================taskFromSite================================")

let obj = {
    'a': 12,
    'b': 21,
    'c': 13,
    'd': 23,
    'e': 17
};
let obj2 = {}

for (const key in obj) {
    if (obj[key] > 9 && obj[key] < 21) {
        obj2[key] = obj[key]
    }
}
console.log(obj2)

console.log("======================================================================")

let first = "20.527288"
let second = parseFloat(first)

console.log(first)
console.log(second)

console.log("======================================================================")

// let firstNum = +prompt("Enter first number: ")
// let secondNum = +prompt("Enter second number: ")

// console.log(firstNum + secondNum)

// скрипт, який аналізує масив, в якому різні типи даних, та записує в новий масив лише числа

let masiv = [32, false, false, 44, "Laptop", true, 52, 54, "23", "Nice", "Hello", 90]
let numbers = []

function scaner(array){
    for (const index of array) {
        if(typeof index === "number"){
            numbers.push(index)
        }
    }
    console.log(numbers)
}
scaner(masiv)
console.log("======================================================================")

// Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».
// Если аргументы не заданы, считать их равными нулю.

function rgb(a, b, c){
    if(a === undefined){
        a = 0
    }
    if(b === undefined){
        b = 0
    }
    if(c === undefined){
        c = 0
    }
    console.log(a, b, c)
}

rgb()

console.log("======================================================================")

// создать функцию которая будет принимать два массива:
// - с ключами
// - с значениями
// и будет возвращать объект полученный в результате склеивания этих двух массивов
// пример:
// zip(['name', 'age', 'status'], ['Kira', 12, false])  —>  { name: 'Kira', age: 12, status: false }s