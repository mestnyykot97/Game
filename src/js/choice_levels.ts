import "../css/choice_levels.css";
import "../css/games.css";
import "../css/win_lose.css";

import { application } from "./application";

import './games';
import './win';
import './lose';

//Отрисовка первого блока
function renderChoiceLevel() {
  const choice = document.createElement("div")
  choice.classList.add("choice_level")
  const title = document.createElement("h1")
  title.classList.add("title")
  title.textContent = "Выбери сложность"
  const level = document.createElement("div")
  level.classList.add("level")
  const easyButton = document.createElement("button")
  easyButton.classList.add("easy")
  easyButton.textContent = "1"
  const normalButton = document.createElement("button")
  normalButton.classList.add("normal")
  normalButton.textContent = "2"
  const hardButton = document.createElement("button")
  hardButton.classList.add("hard")
  hardButton.textContent = "3"
  const startButton = document.createElement("button")
  startButton.classList.add("start")
  startButton.textContent = "Старт"
  startButton.disabled = true
  choice.appendChild(title)
  level.appendChild(easyButton)
  level.appendChild(normalButton)
  level.appendChild(hardButton)
  choice.appendChild(level)
  choice.appendChild(startButton)
  application.container.appendChild(choice)
  level.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement
    if (target.tagName === "BUTTON") {
      const innerText = target.textContent
      if (innerText === "1") {
        application.levels = innerText
        target.classList.add("color")
        normalButton.classList.remove("color")
        hardButton.classList.remove("color")
      } else if (innerText === "2") {
        application.levels = innerText
        target.classList.add("color")
        easyButton.classList.remove("color")
        hardButton.classList.remove("color")
      } else if (innerText === "3") {
        application.levels = innerText
        target.classList.add("color")
        easyButton.classList.remove("color")
        normalButton.classList.remove("color")
      }
    }
    startButton.disabled = false
    startButton.classList.add("start_active")
    console.log(`Уровень сложности - ${application.levels}`)
  })

  startButton.addEventListener("click", (event: MouseEvent) => {
    if (application.levels === "1") {
      application.renderScreen("render_easy_game") // Отрисовывает страницу простой игры -->
    } else if (application.levels === "2") {
      application.renderScreen("render_normal_game") // Отрисовывает страницу нормальной игры -->
    } else {
      application.renderScreen("render_hard_game") // Отрисовывает страницу сложной игры -->
    }
  })
}
application.blocks["choice_level"] = renderChoiceLevel // Добавляем в блок
function renderChoiceLevelScreen() {
  application.renderBlock("choice_level")
}
application.screens["renderLevel"] = renderChoiceLevelScreen // Записываем функцию в поле объекта

application.renderScreen("renderLevel")
