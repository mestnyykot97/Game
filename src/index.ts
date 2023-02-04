import './style.scss';
import img from './img/cardFaceDown.jpg';
import ImgCards from './frontFacesCard';
import imgWins from './img/win.svg';
import imgLoses from './img/lose.svg';

declare global {
    interface Window {
        application: any;
    }
};

window.application = window.application || {};

const app = document.querySelector('.app');

window.application = {
    blocks: {},
    screens: {},
    level: null,
    cards: null,
    time: null,
    min: 0,
    sec: 0,

    renderScreen: function (screenName: string) {
        window.application.timers.forEach((element: any) => {
            clearInterval(element);
        });

        if (!window.application.screens[screenName]) {
            console.warn('Такой страницы нет');
        } else {
            (app!.innerHTML = ''), window.application.screens[screenName]();
        }
    },

    renderBlock: function (blockName: string, container: object) {
        if (!window.application.blocks[blockName]) {
            console.warn('Такого блока нет');
        } else {
            window.application.blocks[blockName](container);
        }
    },
    timers: [],
};

 function renderStartBlock(container: HTMLElement) {
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

    container.appendChild(divGame);
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

window.application.blocks['start'] = renderStartBlock;

function renderStartScreen() {
    const div = document.createElement('div');
    app?.appendChild(div);
    window.application.renderBlock('start', div);
}

window.application.screens['start'] = renderStartScreen;
window.application.renderScreen('start');

function renderGameFieldBlock(container: HTMLElement) {
    const divCards = document.createElement('div');
    divCards.classList.add('cards');

    let numberOfCards: number;

    if (window.application.level === '1') {
        numberOfCards = 3;
    } else if (window.application.level === '2') {
        numberOfCards = 6;
    } else if (window.application.level === '3') {
        numberOfCards = 9;
    }

    let cardValue;
    function getRandomInt() {
        cardValue = Math.floor(1 + Math.random() * 36);
        return cardValue;
    }

    const arrCard: number[] = [];

    for (let i = 0; i < numberOfCards!; i++) {
        getRandomInt();
        if (cardValue !== undefined) {
            if (arrCard.includes(cardValue)) {
                getRandomInt();
                arrCard.push(cardValue);
            } else {
                arrCard.push(cardValue);
            }
        }
    }

    arrCard.push(...arrCard);
    console.log(arrCard);

    arrCard.sort(() => Math.random() - 0.5);
    console.log(arrCard);

    for (let i = 0; i < arrCard.length; i++) {
        const divCardsImage = document.createElement('div');
        divCardsImage.classList.add('cards__image');
        if (numberOfCards! === 3) {
            divCardsImage.classList.add('card3');
        } else if (numberOfCards! === 6) {
            divCardsImage.classList.add('card6');
        } else if (numberOfCards! === 9) {
            divCardsImage.classList.add('card9');
        }

        container.appendChild(divCards);
        divCards.appendChild(divCardsImage);

        const imgFront = document.createElement('img');
        imgFront.src = ImgCards[arrCard[i] - 1];
        imgFront.classList.add('front-face');

        const imgBack = document.createElement('img');
        imgBack.src = img;
        imgBack.classList.add('back-face');

        divCardsImage.appendChild(imgFront);
        divCardsImage.appendChild(imgBack);

        const cards = document.querySelectorAll('.cards__image');

        let hasFlippedCard = false;

        const flipCard = () => {
            divCardsImage.classList.add('flip');
            if (!hasFlippedCard) {
                hasFlippedCard = true;
            } else {
                hasFlippedCard = false;
            }
        };

        cards.forEach(() => {
            setTimeout(() => flipCard(), 300);
            setTimeout(() => {
                divCardsImage.classList.remove('flip');
            }, 5000);
        });
    }

    const cards = document.querySelectorAll('.cards__image');
    let hasFlippedCard = false;

    const flipCardClick = (event: any) => {
      
        let firstCard;
        let secondCard;
        const target = event.target.parentElement;
        console.log(target);
        target.classList.add('flip');
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = target;
        } else {
            hasFlippedCard = false;
            secondCard = target;
        }
    };

    cards.forEach((card) => card.addEventListener('click', flipCardClick));

    const divCardsImage = document.querySelectorAll('.cards__image');

    let compared: HTMLImageElement[] = [];

    let counter = 0;
    document.firstElementChild instanceof Node;
    true;
    divCardsImage.forEach((item) => {
        item.addEventListener('click', function () {
            if (item.children.length > 1) {
                if (item.lastElementChild != null) {
                    item.removeChild(item.lastElementChild);
                }
                if (item.firstElementChild != null) {
                    compared.push(item.firstElementChild as HTMLImageElement);
                }

                console.log(compared);

            } else {
                return;
            }
            if (compared.length >= 2) {
                if (compared[0].src === compared[1].src) {
                    compared = [];
                    console.log(compared);
                    divCardsImage.forEach((item) => {
                        if (item.children.length === 1) {
                            console.log(item.children.length);
                            counter += 1;
                            console.log(counter);
                            const comparison = numberOfCards * 4;
                            console.log(comparison);
                            if (counter === comparison) {
                                window.application.renderScreen('win');
                                clearInterval(window.application.time);
                            }
                        }
                    });
                } else {
                    window.application.renderScreen('lose');
                    clearInterval(window.application.time);
                }
            }
        });
    });
}

