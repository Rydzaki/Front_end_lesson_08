// Поиск максимального числа: Условие: Напишите программу, которая находит максимальное число из массива и выводит его.
let arr = [];
let min = 0;
let max = 100;
for(let i = min; i < 20; i++){
    arr.push(Math.floor(Math.random() * (max - min +1)+ min));
}
console.log(arr);

let maximum = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > maximum){
        maximum = arr[i];
    }
}
console.log('max number = ' + maximum);

// Генератор таблицы умножения: Условие: Выведите таблицу умножения для числа 5.

let current = 5;
let multiplication =[];
for(let i = 1; i <= 10; i++){
    multiplication.push(current*i);
}
console.log(multiplication);

// Подсчет четных чисел: Условие: Напишите программу, которая подсчитывает количество четных чисел в заданном массиве.

let even = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] %2 === 0){
        even++;
    }
}
console.log('even numbers = ' + even);

// Реверс массива: Условие: Напишите программу, которая переворачивает заданный массив.

let revers = [];
for(let i = arr.length-1; i >= 0; i--){
    revers.push(arr[i])
}
console.log('revers array: ' + revers);