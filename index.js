window.application = {
    level: null,
};

const btnStart = document.querySelector('.game__btn-start');
document.querySelectorAll('.button').forEach((element) => {
    element.addEventListener('click', function (event) {
        const levelBtn = event.target.textContent;
        console.log(levelBtn);

        window.application.level = levelBtn;
    });
});

btnStart.addEventListener('click', () => {
    const level = window.application.level;
    console.log(level);
    if (level === '1') {
        console.log('Легкий уровень сложности');
    } else if (level === '2') {
        console.log('Средний уровень сложности');
    } else if (level === '3') {
        console.log('Высокий уровень сложности');
    } else {
        console.log('Что-то пошло не так');
    }
});
