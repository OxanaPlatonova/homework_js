// Вывести ряд фибоначчи
var n = 20;
var fibonacci = [0, 1];
for (i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
alert(fibonacci.slice(0,n));


// Вывести ряд фибоначчи
function fibonacci (n){
	if(n < 3){
		return 1;
	}else {
		return fibonacci(n-1) + fibonacci(n-2);
	}
}
var fib = 0 + ', ';
for (n = 1; n <= 16; n++){
	fib += fibonacci(n) + ', ';
}
alert(fib);

  
// Сделать картинку, которая перемещается по экрану
var elem = document.getElementById("elem");
var step = 0;
var id = setInterval(frame, 10);
function frame(){
	if (step >= 80){
		clearInterval(id);

	} else{
		step++;
		elem.style.left = step + '%';
		elem.style.top = step + '%';
	}
}






