export function renderStartBlock(container: HTMLElement) {
    const divGame = document.createElement('div');
    divGame.classList.add('game');

    const divGameCard = document.createElement('div');
    divGameCard.classList.add('game__card');

    const divCardContent = document.createElement('div');
    divCardContent.classList.add('game__card-content');

    const h3 = document.createElement('h3');
    h3.classList.add('game__title');
    h3.textContent = 'Выбери сложность';

    const divGameButton = document.createElement('div');
    divGameButton.classList.add('game__button');

    const buttonLevel1 = document.createElement('button');
    buttonLevel1.classList.add('button');
    buttonLevel1.textContent = '1';

    const buttonLevel2 = document.createElement('button');
    buttonLevel2.classList.add('button');
    buttonLevel2.textContent = '2';

    const buttonLevel3 = document.createElement('button');
    buttonLevel3.classList.add('button');
    buttonLevel3.textContent = '3';

    const divGameBtn = document.createElement('div');
    divGameBtn.classList.add('game__btn');

    const gameBtnStart = document.createElement('button');
    gameBtnStart.classList.add('game__btn-start');
    gameBtnStart.textContent = 'Старт';

    container?.appendChild(divGame);
    divGame.appendChild(divGameCard);
    divGameCard.appendChild(divCardContent);
    divCardContent.appendChild(h3);
    divCardContent.appendChild(divGameButton);
    divGameButton.appendChild(buttonLevel1);
    divGameButton.appendChild(buttonLevel2);
    divGameButton.appendChild(buttonLevel3);
    divCardContent.appendChild(divGameBtn);
    divGameBtn.appendChild(gameBtnStart);

    const btnStart = document.querySelector('.game__btn-start');
    document
        .querySelectorAll<HTMLButtonElement>('.button')
        .forEach((element) => {
            element.addEventListener('click', function (event) {
                element.style.border = '3px solid green';

                if (!(event.target instanceof HTMLElement)) return;
                const levelBtn = event.target.textContent;

                console.log(levelBtn);

                window.application.level = levelBtn;
            });
        });

    let numberOfCards: number;

    btnStart?.addEventListener('click', () => {
        window.application.renderScreen('gameField');
        const level = window.application.level;
        console.log(level);
        if (level === '1') {
            numberOfCards = 3;
        } else if (level === '2') {
            numberOfCards = 6;
        } else if (level === '3') {
            numberOfCards = 9;
        } else {
            alert('Выбери сложность');
            window.application.renderScreen('start');
        }
    });
}
