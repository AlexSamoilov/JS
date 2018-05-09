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