window.application.blocks['gameField'] = renderGameFieldBlock;

function renderHeaderBlock(container: any) {
    const header = document.createElement('header');
    container.appendChild(header);

    const divTimePad = document.createElement('div');
    divTimePad.classList.add('time-pad');
    header.appendChild(divTimePad);

    const divTimer = document.createElement('div');
    divTimer.classList.add('timer');
    divTimePad.appendChild(divTimer);

    const divTimerWorld = document.createElement('div');
    divTimerWorld.classList.add('timer__world');
    divTimer.appendChild(divTimerWorld);

    const spanMin = document.createElement('span');
    spanMin.classList.add('unit-time');
    spanMin.textContent = 'min';
    divTimerWorld.appendChild(spanMin);

    const spanSec = document.createElement('span');
    spanSec.classList.add('unit-time');
    spanSec.textContent = 'sec';
    divTimerWorld.appendChild(spanSec);

    const spanNumMin = document.createElement('span');
    spanNumMin.classList.add('number');
    spanNumMin.textContent = '00';
    divTimer.appendChild(spanNumMin);

    const spanNumSec = document.createElement('span');
    spanNumSec.classList.add('number');
    spanNumSec.textContent = '00';
    divTimer.appendChild(spanNumSec);

    const button = document.createElement('button');
    button.classList.add('game__btn-start');
    button.classList.add('btn');
    button.textContent = 'Начать заново';
    divTimePad.appendChild(button);

    button.addEventListener('click', () => {
        window.application.renderScreen('start');
    });

    let sec = 0;
    let min = 0;

    function startTimer() {
        window.application.time = setInterval(function () {
            sec++;

            spanNumSec.textContent = sec.toString();

            if (sec < 10) {
                spanNumSec.textContent = '0' + sec;
                window.application.sec = sec;
                console.log(window.application.sec);
            }
            if (sec === 60) {
                sec = 0;
                min++;
                spanNumMin.textContent = min + '.';
                if (min < 10) {
                    spanNumMin.textContent = '0' + min + '.';
                    window.application.min = min;
                    console.log(window.application.min);
                }
            }
        }, 1000);
    }

    window.application.timers.push(setTimeout(startTimer, 4000));
}

window.application.blocks['header'] = renderHeaderBlock;

function renderGameFieldScreen() {
    const div = document.createElement('div');
    app?.appendChild(div);
    window.application.renderBlock('header', div);
    window.application.renderBlock('gameField', div);
}

window.application.screens['gameField'] = renderGameFieldScreen;
//вызываем в btnStart click

