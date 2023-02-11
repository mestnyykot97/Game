import { application } from './application';
// @ts-ignore
import loseimage from "../static/img/loseImage.png"
function renderLoseBlock() {
    const lose = document.createElement("div")
    lose.classList.add("win-lose")
    const LoseImage = document.createElement("img")
    LoseImage.src = loseimage
    const Losetitle = document.createElement("h1")
    Losetitle.classList.add("title-win")
    Losetitle.textContent = "Вы проиграли!"
    lose.appendChild(LoseImage)
    lose.appendChild(Losetitle)
    application.winLoseScreen.appendChild(lose)
    application.container.appendChild(application.winLoseScreen)
}
application.blocks["lose-block"] = renderLoseBlock // Добавляем в блок
function renderLoseScreen() {
    application.renderBlock("lose-block")
    application.renderBlock("win-block-content")
}
application.screens["renderLose"] = renderLoseScreen // Записываем функцию в поле объекта
