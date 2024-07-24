let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`Температура: ${celsius}°C = ${fahrenheit}°F`);


let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`У місяці ${daysInMonth} днів, що становить ${hoursInMonth} годин і ${minutesInMonth} хвилин.`);


let health = 100;
let energy = 100;
health -= 20;
energy -= 30; 
console.log(`Рівень здоров'я: ${health}, рівень енергії: ${energy}`);


let purchaseAmount = 1500;
let discount = 0.10;
let discountedAmount = purchaseAmount * (1 - discount);
console.log(`Сума після знижки: ${discountedAmount}`);


let floatNumber = 5.789;
let roundedDown = Math.floor(floatNumber);
console.log(`Округлене до меншого: ${roundedDown}`);


let floatString = "123.45";
let floatNumberParsed = parseFloat(floatString);
console.log(`Перетворене число: ${floatNumberParsed}`);


let intString = "123";
let intNumberParsed = parseInt(intString, 10);
console.log(`Перетворене ціле число: ${intNumberParsed}`);


let number = 144;
let squareRoot = Math.sqrt(number);
console.log(`Квадратний корінь: ${squareRoot}`);


let integer = 42;
let integerString = integer.toString();
let strNumber = "67";
let parsedInteger = parseInt(strNumber, 10);
console.log(`Перетворене число з рядка: ${parsedInteger}`);
console.log(`Перетворене число у рядок: ${integerString}`);


