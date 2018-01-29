//Необходимо вывести на экран числа от 1 до 5
let i = 1;
while(i <= 5){
	document.write(i + ' ');
	i++;
}

let i = 0;
do {
   i++;
   document.write(i + ' ');
} while (i < 5);

for(let i = 1; i <= 5; i++){
	document.write(i + ' ');
}


//Необходимо вывести на экран числа от 5 до 1
let i = 5;
while(i >= 1){
	document.write(i + ' ');
	i -= 1;
}

let i = 6;
do {
   i -= 1;
   document.write(i + ' ');
} while (i > 1);

for(let i = 5; i >= 1; i--){
	document.write(i + ' ');
}


//Необходимо вывести на экран таблицу умножения на 3
let n = 1;
while(n <= 10){
	let result = 3 * n;
	document.write(3 + '*' + n + '=' + result + '<br>');
	n++;
}

let n = 0;
do{	
	n++;
	let result = 3 * n;
	document.write(3 + '*' + n + '=' + result + '<br>');
}while(n < 10);

for(let n = 1; n <= 10; n++){
	let result = 3 * n;
	document.write(3 + '*' + n + '=' + result + '<br>');
}


/*Напишите программу, где пользователь вводит любое целое положительное число.​ А
программа суммирует все числа от 1 до введенного пользователем числа*/
let sum = 0;
let number = prompt('введите любое целое положительное число', '');
let i = 0;
while(i <= number){
	sum += i;
	i++;
}
alert(sum);

let sum = 0;
let number = prompt('введите любое целое положительное число', '');
let i = 0;
do{	
	sum += i;
	i++;	
}while(i <= number);
alert(sum);

let sum = 0;
let number = prompt('введите любое целое положительное число', '');
for(let i = 0; i <= number; i++){
	sum += i;
}
alert(sum);