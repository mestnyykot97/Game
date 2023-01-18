window.application = {
    blocks: {},
    screens: {},
    watch: null,
    timers: [],
    levels: null,
    cards: [],
    container: document.querySelector(".app"),
    renderScreen: function (screenName) {
      window.application.timers.forEach((element) => {
        clearInterval(element);
      });
      if (!window.application.screens[screenName]) {
        console.warn("Такой страницы нет");
      } else {
        window.application.container.innerHTML = "";
        this.screens[screenName]();
      }
    },
    renderBlock: function (blockName) {
      if (!window.application.blocks[blockName]) {
        console.warn("Такого блока нет");
      } else {
        this.blocks[blockName](window.application.container);
      }
    },
    // renderCards: function(){
    //   if(window.application.levels === 1){
    //     function sortCards() {
    //       return window.application.cards.sort(function () {
    //         return 0.5 - Math.random();
    //       });
    //     }
    //     sortCards(arr);
    //   }
    //   for(let i=0; i<window.application.cards.length; i++){
    //     cards.appendChild(window.application.cards[i]);
    //       window.application.container.appendChild(cards);
    //   }  
    // }  
  };
  //Отрисовка первого блока
  function renderChoiceLevel() {
    const choice = document.createElement("div");
    choice.classList = "choice_level";
    const title = document.createElement("h1");
    title.classList = "title";
    title.textContent = "Выбери сложность";
    const level = document.createElement("div");
    level.classList = "level";
    const easyButton = document.createElement("button");
    easyButton.classList = "easy";
    easyButton.textContent = "1";
    const normalButton = document.createElement("button");
    normalButton.classList = "normal";
    normalButton.textContent = "2";
    const hardButton = document.createElement("button");
    hardButton.classList = "hard";
    hardButton.textContent = "3";
    const startButton = document.createElement("button");
    startButton.classList = "start";
    startButton.textContent = "Старт";
    startButton.disabled = true;
    choice.appendChild(title);
    level.appendChild(easyButton);
    level.appendChild(normalButton);
    level.appendChild(hardButton);
    choice.appendChild(level);
    choice.appendChild(startButton);
    window.application.container.appendChild(choice);
    level.addEventListener("click", (event) => {
      const target = event.target;
      if (target.tagName === "BUTTON") {
        const innerText = target.textContent;
        if (innerText === "1") {
          window.application.levels = innerText;
        } else if (innerText === "2") {
          window.application.levels = innerText;
        } else if (innerText === "3") {
          window.application.levels = innerText;
        }
      }
      startButton.disabled = false;
      startButton.classList.add("start_active");
      console.log(`Уровень сложности - ${window.application.levels}`);
    });
  
    startButton.addEventListener("click", (event) => {
      event.preventDefault();
      if(window.application.levels === '1'){
        window.application.renderScreen("render_game"); // Отрисовывает страницу простой игры -->
      }
    });
  }
  window.application.blocks["choice_level"] = renderChoiceLevel; // Добавляем в блок
  function renderChoiceLevelScreen() {
    window.application.renderBlock("choice_level"); // Должен вызвать window.application.blocks['example-button'](), передавая туда объект-узел
  }
  window.application.screens["renderLevel"] = renderChoiceLevelScreen; // Записываем функцию в поле объекта