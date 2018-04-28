// document.querySelector('#out').innerHTML = '<p>Пример</p>';

// var p = document.createElement('p');
// p.innerHTML = 'Пример элемента';
// p.classList.add('main', 'green');

// // document.body.appendChild(p);

// var myDiv = document.querySelector('#out');
// document.body.insertBefore(p, myDiv);

// console.log(p);

//DOM part 2

// var div4 = document.getElementById('four4'); // 1 элемент
// // var p = div4.getElementsByTagName('p');
// // var div = document.getElementsByTagName('div'); //всегда массив
// // console.log(div);
// var p = document.getElementsByClassName('test');
// console.log(p);
// div[2].style.background = 'yellow';
//-------------------------------------------------
// var div = document.querySelector('div'); //CSS selector - first single element
// // var p = document.querySelector('div').querySelector('p');
// var p = document.querySelector('div p');
// var p4 = document.querySelector('#four4 p');
// console.log(div);
// console.log(p);
//-------------------------------------------------
// var div2 = document.querySelectorAll('div'); //collection div
// console.log(div2);
// var div2 = document.querySelectorAll('div p');
// four4.style.background = 'red';
//--------------------------------------------------

var div = document.querySelector('div');
var child = div.childNodes; //все узлы (+текстовые, +переносы строки, +пробелы)
// console.log(child);
// console.log(div.firstChild);
// console.log(div.lastChild);
child = div.children;
console.log(child);

var hyper = document.querySelector('a');
console.log(hyper.parentElement);
console.log(hyper.parentElement.parentElement);
console.log(hyper.parentElement.nextElementSibling);
console.log(hyper.parentElement.prevElementSibling);