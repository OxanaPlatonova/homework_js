document.addEventListener('DOMContentLoaded', function(){  
  class elemCatch{
    constructor(selectorCatch){
      this.elemCatch = document.getElementById(selectorCatch);
      this.elemCatch.style.left = 0 + 'px';
      this.elemCatch.style.zIndex = "100";
      var platformHeight = this.elemCatch.clientHeight;
      this.elemCatch.style.top = window.innerHeight - platformHeight + 'px';
    }
    moveCatch(){
      document.onmousemove = (e) =>{
        this.elemCatch.style.left = e.clientX + 'px';
      }
    }     
  }
  class elemFall extends elemCatch{
    constructor(selectorCatch, selectorFall, selectorLevel){
      super(selectorCatch);
      this.elemFall = document.getElementsByClassName(selectorFall);
      this.elemFall[0].style.top = 0 + 'px';
      this.elemFall[1].style.top = 0 + 'px';
      this.elemFall[2].style.top = 0 + 'px';
      this.elemFall[3].style.top = 0 + 'px';
      this.elemFall[4].style.top = 0 + 'px';
      this.elemFall[5].style.top = 0 + 'px';
      this.elemFall[0].style.left = 0 + 'px';   
      this.elemFall[1].style.left = screen.availWidth/2 - 50 + 'px';
      this.elemFall[2].style.left = screen.availWidth/4 - 50 + 'px';
      this.elemFall[3].style.left = screen.availWidth - 100 + 'px';
      this.elemFall[4].style.left = screen.availWidth/5 - 50 + 'px';
      this.elemFall[5].style.left = screen.availWidth/3 - 50 + 'px';
      this.selectorLevel = document.querySelector(selectorLevel);
    }
    moveFall(){
      var step = 1;
      var score = 1;
      var i = 0;
      setInterval(() => {
        var elemFallTop = parseInt(this.elemFall[i].style.top.slice(0,-2)) + step;
        var elemFallLeft = parseInt(this.elemFall[i].style.left.slice(0,-2));        
        this.elemFall[i].style.top = elemFallTop + 'px';
        if(elemFallTop === window.innerHeight) {
          i++;
          this.elemFall[i-1].style.top = 0;
        }
        if(i == 6){
        i = 0;
        }
        var topElemCatch = parseInt(this.elemCatch.style.top.slice(0,-2));
        var leftElemCatch = parseInt(this.elemCatch.style.left.slice(0,-2));
        if(elemFallTop === topElemCatch && elemFallLeft === leftElemCatch) { 
          this.selectorLevel.innerHTML = score;  
          score++;            
        }
      })     
    }
  }  
  var platform = new elemCatch('platform');
  platform.moveCatch();
  var ball = new elemFall('platform', 'ball', 'div.level>span');
  ball.moveFall();
});
