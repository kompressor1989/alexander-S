


//1. Сделайте функцию, которая отнимает от первого числа второе и делит на
//третье. Числа передаются параметром.
/*function one() {
    let a = prompt('Веедите первое число');
    let b = prompt('Веедите второе число');
    let c = prompt('Веедите третье число');
    result = (a - b) / c
}
one();
console.log(result);

//2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
//передается параметром.
function two () {
    let a = prompt('Веедите число');
    square = a **2;
    cube = a **3
}

two();
console.log(`Квадрат числа: ${square} Куб числа: ${cube}`);*/

//Напишите функции min и max, которые возвращают меньшее и большее из
//чисел a и b.
 /*function three (a, b) {
     if (a > b) console.log(`Наименьшее число: ${a}, Наибольшее число: ${b}`);
     else console.log(`Числа равны`);
     return;
 }
 three(10, 2)*/

 //4. Напишите две функции: первая ф-ция должна возвращать массив с
//числовыми значениями, диапазон которых должен вводиться пользователем
//с клавиатуры; вторая – выводить полученный массив.
function four(length) {
    length = prompt('Введите длину массива');
   
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = prompt(`Введите число массива`);
        
    }
    console.log(arr);
    return arr;
}
//four();

//5. Сделайте функцию isEven() (even - это четный), которая параметром
//принимает целое число и проверяет: четное оно или нет. Если четное - пусть
//функция возвращает true, если нечетное — false.
function isEven(a) {
    //a = prompt('Введите число');
    if (a % 2 == 0) return true;
    else return false;
    
}
//isEven();

//6. Напишите ф-цию, в которую передается массив с целыми числами.
//Верните новый массив, где останутся лежать только четные из этих чисел.
//Для этого используйте вспомогательную функцию isEven из предыдущей
//задачи.
/*let arr = four();
function six () {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(isEven(arr[i]) == true){
            arr2.push(arr[i])
        }
    }
console.log(arr2);
return;
}*/
//six();

/*7.Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
кроме пробела, то пирамида должна быть нарисована этим символом,*/

function pyramid () {
let h = prompt('Введите высоту пирамиды');
for(let i = 1; i <= h; i++) {
    let line = "";
    for(let g = 0; g < i; g++) {
        if(!isNaN(h))
            line += i;
        else line += "*";
    }
    console.log(line);
   
    }
}
//pyramid()

/*8. Напишите ф-цию, которая рисует равнобедренный треугольник из
звездочек:
Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
цию, но которая выведет перевернутый треугольник.*/
/*let h = 8; 
function triangle (h) {
    let line = '';
    
    for (let g = 0; g < h; g++){
            for(let i = 1; i < h - g; i++) 
                line += ' ';
             
            for(let i = 0; i < (2 * g + 1); i++) 
               line += '*'; 
            
           console.log(line);
        line = '';     
        }
    }
 triangle(h);*/

 let h = 6; 
function antiTriangle (h) {
    let line = '';
    
    for (let g = h; g > 0; g--){
            for(let i = 0; i < h - g; i++) 
                line += ' ';
                
            for(let i = 2 * g - 1; i > 0 ; i--) 
               line += '*'; 
            
           console.log(line);
            line = '';     
        }
    }
 //antiTriangle(h);
 
 

//9. Напишите ф-цию, которая возвращает массив заполненный числами
//Фибоначи от 0 до 1000.
function fibonachi() {
    let arr3 = [0, 1];
    for (let i = 2; i < 999; i++) {
       arr3.push(arr3[i] = arr3[i-1] + arr3[i-2]);
    }
    return console.log(arr3);
}
//fibonachi();

/*10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
опять сложите его цифры. И так, пока сумма не станет однозначным числом
(9 и менее). Исп. Рекурсию.*/
//let g = prompt();
function ten (g) {
let sum = 0;
for (let i = 0; i < g.length; i++) {
    sum += +g[i];
}
if(sum > 9) {
    sum = String(sum);
    ten(sum);}
else console.log(sum);
}
//ten(g);

//11. Дан массив с числами (передается параметром). Выведите
//последовательно его элементы, используя рекурсию и не используя цикл.
let arr11= [3, 2, 4, 8, 9, 10, 1989];
let i = 0;
function eleven() {
    console.log(arr11[i]);
      i++;
    while (i < arr11.length) {
       eleven(arr11);
    }
  
}

//eleven(arr11);

/*12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
группы студента и выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************

Размер рамки должен определятся автоматически по самой длинной строке.
Рамку вывести в консоль.*/
/*function yourPerson () {
    let name = prompt('Введите ваше имя');
    let surname = prompt('Введите фамилию');
    let patronymic = prompt('Введите ваше отчество');
    let group = prompt('Ваш номер группы');

}*/
function repeatStr (n, s) {
    let myString = '';
    s = String(s);
    if( n == 0) return console.log('');
    for(i = 1; i <= n; i++) {
        myString += s;
    }
   
          
    return console.log(myString);
  }
 
  function fakeBin(x){
  let str = '';
  x = String(x);
    for(i = 0; i < x.length; i++) {
      if (x[i] == '5') {
         x[i] = '1';
        str += x[i];
      }
       
      else {
        x[i] = '0';
        str += x[i];
    }
    return str;
  
  }
}
  

function powersOfTwo(n){
        let array = [];
        for (i = 0; i <= n; i++) {
          
          array.push(2 ** i)
      
        }
       
    console.log(array)
  }
  
  //Напишите функцию, которая переворачивает число, например: 5675 => 5765.
  function reverseNum(str) {

    return str.split("").reverse().join("");
  
  }
  
 //console.log(reverseNum("5670"))

 function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }
  //console.log(checkPalindrom('Лидер бредил'))
  //Напишите функцию alphabetOrder(str), которая возвращает переданную строку с буквами в алфавитном порядке. Пример строки: 'alphabetical'. Ожидаемый результат: /////'aaabcehillpt'. Предположим, что символы пунктуации и цифры не включены в переданную строку.


  function alphabet(str) {
  
    return str.split('').sort().join('');
      
    }

    //console.log(alphabet("привет медвед"))

    //Напишите функцию, которая возвращает элементы массива, которые больше указанного числа. Нельзя использовать циклы for или while.
    function big (value) {
        let arr = [1, 3, 8, 10];
        return arr.filter(value);
    }
    //console.log(big(4));
    //Перепишите код, заменив цикл for на метод map:

let arr = ["Есть", "жизнь", "на", "Марсе"];

const arrLength = [];
var nameLengths = arr.map(function(arr) {
    return arrLength.push(arr.length);
  });
 


//console.log(arrLength); // 4,5,2,5

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
console.log(domenFilter("https://learn.javascript.ru/regexp-greedy-and-lazy") );