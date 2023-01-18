function renderGameBlok() {
    const timeButton = document.createElement("div");
    timeButton.classList = "content";
    const timers = document.createElement("h1");
    timers.classList = "time";
    const time = document.createElement("time");
    time.textContent = "00:00";
    const resetButton = document.createElement("button");
    resetButton.classList = "reset_game";
    resetButton.textContent = "Играть заново";
    timers.appendChild(time);
    timeButton.appendChild(timers);
    timeButton.appendChild(resetButton);
    window.application.container.appendChild(timeButton);
    const stopwatch = document.getElementsByTagName("h1")[0];
    let sec = 0;
    let min = 0;
    let t;
    function tick() {
      sec++;
      if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
          min = 0;
        }
      }
    }
    function add() {
      tick();
      stopwatch.textContent =
        (min > 9 ? min : "0" + min) + "." + (sec > 9 ? sec : "0" + sec);
      timer();
    }
    function timer() {
      t = setTimeout(add, 1000);
    }
    timer();
    function startTime() {
      timer();
    }
    function stopTime() {
      clearTimeout(t);
    }
    function resetTime() {
      stopwatch.textContent = "00:00";
      seconds = 0;
      minutes = 0;
    }
    resetButton.addEventListener("click", () => {
      window.application.watch = stopwatch.innerText;
      console.log(`Время на игру - ${window.application.watch}`);
      window.application.renderScreen("renderLevel"); // Отрисовывает первую страницу -->
    });
  }
  window.application.blocks["time_button"] = renderGameBlok; // Добавляем в блок
  function renderHardBlock() {
    const cards = document.createElement("div");
    cards.classList = "cards";
    const tenB = document.createElement("img");
    tenB.src = "./static/img/hardLevel/10 бубны.png";
    const tenK = document.createElement("img");
    tenK.src = "./static/img/hardLevel/10 крести.png";
    const nineB = document.createElement("img");
    nineB.src = "./static/img/hardLevel/9 бубны.png";
    const nineK = document.createElement("img");
    nineK.src = "./static/img/hardLevel/9 крести.png";
    const eightK = document.createElement("img");
    eightK.src = "./static/img/hardLevel/8 крести.png";
    const eightB = document.createElement("img");
    eightB.src = "./static/img/hardLevel/8 бубны.png";
    let arr = [tenB, tenK, nineB, nineK,eightB,eightK];  
    function sortCards(arr) {
      return arr.sort(function () {
        return 0.5 - Math.random();
      });
    }
    sortCards(arr);
    window.application.cards =arr;    
    console.log(window.application.cards)
    for(let i=0; i<arr.length; i++){
        cards.appendChild(arr[i]);
          window.application.container.appendChild(cards);
      }  
  }
  window.application.blocks["hard_block"] = renderHardBlock; // Добавляем в блок
  
  function renderGameScreen() {
    window.application.renderBlock("time_button");
    window.application.renderBlock("hard_block");
  }
  window.application.screens["render_game"] = renderGameScreen; // Добавляем в экраны