// Task 1
// Функция принимает число n. Напишите рекурсивную функцию r1, которая выводит числа от n до нуля в out-1. Разделитель - пробел.

function t1(n) {
    let out = '';
    let z = n;

    function r1(z) {
        out += z + ' ';
        if (z === 0) return;
        z--;
        r1(z);
    }
    r1(n);
    document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('.b-1').addEventListener('click', () => {
    t1(5);
})


// Task 2
// Функция принимает число. Напишите рекурсивную функцию r2, которая выводит числа от 0 до введенного числа в out-2 с шагом 2. Разделитель - пробел.

function t2(n) {
    let out = '';

    function r2(z) {
        if (z > n) return;
        out += z + ' ';
        z = z + 2;
        r2(z);
    }

    r2(0);
    document.querySelector('.out-2').innerHTML = out;

}

document.querySelector('.b-2').addEventListener('click', () => {
    t2(5);
})

// Task 3.
// Функция t3 принимает аргумент 'odd' или 'even' и должна возвратить четное или не четное число в диапазоне от 0 до 100. Решите задачу рекурсивно. Для генерации случайных чисел используйте функцию randomInteger.

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function t3(arg) {
    let x = randomInteger(0, 100);
    if (arg === 'even' && x % 2 === 0) return x;
    if (arg === 'odd' && x % 2 !== 0) return x;
    return t3(arg);
}

document.querySelector('.b-3').addEventListener('click', () => {
    document.querySelector('.out-3').textContent = t3('odd');
});

// Task 4.
// Функция t4 с помощью randomInteger генерирует случайное число от 0 до 10 и проверяет его наличие в массиве ar4. Если число уже есть - выполняет генерацию заново. Если нет - возвращает это число.

let ar4 = [3, 4, 6, 7, 8];

function t4(arr) {
    let rand = randomInteger(0, 10);
    if (arr.includes(rand) === false) return rand;
    if (arr.includes(rand) === true) return t4(arr);
}

document.querySelector('.b-4').addEventListener('click', () => {
    document.querySelector('.out-4').textContent = t4(ar4);
});
/////

// Task 5.
// Напишите рекурсивную функцию t5, которая генерирует целое число от 0 до 10 ( с помощью randomInteger) и добавляем его в массив ar5. Проверяет, если сумма элементов массива больше 30 - то прекращает свою работу, если меньше - запускается заново. Возвращает массив ar5 по результату работы.

let ar5 = [];

function t5() {
    let rand = randomInteger(0, 10);
    ar5.push(rand);
    let sum = ar5.reduce((accum, item) => accum + item)
    if (sum >= 30) {
        return;
    } else {
        t5();
    }
    console.log(ar5);
    return ar5;
}

document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').textContent = t5();
});

// Task 6.
// Напишите рекурсивную функцию t6, которая вытаскивает из массива ar6 числа в массив ar6_res. 

let ar6 = [
    5,
    [3, 4, 'h'],
    [
        [5, 6, 'b'],
        ['c', 7, [8]]
    ],
    9,
    [
        [
            [
                [
                    [10, 'i', 11, [12]]
                ]
            ]
        ]
    ]
];
let ar6_res = [];

function t6(arr) {
    for (let item of arr) {
        if (typeof item === 'number') {
            ar6_res.push(item);
        } else if (Array.isArray(item)) {
            t6(item);
        }
    }
    return ar6_res;
}

document.querySelector('.b-6').addEventListener('click', () => {
    t6(ar6);
    document.querySelector('.out-6').textContent = ar6_res;
});


// Task 7.
// Напишите рекурсивную функцию t7, которая вытаскивает из массива ar7 все строки в ar7_res. 

let ar7 = [
    'hi',
    ['hii'],
    [
        ['hiii']
    ],
    [
        [
            ['hiiii']
        ]
    ],
    ['i', [
        [
            [
                [
                    [
                        ['hi']
                    ]
                ]
            ]
        ]
    ]]
];
let ar7_res = [];

function t7(arg) {
    for (let item of arg) {
        if (typeof item === 'string') {
            ar7_res.push(item);
        } else if (Array.isArray(item)) {
            t7(item);
        }
    }
    return ar7_res;
}

document.querySelector('.b-7').addEventListener('click', () => {
    t7(ar7);
    document.querySelector('.out-7').textContent = ar7_res;
});



// Task 8.
// Напишите рекурсивную функцию t8, которая получает с помощью randomInt целое число от 1000 до 9000 и проверяет если сумма первых двух цифр числа равна сумме 3 и 4 числа то возвращает это число. Если нет - повторяет операцию. Например число 1235 не удовлетворяет этому условию, потому что 1+2 не равно 3+5. А вот число 7180  - удовлетворяет.

function t8() {
    let randNum = randomInteger(1000, 9000);
    let arr = randNum.toString().split('').map(Number);
    return (arr[0] + arr[1] !== arr[2] + arr[3]) ? t8() : randNum;

    // let arr = new String(randNum);
    // console.log(arr);
    // console.log((+arr[0]) + (+arr[1]));
    // console.log((+arr[2]) + (+arr[3]));
    // if ((+arr[0]) + (+arr[1]) === (+arr[2]) + (+arr[3])) {
    //     return randNum;
    // } else {
    //     return false;
    // }
}

document.querySelector('.b-8').addEventListener('click', () => {
    document.querySelector('.out-8').textContent = t8();
});


// Task 9.
// Напишите рекурсивную функцию t9, которая создает массив ar9_res состоящий из возраста (age) пользователей прописанных в ar9. 

let ar9 = {
    "ivanov": {
        age: 25,
        parent: {
            "ivanov-a": {
                age: 45
            },
            "ivanov-b": {
                age: 43,
                parent: {
                    "sergeev-a": {
                        age: 88,
                        parent: {
                            "lionenko": {}
                        }
                    },
                }
            }
        }
    },
    "kostenko": {
        age: 56,
        parent: {
            "ignatenko": {

            },
            "sniezko": {
                age: 45
            }
        }
    }
}

let ar9_res = [];

function t9(obj) {
    if (obj.age !== undefined) {
        ar9_res.push(obj.age)
    }
    if (obj.parent !== undefined) {
        for (let item in obj.parent) {
            console.log(obj.parent[item]);
            t9(obj.parent[item])
        }
    }
}

document.querySelector('.b-9').addEventListener('click', () => {
    for (let key in ar9) {
        t9(ar9[key]);
    }
    document.querySelector('.out-9').innerHTML = ar9_res;
});

// Task 10.
// Напишите рекурсивную функцию t10, которая создает массив ar10_res фамилии людей у которых нет информации о возрасте.

let ar10 = {
    "ivanov": {
        age: 25,
        parent: {
            "ivanov-a": {
                age: 45,
                parent: {}
            },
            "ivanov-b": {
                age: 43,
                parent: {
                    "sergeev-a": {
                        age: 88,
                        parent: {
                            "lionenko": {}
                        }
                    },
                }
            }
        }
    },
    "kostenko": {
        age: 56,
        parent: {
            "ignatenko": {
                parent: {
                    "sidorenko": {}
                }
            },
            "sniezko": {
                age: 45
            }
        }
    }
}

let ar10_res = [];

function t10(k, obj) {
    if (obj.age === undefined) {
        ar10_res.push(k);
    }
    if (obj.parent !== undefined) {
        for (let key in obj.parent) {
            t10(key, obj.parent[key])
        }
    }
}

document.querySelector('.b-10').addEventListener('click', () => {
    for (let key in ar10) {
        t10(key, ar10[key]);
    }
    document.querySelector('.out-10').innerHTML = ar10_res;
});