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

// Найти длину строки
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

// Используйте скобочные обозначения, чтобы найти первый символ в строке
// Скобочная нотация — это способ получить символ по определенному индексу в строке. Большинство современных языков программирования, не начинают счет с 1. Они начинаются с 0. Это называется индексацией с нуля.
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // выводит первый знак (буква "L") в переменной (lastName)

// Понятие неизменяемости строк
/*
В JavaScript значения String неизменяемы, что означает, что их нельзя изменить после создания.
Например, следующий код выдаст ошибку, поскольку букву "Б" в строке "Бoб" нельзя заменить на букву "Р":

let myStr = "Боб";
myStr[0] = "Р";

Обратите внимание, что это не означает, что myStr нельзя переназначить. Единственный способ изменить myStr — присвоить ему новое значение, например:

let myStr = "Боб";
myStr = "Роб";
*/
let myStr = "Jello World";
myStr[0] = "H"; // при таком изменениии, значение выдает ошибку
myStr = "Hello World"; // при полном изменении переменной, происходит изменение значения

// Используйте скобочные обозначения, чтобы найти N-й символ в строке
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; // показывает третий символ ("v") в строке ("Lovelace")

// Используйте скобочные обозначения, чтобы найти последний символ в строке
/*
Чтобы получить последнюю букву строки, нужно вычесть единицу из длины строки.
Например, если const firstName = «Ада», можно получить значение последней буквы строки, используя firstName[firstName.length - 1].

Пример:

const firstName = "Ада";
const LastLetter = FirstName[firstName.length - 1]; // LastLetter будет иметь значение строки a.
*/
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];

// Используйте обозначение скобок, чтобы найти символ от N-го до последнего в строке
/*
Например, вы можете получить значение предпредпоследней буквы строки const firstName = "Augusta", используя firstName[firstName.length - 3]

Пример:

const firstName = "Augusta";
const ThirdToLastLetter = FirstName[firstName.length - 3]; // ThirdToLastLetter будет иметь значение строки "s".
*/
const lastName = "Lovelace";

const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // покажет предпоследний символ в строке

// Заготовки слов
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks =
	myNoun + " " + " " + myAdjective + " " + myVerb + " " + myAdverb;
