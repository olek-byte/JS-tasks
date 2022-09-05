// Oleksandr, I have added bgColor function instead of const we do have already. So every slider will have different colors, and will not repeat in the loop.
// Also, I changed little bit positioning of the button and changed the style for it.
// Googlefonts added

const sliderFunction = () => {
    const data = [
        "Начальник не всегда прав, но он всегда начальник.",
        "Время, затраченное на обсуждение проблемы обратно пропорционально значимости проблемы.",
        "Если нужно срочно сделать какое - либо дело, обратись к тому, кто занят больше всех.",
        "Не спеши выполнять приказ — его могут отменить.",
        "Тому, кто сам ничего не делает, все кажется по плечу.",
        "Начальник — это человек, который приходит на службу поздно, когда ты приходишь рано, и появляется чуть свет, когда ты опаздываешь.",
        "Только когда читаешь разъяснение ранее полученной инструкции, догадываешься, что не понял не самой инструкции, ни разъяснений к ней.",
        "Если отложить дело надолго, то его либо выполнит кто - нибудь другой, либо оно вообще перестанет быть нужным.",
        "Не будь незаменимым — тебя никогда не повысят.",
        "Позади всякого, кто сделал успешную карьеру, стоит озадаченная женщина.",
    ];

    // const bgColor = ['#CC0000', '#FF6600', '#FF3366', '#9933CC', '#003333', '#708090'];

    const btn = document.querySelector('.btn-start');

    let count = 0;
    let slideCollection;

    const startFunction = () => {
        btn.classList.add('hide');
        start();
    }

    const start = () => {
        const outField = document.querySelector('body');
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement('div');
            div.classList.add('slide');
            if (i !== 0) div.classList.add('hide');
            // if (i === 0) div.style.background = bgColor[randomInteger(0, bgColor.length - 1)];
            if (i === 0) div.style.background = bgColor();
            let text = document.createElement('div');
            text.textContent = data[i];
            div.append(text);
            outField.append(div);
        }
        outField.addEventListener('click', () => {
            showSlide();
        });
        slideCollection = document.querySelectorAll('.slide');
    }

    const bgColor = () => {
        return `rgb(${randomInteger(0,255)},${randomInteger(0,255)},${randomInteger(0,255)})`;
    }

    const showSlide = () => {
        hideSingleSlide(count);
        if (count + 1 < data.length) {
            count++;
        } else {
            count = 0;
        }
        showSingleSlide(count);
    }

    const showSingleSlide = (n) => {
        slideCollection[n].classList.remove('hide');
        // slideCollection[n].style.background = bgColor[randomInteger(0, bgColor.length - 1)];
        slideCollection[n].style.background = bgColor();
    }

    const hideSingleSlide = (n) => {
        slideCollection[n].classList.add('hide');
    }

    const randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    btn.addEventListener('click', () => {
        startFunction();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    sliderFunction();
});