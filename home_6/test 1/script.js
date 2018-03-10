var elem = document.getElementById("elem");
elem.style.top = '0';
elem.style.left = '0';
var count = 1;
var life = 10;
function move(stepLeft, stepTop){
	var changeLeft = stepLeft;
	var changeTop = stepTop;
	var height = Math.max(screen.availHeight || 0);
	var width = Math.max(screen.availWidth || 0);

	var start = setInterval (function (){
		elem.style.top = parseInt(elem.style.top.slice(0, -2)) + changeTop + 'px'
		elem.style.left = parseInt(elem.style.left.slice(0, -2)) + changeLeft + 'px'
		if (parseInt(elem.style.top.slice(0, -2)) > height - 200){
			changeTop = -stepTop;
		}
		if (parseInt(elem.style.top.slice(0, -2)) < 0){
			changeTop = stepTop;
		}
		if (parseInt(elem.style.left.slice(0, -2)) > width - 201){
			changeLeft = -stepLeft;
		}
		if (parseInt(elem.style.left.slice(0, -2)) < 0){
			changeLeft = stepLeft;
		}
	},1);
}

move(count, count);


var life = document.querySelector("div.level > div:nth-child(2) > span").innerHTML = "5";
elem.addEventListener('click', function (){
	count += 0.5;
	var level = (count - 0.5) * 2;
	document.querySelector("div.level > div:first-child > span").innerHTML = level;
	move(count, count);	
	if(level == 5){
		clearInterval('start');
		alert("С победой!")
	}
})

