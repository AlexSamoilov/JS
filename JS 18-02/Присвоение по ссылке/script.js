let a = {
	one : 'Hello',
	name : 23
}
// console.log(a);

// let b = a;
// b.five = 5;
// console.log(a);
// console.log(b);

//получаем один обьект с разными именами - присвоение по ссылке
// a и b это ссылки на какойто исходный обьект

//как скопировать обьект b, чтобы он был клоном/копией обьекта а
//но не был с ним связан?
//для этого используем такой синтаксис:

let b = {};
for (let key in a) {
	b[key] = a[key];
}
b.five = 5;
console.log(a);
console.log(b);

//простой конструктор

class Test {
	constructor (a){
		this.c = a;
	}
}

let myObj = new Test (5);
myObj.d = 77;
console.log(myObj);

let myObj2 = new Test (6);
console.log(myObj2);

//* Помнить - При присвоении обьекта, не создается новый обьект, а ссылаемся на старый.