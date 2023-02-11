import { application } from './application';
// @ts-ignore
import winimage from "../static/img/winImage.png"
function renderWinBlock() {
    const win = document.createElement("div")
    win.classList.add("win-lose")
    const winImage = document.createElement("img")
    winImage.src = winimage
    const wintitle = document.createElement("h1")
    wintitle.classList.add("title-win")
    wintitle.textContent = "Вы выиграли!"
    win.appendChild(winImage)
    win.appendChild(wintitle)
    application.winLoseScreen.appendChild(win)
    application.container.appendChild(application.winLoseScreen)
}
application.blocks["win-block"] = renderWinBlock // Добавляем в блок
function renderWinBlockContent() {
    const winContent = document.createElement("div")
    winContent.classList.add("winContent")
    const titleTime = document.createElement("h3")
    titleTime.classList.add("timeinfo")
    titleTime.textContent = "Затраченное время:"
    const timers = document.createElement("h1")
    timers.classList.add("game_time")
    const time = document.createElement("time")
    time.textContent = `${application.timers}`
    const gameAgain = document.createElement("button")
    gameAgain.classList.add("gameAgaint")
    gameAgain.textContent = "Играть снова"
    winContent.appendChild(titleTime)
    timers.appendChild(time)
    winContent.appendChild(timers)
    winContent.appendChild(gameAgain)
    application.winLoseScreen.appendChild(winContent)
    application.container.appendChild(application.winLoseScreen)
    gameAgain.addEventListener("click", () => {
        application.renderScreen("renderLevel") // Отрисовывает первую страницу -->
    })
}
application.blocks["win-block-content"] = renderWinBlockContent // Добавляем в блок
function renderWinScreen() {
    application.renderBlock("win-block")
    application.renderBlock("win-block-content")
}
application.screens["renderWin"] = renderWinScreen // Записываем функцию в поле объекта
