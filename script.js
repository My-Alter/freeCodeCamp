// однострочный комментарий
/*
многострочный комментарий
*/

// объявление переменной
var myName;

// Сохранение значений с помощью оператора присваивания
var a;
a = 7;

// Присвоение значения одной переменной другой
var a;
a = 7;
var b;
b = a;

// Инициализация переменных с помощью оператора присваивания
var a = 9;

// Объявление строковых переменных
var myFirstName = "mihey";
var myLastName = "bobryk";

// Понятие неинициализированных переменных
var a;
a = 5;
var b;
b = 10;
var c;
c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// Чувствительность к регистру названия переменных
var stublyCapVar;
var properCamelCase;
var titleCaseOver;

stublyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Объявите переменную, доступную только для чтения, с ключевым словом const
/*  Разработчики обычно используют идентификаторы переменных в верхнем регистре для неизменяемых значений и в нижнем регистре или в верблюжьем регистре для изменяемых значений (объектов и массивов). Вы узнаете больше об объектах, массивах, а также неизменяемых и изменяемых значениях в последующих заданиях. Также в последующих заданиях вы увидите примеры идентификаторов переменных в верхнем, нижнем и верблюжьем регистрах.*/
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

// Сложное присвоение с дополненным сложением
let a = 3;
let b = 17;
let c = 12;

a += 12; // аналог a = a + 12
b += 9; // аналог b = 9 + b
c += 7; // аналог c = c + 7

// Составное присваивание с дополненным вычитанием
let a = 11;
let b = 9;
let c = 3;

a -= 6; // аналог a = a - 6;
b -= -(-15); // аналог b = b - 15;
c -= 1; // аналог c = c - 1;

// Составное присваивание с расширенным умножением
let a = 5;
let b = 12;
let c = 4.6;

a *= 5; // аналог a = a * 5;
b *= 3; // аналог b = 3 * b;
c *= 10; // аналог c = c * 10;

// Составное присваивание с дополненным делением
let a = 48;
let b = 108;
let c = 33;

a /= 12; // аналог a = a / 12;
b /= 4; // аналог b = b / 4;
c /= 11; // аналог c = c / 11;

// Экранирование кавычек в строках
const mySTr = 'I am a "double quoted" string inside "double quotes".';
console.log(mySTr);

// Заключение строк в одинарные кавычки
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
/*
замена внешних двойных кавычек на однарные, позволяет избавиться от экранирующего обратного слеша (\)
*/
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape-последовательности в строках
/* Кавычки — не единственные символы, которые можно экранировать внутри строки. Escape-последовательности позволяют использовать символы, которые иначе вы не сможете использовать в строке.
 */
/*
Назначьте следующие три строки текста одной переменной myStr, используя escape-последовательности.
*/
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
/*
FirstLine
    \SecondLine
ThirdLine
*/

// Объединение строк с помощью оператора "+"
// Примечание. Следите за пробелами. Конкатенация не добавляет пробелов между объединенными строками, поэтому вам придется добавлять их самостоятельно.
const myStr = "This is the start. " + "This is the end.";

// Объединение строк с помощью оператора "+="
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Создание строк с помощью переменных
const myName = "Mihey";
const myStr = "My name is " + myName + "and I am well!";

// Добавление строк в качестве переменных к строкам

const someAdjective = "very hard";
let myStr = "Learning to code is ";
myStr += someAdjective;

// Поиск длины строки
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName;
console.log(lastNameLength.length);
console.log(lastName.length);