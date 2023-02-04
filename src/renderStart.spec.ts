const { declare, it, expect } = require('@jest/globals');
const { renderStartBlock } = require('./renderStart');

it('Проверка на создание нового элемента', () => {
    const app = document.querySelector('.app');
    renderStartBlock(app);
    const btn = document.querySelector('.button');
    expect(btn);
})
