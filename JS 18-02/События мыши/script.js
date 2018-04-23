var block = document.getElementById('one');
//клик мышкой
block.onclick = function() {
  this.style.background = 'green';
}
//двойной клик мышкой
block.ondblclick = function() {
  this.style.background = 'red';
}
block.oncontextmenu = function() {
  this.style.background = 'black';
  return false; //запрет вызова контекстного (выпадающего) меню
}
//наведение - мышь входит на элемент
block.onmouseenter = function() {
  console.log('in!!!');
  this.style.background = 'gold';
}
//мышь уходит с элемента
block.onmouseleave = function() {
  this.style.background = 'orange';
}
//движение мыши внутри блока
var a = 0;
block.onmousemove = function() {
  a++;
  this.style.width = 100 + a + 'px';
}
//нажимаем и держим любую кнопку мыши
block.onmousedown = function() {
  this.style.background = 'cyan';
}
//определяем - какая кнопка мыши нажата
block.onmousedown = function(event) {
  this.style.background = 'cyan';
  console.log('button:' + event.button);
  console.log('which:' + event.which);
}
//отпускание кнопки внутри блока
block.onmouseup = function() {
  this.style.background = 'pink';
}

//запрет вызова контекстного меню на всей странице
document.oncontextmenu = function() {
  return false;
}