function renderWinBlock(container:  HTMLElement) {
    const divGame = document.createElement('div');
    divGame.classList.add('game');

    const divGameCard = document.createElement('div');
    divGameCard.classList.add('game__card');

    const divCardContent = document.createElement('div');
    divCardContent.classList.add('game__card-content');

    const divImgWin = document.createElement('div');
    divImgWin.classList.add('img__win');

    const imgWin = document.createElement('img');
    imgWin.src = imgWins;

    const h3 = document.createElement('h3');
    h3.classList.add('game__title');
    h3.textContent = 'Вы выиграли';

    const divTimeTitle = document.createElement('div');
    divTimeTitle.classList.add('time__title');

    const timeTitle = document.createElement('h4');
    timeTitle.textContent = 'Затраченное время:';

    const divSpanTime = document.createElement('div');
    divSpanTime.classList.add('span-time');

    const spanNumMin = document.createElement('span');
    spanNumMin.classList.add('number');
    spanNumMin.classList.add('num');
    spanNumMin.textContent = '0' + `${window.application.min}` + '.';

    const spanNumSec = document.createElement('span');
    spanNumSec.classList.add('number');
    spanNumSec.classList.add('num');
    spanNumSec.textContent = '0' + `${window.application.sec}`;

    const divBtn = document.createElement('div');
    divBtn.classList.add('div__btn');

    const gameBtnStart = document.createElement('button');
    gameBtnStart.classList.add('game__btn-start');
    gameBtnStart.classList.add('btn-start');
    gameBtnStart.textContent = 'Играть снова';

    container.appendChild(divGame);
    divGame.appendChild(divGameCard);
    divGameCard.appendChild(divCardContent);
    divCardContent.appendChild(divImgWin);
    divImgWin.appendChild(imgWin);
    divCardContent.appendChild(h3);
    divCardContent.appendChild(divTimeTitle);
    divTimeTitle.appendChild(timeTitle);
    divCardContent.appendChild(divSpanTime);
    divSpanTime.appendChild(spanNumMin);
    divSpanTime.appendChild(spanNumSec);
    divCardContent.appendChild(divBtn);
    divBtn.appendChild(gameBtnStart);

    gameBtnStart.addEventListener('click', () => {
        window.application.renderScreen('start');
    });
}
window.application.blocks['win'] = renderWinBlock;

function renderWinScreen() {
    const div = document.createElement('div');
    app?.appendChild(div);
    window.application.renderBlock('win', div);
}
window.application.screens['win'] = renderWinScreen;

function renderLoseBlock(container: HTMLElement) {
    const divGame = document.createElement('div');
    divGame.classList.add('game');

    const divGameCard = document.createElement('div');
    divGameCard.classList.add('game__card');

    const divCardContent = document.createElement('div');
    divCardContent.classList.add('game__card-content');

    const divImgWin = document.createElement('div');
    divImgWin.classList.add('img__win');

    const imgLose = document.createElement('img');
    imgLose.src = imgLoses;

    const h3 = document.createElement('h3');
    h3.classList.add('game__title');
    h3.textContent = 'Вы проиграли';

    const divTimeTitle = document.createElement('div');
    divTimeTitle.classList.add('time__title');

    const timeTitle = document.createElement('h4');
    timeTitle.textContent = 'Затраченное время:';

    const divSpanTime = document.createElement('div');
    divSpanTime.classList.add('span-time');

    const spanNumMin = document.createElement('span');
    spanNumMin.classList.add('number');
    spanNumMin.classList.add('num');
    spanNumMin.textContent = '0' + `${window.application.min}` + '.';

    const spanNumSec = document.createElement('span');
    spanNumSec.classList.add('number');
    spanNumSec.classList.add('num');
    spanNumSec.textContent = '0' + `${window.application.sec}`;

    const divBtn = document.createElement('div');
    divBtn.classList.add('div__btn');

    const gameBtnStart = document.createElement('button');
    gameBtnStart.classList.add('game__btn-start');
    gameBtnStart.classList.add('btn-start');
    gameBtnStart.textContent = 'Играть снова';

    container.appendChild(divGame);
    divGame.appendChild(divGameCard);
    divGameCard.appendChild(divCardContent);
    divCardContent.appendChild(divImgWin);
    divImgWin.appendChild(imgLose);
    divCardContent.appendChild(h3);
    divCardContent.appendChild(divTimeTitle);
    divTimeTitle.appendChild(timeTitle);
    divCardContent.appendChild(divSpanTime);
    divSpanTime.appendChild(spanNumMin);
    divSpanTime.appendChild(spanNumSec);
    divCardContent.appendChild(divBtn);
    divBtn.appendChild(gameBtnStart);

    gameBtnStart.addEventListener('click', () => {
        window.application.renderScreen('start');
    });
}
window.application.blocks['lose'] = renderLoseBlock;

function renderLoseScreen() {
    const div = document.createElement('div');
    app?.appendChild(div);
    window.application.renderBlock('lose', div);
}
window.application.screens['lose'] = renderLoseScreen;
