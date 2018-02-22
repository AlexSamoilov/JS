//Написать плагин, который находит число в массиве.
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let number;
number = prompt('Введите число которое необходимо найти в массиве', '');
array = array.filter(function(elem){
  return elem == number
});
if (array == number) {
  alert( "Ваше число " + array + " есть в массиве");
} else {
  alert( "Вашего числа нет в массиве");
}

// Написать плагин который упорядочивает массив 1,6,3,2,5,4 (любым методом сортировки)

var numbers = [1, 6, 3, 2, 5, 4];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// Дан массив 1,2,3,”строка”,5,6, найти строку в массиве и вывести на экран.

var array = [1, 2, 3, 'строка', 5, 6];
array = array.filter(function(elem){
  return elem >= 'string' 
});
alert(array);

