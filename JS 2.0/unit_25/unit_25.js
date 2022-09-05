const URL = "http://getpost.itgid.info/index2.php";
const AUTH = "DdC33D7d2C2a7";

function getQueryString(obj) {
  let out = '';
  for (let key in obj) {
    out += '&' + key + '=' + obj[key];
  }
  return out;
}

function AJAX(method, params, callback, block) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText, block);
    }
  };
  xhttp.open(method, URL + '?auth=' + AUTH + getQueryString(params), true);
  xhttp.send();
}

function toConsole(data, block) {
  console.log(data);
  document.querySelector(block).textContent = (data)
}

// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

function one() {
  let p = {
    action: 1
  }
  AJAX('GET', p, toConsole, '.out-1');
}

function t1() {
  one();
}
document.querySelector('.b-1').onclick = t1;

//Без оптимизации
// function t1() {
//   let xhttp = new XMLHttpRequest();
//   let a = 0;
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       myFunction(this.responseText)
//     }
//   }

//   xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1", true);
//   xhttp.send();

//   function myFunction(data) {
//     a = data;
//     console.log(data);
//   }
// }

// document.querySelector('.b-1').onclick = t1;

// ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function two() {
  let p = {
    action: 2,
    name: 'Alex'
  }
  AJAX('GET', p, toConsole, '.out-2');
}

function t2() {
  two();
}
document.querySelector('.b-2').onclick = t2;

// ваше событие здесь!!!


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function three() {
  let p = {
    action: 3,
    num1: 2,
    num2: 3
  }
  AJAX('GET', p, toConsole, '.out-3');
}

function t3() {
  three();
}
document.querySelector('.b-3').onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function four() {
  let p = {
    action: 4,
    num1: 2,
    num2: 7
  }
  AJAX('GET', p, toConsole, '.out-4');
}

function t4() {
  four();
}
document.querySelector('.b-4').onclick = t4;

// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function five() {
  let p = {
    action: 5,
    // num1: 2,
    // num2: 7
  }
  AJAX('GET', p, toConsole, '.out-5');
}

function t5() {
  five();
}
document.querySelector('.b-5').onclick = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function six() {
  let p = {
    action: 6,
    num1: 10,
    num2: 7
  }
  AJAX('GET', p, toConsole, '.out-6');
}

function t6() {
  six();
}

document.querySelector('.b-6').onclick = t6;

// ваше событие здесь!!!


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

// function t7() {
//   let xhttp = new XMLHttpRequest();
//   let a = 0;
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       myFunction(this.responseText)
//     }
//   }

//   xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=7", true);
//   xhttp.send();

//   function myFunction(data) {
//     a = data;
//     console.log(data);
//     document.querySelector('.out-7').innerHTML = '<img src="' + a + '">';
//   }
// }

function seven() {
  let p = {
    action: 7,
  }
  AJAX('GET', p, toConsole, '.out-7');
}

function t7() {
  seven();
}

document.querySelector('.b-7').onclick = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function eight() {
  let p = {
    action: 8,
    year: 1993
  }

  AJAX('GET', p, toConsole, '.out-8');
}

function t8() {
  eight();
}

document.querySelector('.b-8').onclick = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function nine() {
  let p = {
    action: 9,
    m: 1,
    d: 1,
    y: 1
  }
  AJAX('GET', p, toConsole, '.out-9');
}

function t9() {
  nine();
}

document.querySelector('.b-9').onclick = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.
 */

//без оптимизации
// function t10() {
//   let xhttp2 = new XMLHttpRequest();
//   xhttp2.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       myFunction2(this.responseText)
//     }
//   }
//   xhttp2.open("POST", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1", true);

//   xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xhttp2.send('auth=DdC33D7d2C2a7&action=1')

//   function myFunction2(data) {
//     // console.log('POSt');
//     a = data;
//     console.log(data);
//     document.querySelector('.out-10').innerHTML = a;
//   }
// }

function ten() {
  let p = {
    action: 1,
  }
  AJAX('POST', p, toConsole, '.out-10');
}

function t10() {
  ten();
}

document.querySelector('.b-10').onclick = t10;

// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function eleven() {
  let p = {
    action: 2,
    name: 'Alex'
  }
  AJAX('POST', p, toConsole, '.out-11');
}

function t11() {
  eleven();
}

document.querySelector('.b-11').onclick = t11;

// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function twelve() {
  let p = {
    action: 3,
    num1: 2,
    num2: 3
  }
  AJAX('POST', p, toConsole, '.out-12');
}

function t12() {
  twelve();
}

document.querySelector('.b-12').onclick = t12;
// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function thirteen() {
  let p = {
    action: 4,
    num1: 2,
    num2: 9
  }
  AJAX('POST', p, toConsole, '.out-13');
}

function t13() {
  thirteen();
}

document.querySelector('.b-13').onclick = t13;

// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function fourteen() {
  let p = {
    action: 5
  }
  AJAX('POST', p, toConsole, '.out-14');
}

function t14() {
  fourteen();
}

document.querySelector('.b-14').onclick = t14;
// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function fifteen() {
  let p = {
    action: 6,
    num1: 2,
    num2: 9
  }
  AJAX('POST', p, toConsole, '.out-15');
}

function t15() {
  fifteen();
}

document.querySelector('.b-15').onclick = t15;
// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function sixteen() {
  let p = {
    action: 7
  }
  AJAX('POST', p, toConsole, '.out-16');
}

function t16() {
  sixteen();
}

document.querySelector('.b-16').onclick = t16;

// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function seventeen() {
  let p = {
    action: 8,
    year: 1993
  }
  AJAX('POST', p, toConsole, '.out-17');
}

function t17() {
  seventeen();
}

document.querySelector('.b-17').onclick = t17;
// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function eighteen() {
  let p = {
    action: 9,
    m: 1,
    d: 1,
    y: 1
  }
  AJAX('POST', p, toConsole, '.out-18');
}

function t18() {
  eighteen();
}
document.querySelector('.b-18').onclick = t18;

// ваше событие здесь!!!