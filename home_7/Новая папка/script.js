document.addEventListener("DOMContentLoaded", function() {	
	let elem = document.getElementById("cube");
	elem.style.bottom = "0";
	elem.style.left = screen.availWidth / 2 - 75 + "px";
	document.addEventListener('mousemove', function(e){
		elem.style.zIndex = 1000;
		function moveAt(e) {  			
			elem.style.left = e.pageX - elem.offsetWidth/2 + 'px';		  	  	
		}
		document.addEventListener('mousemove', function(e){
			moveAt(e);
		}, false);
	}, false);
	let ball = document.getElementsByClassName("ball");	
	ball[0].style.left = 50 + "px";	
	ball[0].style.top = "0";	
	(function moveBall(){
		let i = 0;	
		let stepTop = 2;
		let start = setInterval (function (){
			if(ball[0].style.top == screen.availHeight + 'px'){	
				ball[0].style.top = 0;
			}else{
				ball[0].style.top = parseInt(ball[0].style.top.slice(0, -2)) + stepTop + 'px'				
			}
			console.log(elem.getBoundingClientRect().left);		
		},1);
	}());	
});

