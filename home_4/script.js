// 1
var day = 23;
if(day <= 10){
	var decade = 'Первая декада месяца';
};
if(day >= 11 && day <= 20){
	var decade = 'Вторая декада месяца';
};
if(day >= 21 && day <= 31){
	var decade = 'Третья декада месяца';
};
alert(decade);

// 2
var month = 6;
if(month <= 2 && month == 12){
	var timeYear = 'Зима';
};
if(month >= 3 && month <= 5){
	var timeYear = 'Весна';
};
if(month >= 6 && month <= 8){
	var timeYear = 'Лето';
};
if(month >= 9 && month <= 11){
	var timeYear = 'Осень';
};

alert(timeYear);

// 3
var str = 'abcde';
switch(str[0]){
	case 'a':
	alert('да');
	break;
	default:
	alert('нет');
	break;
}

// 4
str = '12345';
switch(str[0]){
	case '1':	
	case '2':
	case '3':
	alert('да');
	break;
	default:
	alert('нет');
	break;
}

// 5
var str = "796";
var sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
alert(sum);

//6
var str = "796796";
var sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
var sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
if(sum1 == sum2){
	alert('Да');
}else{
	alert('Нет');
}


//найти факториал числа с помощью рекурсивной функции
function factorial(n){
	if(n == 0 || n == 1)
		return 1;
	else return(n * factorial(n-1));
}
alert(factorial(9));





