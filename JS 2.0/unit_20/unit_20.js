// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая по событию keydown считывает содержимое event.key и добавляет в .out-1. Во всех последующих задачах - работаем с латиницей и цифрами. */

function t1(event) {
    console.log(event);
    let i = document.querySelector('.i-1').value;
    out = i;
    document.querySelector('.out-1').innerHTML = out;
    return i;
}

document.querySelector('.i-1').onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая по событию onkeypress выводит в out-2 числовой код символа (event.keyCode). */

function t2(event) {
    console.log(event);
    console.log('keyCode: ' + event.keyCode);
    let i = document.querySelector('.i-2').value;
    document.querySelector('.out-2').innerHTML = event.keyCode;
    return i;
}

document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте keyCode. */

function t3(event) {
    if (event.charCode > 47 && event.charCode < 57) {
        document.querySelector('.out-3').innerHTML = false;
    } else if (event.charCode > 57) {
        document.querySelector('.out-3').innerHTML = true;
    }
}
document.querySelector('.i-3').onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out-4 получаем ab4ci. */

function t4(event) {
    console.log(event.keyCode);
    const out = document.querySelector('.out-4');
    let result = '';
    if (event.charCode >= 97) {
        result = event.key;
    } else {
        result = '';
    }
    console.log(event.charCode)
    out.textContent += result;
}

document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
    console.log(event);
    document.querySelector('.out-5').innerHTML = document.querySelector('.i-5').value.toUpperCase();
}

document.querySelector('.i-5').onkeydown = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая позволяет вводить в i-6 только символы в нижнем регистре. Т.е. мы до функции создаем строку. Внутри функции проверяем код символа. Если символ - в нижнем регистре - добавляем в строку. Потом принудительно присваиваем строку в value input i-6. Чтобы блокировать стандартный вывод в input в конце функции пишем return false;  */

function t6(event) {
    let inp = document.querySelector('.i-6').value;
    if (event.key === event.key.toLowerCase()) {
        inp += event.key;
    } else {
        return false;
    }
    // if (event.keyCode > 96) {
    //     this.value += event.key;
    // }
    // return false;
}

document.querySelector('.i-6').onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

const a7 = ['a', 'z', 'x', 'w', 'y', 't'];

function t7() {
    const a7 = ['a', 'b', 'c', 'b'];
    let s = a7[randomInteger(0, a7.length - 1)];
    return s;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

document.querySelector('.i-7').addEventListener('keypress', () => {
    document.querySelector('.out-7').innerHTML = t7();
});

// document.querySelector('.i-7').onkeydown = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая дописывает в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

const a8 = {
    i: 1,
    o: 0,
    l: 7
}

function t8(event) {
    let str = '';
    let out = document.querySelector('.out-8');
    let value = event.key;
    if (a8[value] !== undefined) {
        str += a8[value];
    } else {
        str += value;
    }
    out.textContent = str;
};

document.querySelector('.i-8').onkeydown = t8;

// 1. Получаем из event введенный символ
// 2. Проверяем наличие такого ключа в a8 - уже делали это раньше!!!!
// 3. Если есть дописываем в out-8 символ из массива a8. Если нет - введенный символ.


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество (число) нажатых клавиш стрелка вниз. */

let count = 0;

function t9(event) {
    if (event.keyCode == 40) {
        count++;
    }
    document.querySelector('.out-9').innerHTML = count;
}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и блок .block-10. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину блока. Клавиши стрелка вверх и вниз - увеличивать высоту блока. Одно нажатие клавиши - 1px. */

let h = 75;
let w = 75;
let div10 = document.querySelector('.div-10');

function t10(event) {
    console.log(event);
    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        w++;
        div10.style.width = w + 'px';
    } else if (event.key == 'ArrowUp' || event.key == 'ArrowDown') {
        h++;
        div10.style.height = h + 'px';
    }
}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. 
1. Изучите верстку клавиатуры.
2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 
4. Самостоятельно добавьте все цифры и второй ряд клавиш от a до l
5. Самостоятельно добавьте клавишу alt, enter.
*/

// function t11(event) {
//   // console.log(event.key);
//   let key = '';

//   switch (event.keyCode) {
//     case 32:
//       key = 'space';
//       break;
//     case 17:
//       key = 'ctrl';
//       break;
//     case 18:
//       key = 'alt';
//       break;
//     case 13:
//       key = 'enter';
//       break;
//     default:
//       key = event.key;
//   }

//   let keyboard = document.querySelectorAll('.keyboard');
//   let item = document.querySelector(`.keyboard[data="${key}"`);

//   keyboard.forEach(i => i.classList.remove('active'));
//   item.classList.add('active');
// }

// const key = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 81, 87, 69, 82, 65, 83, 68, 70, 71, 72, 74, 75, 76, 17, 18, 32, 13];

function t11(event) {
    let key = event.key;
    let a = document.querySelectorAll('.keyboard'); //для всех клавишей с данным классом
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active'); //убирает окрашеный квадрат
    }

    if (event.keyCode === 32) {
        // key = 'space';
        document.querySelector(`.keyboard[data="space"]`).classList.add('active');
    } else if (event.keyCode === 17) {
        key = 'ctrl';
    } else if (event.keyCode === 18) {
        key = 'alt';
    } else if (event.keyCode === 13) {
        key = 'enter';
    }

    let btn = document.querySelector(`.keyboard[data="${key}"]`);
    // let btn = document.querySelector('.keyboard[data = "' + key + '"]');


    btn.classList.add('active');

    console.log(event.key)
    console.log(event.keyCode);
}

document.querySelector('.i-11').onkeydown = t11;