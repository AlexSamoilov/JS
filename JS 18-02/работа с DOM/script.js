// document.querySelector('#out').innerHTML = '<p>Пример</p>';

var p = document.createElement('p');
p.innerHTML = 'Пример элемента';
p.classList.add('main', 'green');

// document.body.appendChild(p);

var myDiv = document.querySelector('#out');
document.body.insertBefore(p, myDiv);

console.log(p);