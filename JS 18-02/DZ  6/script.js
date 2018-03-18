// Написать аналог формы входа, с логином и паролем (логин
// емейл), если пользователь вводит данные неправильно, то при
// нажатии кнопки логин, вывести уведомление об ошибке.

function prov(obj) {
  var email=obj.mail.value;
  var par=obj.pas.value;
  var email_reg=/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/ig;
  var par_reg=/[0-9a-z]+/i;
  var prov=email_reg.test(email);
  var prov1=par_reg.test(par);
  if (prov==true &&  prov1==true) {
        alert("Вы успешно зашли на сайт!");
  }
  else {
        alert("Введенные данные некорректны!");
  }
}