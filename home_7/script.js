document.addEventListener("DOMContentLoaded", function() {	
	var ball = document.getElementsByClassName("ball");	
	ball[0].style.left = 50 + "px";	
	ball[1].style.left = screen.availWidth/2 - 50 + 'px';
	ball[2].style.left = screen.availWidth/4 - 50 + 'px';
	ball[3].style.left = screen.availWidth - 100 + 'px';
	ball[4].style.left = screen.availWidth/5 - 50 + 'px';
	ball[5].style.left = screen.availWidth/3 - 50 + 'px';	
	ball[0].style.top = "0";
	ball[1].style.top = "0";
	ball[2].style.top = "0";
	ball[3].style.top = "0";
	ball[4].style.top = "0";
	ball[5].style.top = "0";
	(function moveBall(){
		let i = 0;	
		let stepTop = 1;
		let start = setInterval (function (){
			if(ball[i].style.top == screen.availHeight + 'px'){				
				i++;
				ball[i-1].style.top = "0";

			}
			if(i == 6){
				i = 0;
			}else{
				ball[i].style.top = parseInt(ball[i].style.top.slice(0, -2)) + stepTop + 'px'
			}	
		},1);
	}());
	var elem = document.getElementById("cube");
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
});

