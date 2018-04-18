let slider = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];

let i = 0;

document.addEventListener('DOMContentLoaded', function () {
      
      let leftButton = document.querySelector('#leftButton');
      let rightButton = document.querySelector('#rightButton');
      let img = document.querySelector('#slider-img');
      
      leftButton.addEventListener('click',function(){
           console.log ("leftButton click");
           i--;
           if (i == 0 ) {
              i=slider.length-1;
            }
           
           img.src=slider[i];
      })

      rightButton.addEventListener('click',function(){
          
           i++; console.log ("rightButton click",i);
            if (i == slider.length-1) {
              i=0;
            }
           img.src=slider[i];
      })

      // let img = document.querySelector('#slider-img');

      // img.src=slider[i];






    
     });