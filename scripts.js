



//1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
//поиска и замены.
let stroka = 'aaa@bbb@ccc';
console.log(stroka.replace(/@/g, '!'));

//2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
//дату в формат 31/12/2025.
console.log('2025-12-31'.replace(/-/g, '/'));

//3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
//«javascript» тремя разными способами (через substr, substring, slice).
let stroka3 = 'Я учу javascript!';
console.log(stroka3.slice(0,2));
console.log(stroka3.substring(0,2));
console.log(stroka3.substr(0,1));

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
//из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr4 = [4, 2, 5, 19, 13, 0, 10];
let cube = 0;
for (let i = 0; i < arr4.length; i++) {
    cube += Math.pow(arr4[i], 3);
} 
console.log(Math.sqrt(cube));

//5. Даны переменные a и b. Отнимите от a переменную b и результат
//присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
//c записалось положительное значение. Проверьте работу скрипта при a и b,
//равных соответственно 3 и 5, 6 и 1.
function abc (a, b) {
   return console.log(Math.abs(a - b));
}
abc(3, 5);
abc(6, 1);

//6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
//Для решения этой задачи напишите функцию, которая будет добавлять 0
//перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
//сделает 01.09.2014).
let DateNow = new Date();
console.log(DateNow.toLocaleString('ru'));
function time(DateNow){
let month = DateNow.getMonth() + 1;
let day = DateNow.getDate();
let hours = DateNow.getHours();
let minutes = DateNow.getMinutes();
let seconds = DateNow.getSeconds();
let year = DateNow.getFullYear();
if(month < 10) {
    month = "0" + month;
}
if (day <10) {
    day = "0" + day;
}
return console.log(day + '.' + month + '.' + year + ', ' + hours + ':' + minutes + ':' + seconds);
}
time(DateNow);

//7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
//найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
//количество раз, буква 'a'.
let str7 = 'aa aba abba abbba abca abea';
let regexp = /ab{1,}a/gi;
//let regexp = /ab+a/gi;
console.log(str7.match(regexp));

//8. Напишите ф-цию строгой проверки ввода номер телефона в
//международном формате (<код страны> <код города или сети> <номер
//телефона>). Функция должна возвращать true или false. Используйте
//регулярные выражения

//let phoneNumber = prompt("Введите номер телефона");
function phoneFilter(phoneNumber) {
    let regexp = /^\+375[ \d(]?(29|33|25|44|17)?[ \d)][1-9][0-9]{2}[ -]?[0-9]{2}[ -]?[0-9]{2}$/gm;
    return console.log(regexp.test(phoneNumber));
}
//phoneFilter(phoneNumber);

/*9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.

Курс «JS».

Функция должна возвращать true или false. Используйте регулярные
выражения.*/

//let email = prompt("Введите свой email");
function emailFilter(email) {
    let regexp = /^[0-9a-z]+[\.\-\_]?[0-9a-z]+[\.\-\_]?[0-9a-z]+@[a-z]{2,8}[\.\-]?.[a-z]{2,11}$/gim;
    return console.log(regexp.test(email));
}
//emailFilter(email);

/*10. Напишите ф-цию, которая из полного адреса с параметрами и без,
например: https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
доменного имени (https://tech.onliner.by), остальную часть адреса без
параметров (/2018/04/26/smart-do-200/), параметры
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
может и не быть каких-либо составляющих. Ф-ция должна возвращать
массив.*/

let domenFilter = function(url){
    let regExp = /^https:\/\/([a-z0-9.]+)(\/[^?&#\s]+\/?)?(\?[^?#\s]+)?(#[a-z0-9]+)?/;
    return url.match(regExp);

}
//console.log(domenFilter("https://learn.javascript.ru/regexp-greedy-and-lazy") );

const Contact = function(name, phone) {
    if (name) this.name = name;
    if (phone) this.phone = phone;
    if (email) this.email = email;

}

let contact1 = new Contact ('Alex', 4353464575464, 'fggf@gmail.com');