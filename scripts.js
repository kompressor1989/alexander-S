//1
/*Выведите числа от 1 до 50 и от 35 до 8.*/

/*let result = '';
let i = 0;

do {
    i = i + 1;
    result = result + i + ' ';
} while (i < 50);


let n = 36;
while (n > 8) {
    n--;
    result = result + n + ' ';
}
console.log(result)



//2
/*Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку.*/
/*let n1 = 90;
while (n1 > 11) {
    n1--;
    console.log(n1 + "<br/>");
}


//3
/* С помощью цикла найдите сумму чисел от 0 до 100..*/
/*let n2 = 0,
    summ = 0;
while (n2 < 100) {
    n2++;
    summ = summ + n2;
}

console.log(summ);




//4
/*Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3).*/
/*let sum = 0;
for (i = 1; i <= 5; i++) {
    sum += i;
    console.log(`Суммa ${i} = ${sum}`);
}



//5
/*Выведите чётные числа от 8 до 56. Решить задание через while и for.*/
/*let n3 = 8;
while (n3 <= 56) {
    if (n3 % 2 == 0) {
        console.log(n3);
    }
    n3++;
}

for (n4 = 8; n4 <= 56; n4++) {
    if (n4 % 2 == 0){
       console.log(n4); 
    }
    
}


//6
/*Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
...
3*1=3
3*2=6
3*3=9
3*4=12
...
Для решения задачи используйте вложенные циклы..*/
/*let math = 0;
for (n5 = 2; n5 <= 10; n5++) {
    for (g = 1; g <= n5; g++){
        math = n5 * g;
        console.log(`${n5} * ${g} = ${math}`)
    }
}


//7

/*Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num..*/
 /*let n6 = 1000,
    n7 = 0;
    
while (n6 >= 50) {
    n6 = n6 / 2  
    n7++;

}
 
    console.log(`Это число: ${n6} интераций: ${n7}`);
  




//8
/*Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение.*/

// работает только с 1 числом 
/*let sumObject = '';
    
    
for(n8 = 0; true; n8++){
    let number = prompt ('Ведите число');
    if (number == 0 || number == '') {
        break;
    }

    else {
        sumObject += parseInt(number);
       
    }
}

console.log(`Общая сумма: ${sumObject}, Среднее арифметическое: ${sumObject/n8}`);



//9
/*Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.*/







//10
/* Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.*/
/*let result = '';
let n = 51;
while (n > 1) {
    n--;
    result = result + n + ' ';
}
console.log(result);*/

//Дана строка из 3-цифр.  Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий. Решить задачу двумя способами//

//let str = '123',
    
        // Напишите программу, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.//

        /*let n = 10,
            summ = 0;
        for (let i= 1; i <= n; i ++) {
            summ += i;
        }

        console.log (summ)*/

        //Написать с помощью цикла while «переворот» числа. Другими словами, нужно создать новое число, у которого цифры шли бы в обратном порядке (например: 472 -> 274).

        /*let num = 4564,
            numReverse = '';
            num = String(num);
            n = num.length - 1;
        while (n >= 0) {
            numReverse += num[n];
            n--;
        }

        console.log(numReverse)*/

        //Найти самую большую цифру в целом числе.

        /*let num = 4567,
            mux = 0;
            num = String(num);
            i = num.length - 1;
            for (let i = 0; i , num.length; i++) {
                if (num[i])
            }*/

            /*let num = 9587;
            num = String(num);
            let sum = 0;
            for (let i = 0; i < num.length; i++) {
                sum = +num[0] + +num[num.length-1];
            }
            console.log(sum)*/
            //Посчитайте и выведете кол-во встречающихся чисел в строке “В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года[29]. Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.”

            /*let a = 'В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года[29]. Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.'
            let count = 0;
            for (let i = 0; i < a.length; i++) {
                if (!isNaN(a[i]) && a[i] != ' ') {
                    count +=1;
                }
                else continue;
            }

            console.log(count);*/

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.     
  /*let arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) console.log(arr[i]);  */     
        

  /*Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
быть положительными и отрицательными. Выведите на экран только отрицательные
числа, которые больше -10, но меньше -3.*/
/*let arR = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arR.length; i++) {
    if (arR[i] < -3 && arR[i] > -10) {
        console.log(arR[i]);
    }
    else continue;
}*/

/*Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите.*/
 let arr1 = [];
 let result = 0;
 let i = 23;
 for(let i = 23; i <= 57; i++) {
     arr1[i] = i;
    console.log(arr1[i]);
 }

 

 while(i <= 57) {
     arr1[i] = i;
     console.log(arr1[i]);
     i++;
 };

 for(let i = 23; i <= 57; i++) {
   result += +arr1[i];
 }
console.log(`Результат сложения элементов массива: ${result}`);

//Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
//5.

let arr2 =  ["10", "20", "30", "50", "235", "3000"];
for (let i = 0; i < arr2.length; i++) {
    let num = String(arr2[i]);
    let char = num[0];
   
    if (char == 1 || char == 2 || char == 5) {
     console.log(num);
    }
}

//Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
//дни недели, а выходные дни выведите жирным.

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
for(let i = 0; i < week.length; i++) {
    //if (i > 4)
    if (week[i] == "Суббота" || week[i] == "Воскресенье") {
        document.write('<b>' + week[i] + '</b>' + ' ');
    }

    else console.log(week[i]);
}

//Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
//и получите последний элемент массива, используя свойство length.
let arr3 =  ["10", "20", "30", "50", "235", "3000"];
arr3.push("1989");

console.log(arr3[arr3.length - 1]);

//Запросите у пользователя по очереди числовые значения при помощи prompt и
//сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
//значение. Выведите получившийся массив на экран. Выполните сортировку чисел
//массива, и выведите его на экран.
let arr4 = [];
for(let i = 0; i < 20; i++) {
    arr4[i] = prompt('Введите число:');
    if (arr4[i] == ''){
        arr4.pop();
        break;  
    }
   
}

console.log(arr4)

//Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
//используя цикл while и метод reverse.

let arr5 = [12, false, "Текст", 4, 2, -5, 0];
//arr5.reverse();
let k = 0;
while(k < arr5.length){
    arr5.reverse();
    k++
}

console.log(arr5);

//Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
//целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

let arr6 = [5, 9, 21, , , 9, 78, , , , 6];
let count = 0;
for (let i = 0; i < arr6.length; i++) {
    if( arr6[i] ==  undefined)
    count++;
}

console.log(count)

/*Найдите сумму элементов массива между двумя нулями (первым и последним нулями
    в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
    более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
    [1,8,0,13,76,8,7,0,22,0,2,3,2].*/

    let arr7 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
        arr8 = [1,8,0,13,76,8,7,0,22,0,2,3,2],
        summA = 0;
    for (let i = 0; i < arr7.length; i++) {
        if ( arr7[i] == 0) {
            for( let j = i + 1; j < arr7.length; j++) {
                summA += arr7[j];
                
                if( arr7[j] == 0) {
                    console.log(`Сумма между двух нулей в массиве: ${summA}`);
                    break;
                }
                else if ( arr7[j] != 0) {
                    console.log("0");
                    
                }
            }
        break;
        }

    }


    //11 не решил

   

