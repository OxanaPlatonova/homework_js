document.addEventListener("DOMContentLoaded", function() {
	var elem = document.getElementById("cube");
	elem.style.bottom = "0";
	elem.style.left = screen.availWidth / 2 - 75 + "px";
	document.addEventListener('mousemove', function(e){
		elem.style.zIndex = 1000;
		function moveAt(e) {  			
			elem.style.left = e.pageX - elem.offsetWidth/2 + 'px';		  	  	
		}
		document.onmousemove = function(e) {
		moveAt(e);
		}
	}, false);
	var ball = document.getElementsByClassName("ball");	
	ball[0].style.left = "0";
	ball[1].style.left = screen.availWidth/2 - 50 + 'px';
	ball[2].style.left = screen.availWidth/4 - 50 + 'px';
	ball[3].style.left = screen.availWidth - 50 + 'px';
	ball[4].style.left = screen.availWidth/5 - 50 + 'px';
	ball[5].style.left = screen.availWidth/3 - 50 + 'px';
	var i = 0;
	ball[0].style.top = "0";
	(function moveBall(){	
		let stepTop = 1;	
		let height = Math.max(screen.availHeight || 0);
		let start = setInterval (function (){
			if(ball[i].style.top == screen.availHeight + 'px'){
				ball[i].style.top = "0";
			}else{
				ball[i].style.top = parseInt(ball[i].style.top.slice(0, -2)) + stepTop + 'px'
			}	
		},1);
	}());	
});

