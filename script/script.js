// alert("Моя первая строчка в JS");

console.log("Моя вторая строчка в JS");

var message = 'Привет'; // старый способ определения переменной не используем
let message_2 = 'Привет друзья'; // 
const message_3 = 'Привет дорогие друзья'; //

console.log(message);
console.log(message_2);
console.log(message_3);

const number_1 = 20;
const number_2 = 12;

if(number_1 > number_2){
    console.log(number_1);
} else if(number_1<number_2){
    console.log(number_2);

}else{
    console.log("Они равны");
}

if (number_1%2 == 0){
    console.log("Число четное");
}else{
    console.log("Число не четное");
}
console.log(12 == '12') // СРАВНИВАЕТ САМИ ЗНАЧЕНИЯ НО НЕ ТИПЫ
console.log(12 === '12') // СРАВНИВАЕТ САМИ ЗНАЧЕНИЯ и типы

// for(let i=0; i<9; i++){
// console.log(i)

// }
for(let i=9; i >= 0; i--){
    console.log(i)
    
    }

const list = [12, 4, 65, 3, 5];
// list.push(4); // добавить новы элемент в массив
console.log(list);

//console.log(list.length); // длинна массива
// for(i = 0; i < list.length; i++){
//     console.log(list[i])
// }

// for(i = 0; i < list.length; i++){
//     if(list[i]%2 === 0){
//         console.log(list[i])
//     }
// }

let sum = 0;
for(i = 0; i < list.length; i++){
    sum += list[i];
}
console.log(sum);


const words = ['ролики', 'велосипед', 'самокат', 'Анатолий']

// for(let i=0; i < words.length; i++){
//     console.log(words[i]);
// }
// for(word of words){ // for of
//     console.log(word);
// }

for(word of words){ // for of
    if(word.length > 7){
        console.log(word);
    }
    
}

let cur = words[0];
for(word of words){
    if(word.length > cur.length){
        cur = word
    }
}
console.log(cur);

if(true){
// let value_1 = 12;
var value_2 = 21;
}

// console.log(value_1);
console.log(value_2);



