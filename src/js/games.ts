import { application } from "./application";
// @ts-ignore
import shirt from "../static/img/shirt.png"

function renderGameBlok() {
    const timeButton = document.createElement("div")
    timeButton.classList.add("content")
    const infoTim = document.createElement("div")
    infoTim.classList.add("infotime")
    const minSek = document.createElement("div")
    minSek.classList.add("minsek")
    const mins = document.createElement("h3")
    mins.textContent = "min"
    mins.classList.add("mins")
    const sek = document.createElement("h3")
    sek.textContent = "sek"
    sek.classList.add("sek")
    const timers = document.createElement("h1")
    timers.classList.add("time")
    const time = document.createElement("time")
    time.textContent = "00:00"
    const resetButton = document.createElement("button")
    resetButton.classList.add("reset_game")
    resetButton.textContent = "Играть заново"
    minSek.appendChild(mins)
    minSek.appendChild(sek)
    timers.appendChild(time)
    infoTim.appendChild(minSek)
    infoTim.appendChild(timers)
    timeButton.appendChild(infoTim)
    timeButton.appendChild(resetButton)
    application.container.appendChild(timeButton)
    const stopwatch = document.getElementsByTagName("h1")[0]
    let sec = 0
    let min = 0
    let t: number
    function tick() {
        sec++
        if (sec >= 60) {
            sec = 0
            min++
            if (min >= 60) {
                min = 0
            }
        }
    }
    function addT() {
        tick()
        stopwatch.textContent =
            (min > 9 ? min : "0" + min) + "." + (sec > 9 ? sec : "0" + sec)
        timer()
        application.timers = stopwatch.textContent
        console.log(`Время на игру - ${application.timers}`)
    }

    function timer() {
        application.watch.push(setTimeout(addT, 1000))
    }
    setTimeout(() => {
        timer()
    }, 5000)

    resetButton.addEventListener("click", () => {
        clearTimeout(t)
        console.log(`Время на игру - ${application.watch}`)
        application.idCards = []
        application.renderScreen("renderLevel") // Отрисовывает первую страницу -->
    })
}
application.blocks["time_button"] = renderGameBlok // Добавляем в блок

function renderHardBlock() {
    const ten = document.createElement("div")
    ten.classList.add("ten")
    const tenB = document.createElement("img")
    tenB.src = "../static/img/cards/ten-bubi.png"
    tenB.classList.add("front")
    const tenX = document.createElement("img")
    tenX.src = shirt
    tenX.classList.add("back")
    tenX.classList.add("back_rotate")
    tenX.id = "10"
    ten.appendChild(tenB)
    ten.appendChild(tenX)

    const ten2 = document.createElement("div")
    ten2.classList.add("ten")
    const tenK = document.createElement("img")
    tenK.src = "../static/img/cards/ten-kresti.png"
    tenK.classList.add("front")
    const ten2X = document.createElement("img")
    ten2X.src = shirt
    ten2X.classList.add("back")
    ten2X.classList.add("back_rotate")
    ten2X.id = "102"
    ten2.appendChild(tenK)
    ten2.appendChild(ten2X)

    const ten3 = document.createElement("div")
    ten3.classList.add("ten")
    const tenP = document.createElement("img")
    tenP.src = "../static/img/cards/ten-piki.png"
    tenP.classList.add("front")
    const ten3X = document.createElement("img")
    ten3X.src = shirt
    ten3X.classList.add("back")
    ten3X.classList.add("back_rotate")
    ten3X.id = "103"
    ten3.appendChild(tenP)
    ten3.appendChild(ten3X)

    const ten4 = document.createElement("div")
    ten4.classList.add("ten")
    const tenC = document.createElement("img")
    tenC.src = "../static/img/cards/ten-chervi.png"
    tenC.classList.add("front")
    const ten4X = document.createElement("img")
    ten4X.src = shirt
    ten4X.classList.add("back")
    ten4X.classList.add("back_rotate")
    ten4X.id = "104"
    ten4.appendChild(tenC)
    ten4.appendChild(ten4X)

    const nine = document.createElement("div")
    nine.classList.add("ten")
    const nineB = document.createElement("img")
    nineB.src = "../static/img/cards/nine-bubi.png"
    nineB.classList.add("front")
    const nineX = document.createElement("img")
    nineX.src = shirt
    nineX.classList.add("back")
    nineX.classList.add("back_rotate")
    nineX.id = "9"
    nine.appendChild(nineB)
    nine.appendChild(nineX)

    const nine2 = document.createElement("div")
    nine2.classList.add("ten")
    const nineK = document.createElement("img")
    nineK.src = "../static/img/cards/nine-kresti.png"
    nineK.classList.add("front")
    const nine2X = document.createElement("img")
    nine2X.src = shirt
    nine2X.classList.add("back")
    nine2X.classList.add("back_rotate")
    nine2X.id = "92"
    nine2.appendChild(nineK)
    nine2.appendChild(nine2X)

    const nine3 = document.createElement("div")
    nine3.classList.add("ten")
    const nineP = document.createElement("img")
    nineP.src = "../static/img/cards/nine-piki.png"
    nineP.classList.add("front")
    const nine3X = document.createElement("img")
    nine3X.src = shirt
    nine3X.classList.add("back")
    nine3X.classList.add("back_rotate")
    nine3X.id = "93"
    nine3.appendChild(nineP)
    nine3.appendChild(nine3X)

    const nine4 = document.createElement("div")
    nine4.classList.add("ten")
    const nineC = document.createElement("img")
    nineC.src = "../static/img/cards/nine-chervi.png"
    nineC.classList.add("front")
    const nine4X = document.createElement("img")
    nine4X.src = shirt
    nine4X.classList.add("back")
    nine4X.classList.add("back_rotate")
    nine4X.id = "94"
    nine4.appendChild(nineC)
    nine4.appendChild(nine4X)

    const eight = document.createElement("div")
    eight.classList.add("ten")
    const eightK = document.createElement("img")
    eightK.src = "../static/img/cards/eight-bubi.png"
    eightK.classList.add("front")
    const eightX = document.createElement("img")
    eightX.src = shirt
    eightX.classList.add("back")
    eightX.classList.add("back_rotate")
    eightX.id = "8"
    eight.appendChild(eightK)
    eight.appendChild(eightX)

    const eight2 = document.createElement("div")
    eight2.classList.add("ten")
    const eightB = document.createElement("img")
    eightB.src = "../static/img/cards/eight-kresti.png"
    eightB.classList.add("front")
    const eight2X = document.createElement("img")
    eight2X.src = shirt
    eight2X.classList.add("back")
    eight2X.classList.add("back_rotate")
    eight2X.id = "82"
    eight2.appendChild(eightB)
    eight2.appendChild(eight2X)

    const eight3 = document.createElement("div")
    eight3.classList.add("ten")
    const eightP = document.createElement("img")
    eightP.src = "../static/img/cards/eight-piki.png"
    eightP.classList.add("front")
    const eight3X = document.createElement("img")
    eight3X.src = shirt
    eight3X.classList.add("back")
    eight3X.classList.add("back_rotate")
    eight3X.id = "83"
    eight3.appendChild(eightP)
    eight3.appendChild(eight3X)

    const eight4 = document.createElement("div")
    eight4.classList.add("ten")
    const eightC = document.createElement("img")
    eightC.src = "../static/img/cards/eight-chervi.png"
    eightC.classList.add("front")
    const eight4X = document.createElement("img")
    eight4X.src = shirt
    eight4X.classList.add("back")
    eight4X.classList.add("back_rotate")
    eight4X.id = "84"
    eight4.appendChild(eightC)
    eight4.appendChild(eight4X)

    const seven = document.createElement("div")
    seven.classList.add("ten")
    const sevenB = document.createElement("img")
    sevenB.src = "../static/img/cards/seven-bubi.png"
    sevenB.classList.add("front")
    const sevenX = document.createElement("img")
    sevenX.src = shirt
    sevenX.classList.add("back")
    sevenX.classList.add("back_rotate")
    sevenX.id = "7"
    seven.appendChild(sevenB)
    seven.appendChild(sevenX)

    const seven2 = document.createElement("div")
    seven2.classList.add("ten")
    const sevenK = document.createElement("img")
    sevenK.src = "../static/img/cards/seven-kresti.png"
    sevenK.classList.add("front")
    const seven2X = document.createElement("img")
    seven2X.src = shirt
    seven2X.classList.add("back")
    seven2X.classList.add("back_rotate")
    seven2X.id = "72"
    seven2.appendChild(sevenK)
    seven2.appendChild(seven2X)

    const seven3 = document.createElement("div")
    seven3.classList.add("ten")
    const sevenP = document.createElement("img")
    sevenP.src = "../static/img/cards/seven-piki.png"
    sevenP.classList.add("front")
    const seven3X = document.createElement("img")
    seven3X.src = shirt
    seven3X.classList.add("back")
    seven3X.classList.add("back_rotate")
    seven3X.id = "73"
    seven3.appendChild(sevenP)
    seven3.appendChild(seven3X)

    const seven4 = document.createElement("div")
    seven4.classList.add("ten")
    const sevenC = document.createElement("img")
    sevenC.src = "../static/img/cards/seven-chervi.png"
    sevenC.classList.add("front")
    const seven4X = document.createElement("img")
    seven4X.src = shirt
    seven4X.classList.add("back")
    seven4X.classList.add("back_rotate")
    seven4X.id = "74"
    seven4.appendChild(sevenC)
    seven4.appendChild(seven4X)

    const six = document.createElement("div")
    six.classList.add("ten")
    const sixB = document.createElement("img")
    sixB.src = "../static/img/cards/six-bubi.png"
    sixB.classList.add("front")
    const sixX = document.createElement("img")
    sixX.src = shirt
    sixX.classList.add("back")
    sixX.classList.add("back_rotate")
    sixX.id = "6"
    six.appendChild(sixB)
    six.appendChild(sixX)

    const six2 = document.createElement("div")
    six2.classList.add("ten")
    const sixK = document.createElement("img")
    sixK.src = "../static/img/cards/six-kresti.png"
    sixK.classList.add("front")
    const six2X = document.createElement("img")
    six2X.src = shirt
    six2X.classList.add("back")
    six2X.classList.add("back_rotate")
    six2X.id = "62"
    six2.appendChild(sixK)
    six2.appendChild(six2X)

    const six3 = document.createElement("div")
    six3.classList.add("ten")
    const sixP = document.createElement("img")
    sixP.src = "../static/img/cards/six-piki.png"
    sixP.classList.add("front")
    const six3X = document.createElement("img")
    six3X.src = shirt
    six3X.classList.add("back")
    six3X.classList.add("back_rotate")
    six3X.id = "63"
    six3.appendChild(sixP)
    six3.appendChild(six3X)

    const six4 = document.createElement("div")
    six4.classList.add("ten")
    const sixC = document.createElement("img")
    sixC.src = "../static/img/cards/six-chervi.png"
    sixC.classList.add("front")
    const six4X = document.createElement("img")
    six4X.src = shirt
    six4X.classList.add("back")
    six4X.classList.add("back_rotate")
    six4X.id = "64"
    six4.appendChild(sixC)
    six4.appendChild(six4X)

    const valet = document.createElement("div")
    valet.classList.add("ten")
    const valetB = document.createElement("img")
    valetB.src = "../static/img/cards/valet-bubi.png"
    valetB.classList.add("front")
    const valetX = document.createElement("img")
    valetX.src = shirt
    valetX.classList.add("back")
    valetX.classList.add("back_rotate")
    valetX.id = "v"
    valet.appendChild(valetB)
    valet.appendChild(valetX)

    const valet2 = document.createElement("div")
    valet2.classList.add("ten")
    const valetK = document.createElement("img")
    valetK.src = "../static/img/cards/valet-kresti.png"
    valetK.classList.add("front")
    const valet2X = document.createElement("img")
    valet2X.src = shirt
    valet2X.classList.add("back")
    valet2X.classList.add("back_rotate")
    valet2X.id = "v2"
    valet2.appendChild(valetK)
    valet2.appendChild(valet2X)

    const valet3 = document.createElement("div")
    valet3.classList.add("ten")
    const valetP = document.createElement("img")
    valetP.src = "../static/img/cards/valet-piki.png"
    valetP.classList.add("front")
    const valet3X = document.createElement("img")
    valet3X.src = shirt
    valet3X.classList.add("back")
    valet3X.classList.add("back_rotate")
    valet3X.id = "v3"
    valet3.appendChild(valetP)
    valet3.appendChild(valet3X)

    const valet4 = document.createElement("div")
    valet4.classList.add("ten")
    const valetC = document.createElement("img")
    valetC.src = "../static/img/cards/valet-chervi.png"
    valetC.classList.add("front")
    const valet4X = document.createElement("img")
    valet4X.src = shirt
    valet4X.classList.add("back")
    valet4X.classList.add("back_rotate")
    valet4X.id = "v4"
    valet4.appendChild(valetC)
    valet4.appendChild(valet4X)

    const queen = document.createElement("div")
    queen.classList.add("ten")
    const queenB = document.createElement("img")
    queenB.src = "../static/img/cards/queen-bubi.png"
    queenB.classList.add("front")
    const queenX = document.createElement("img")
    queenX.src = shirt
    queenX.classList.add("back")
    queenX.classList.add("back_rotate")
    queenX.id = "q"
    queen.appendChild(queenB)
    queen.appendChild(queenX)

    const queen2 = document.createElement("div")
    queen2.classList.add("ten")
    const queenK = document.createElement("img")
    queenK.src = "../static/img/cards/queen-kresti.png"
    queenK.classList.add("front")
    const queen2X = document.createElement("img")
    queen2X.src = shirt
    queen2X.classList.add("back")
    queen2X.classList.add("back_rotate")
    queen2X.id = "q2"
    queen2.appendChild(queenK)
    queen2.appendChild(queen2X)

    const queen3 = document.createElement("div")
    queen3.classList.add("ten")
    const queenP = document.createElement("img")
    queenP.src = "../static/img/cards/queen-piki.png"
    queenP.classList.add("front")
    const queen3X = document.createElement("img")
    queen3X.src = shirt
    queen3X.classList.add("back")
    queen3X.classList.add("back_rotate")
    queen3X.id = "q3"
    queen3.appendChild(queenP)
    queen3.appendChild(queen3X)

    const queen4 = document.createElement("div")
    queen4.classList.add("ten")
    const queenC = document.createElement("img")
    queenC.src = "../static/img/cards/queen-chervi.png"
    queenC.classList.add("front")
    const queen4X = document.createElement("img")
    queen4X.src = shirt
    queen4X.classList.add("back")
    queen4X.classList.add("back_rotate")
    queen4X.id = "q4"
    queen4.appendChild(queenC)
    queen4.appendChild(queen4X)

    const king = document.createElement("div")
    king.classList.add("ten")
    const kingB = document.createElement("img")
    kingB.src = "../static/img/cards/king-bubi.png"
    kingB.classList.add("front")
    const kingX = document.createElement("img")
    kingX.src = shirt
    kingX.classList.add("back")
    kingX.classList.add("back_rotate")
    kingX.id = "k"
    king.appendChild(kingB)
    king.appendChild(kingX)

    const king2 = document.createElement("div")
    king2.classList.add("ten")
    const kingK = document.createElement("img")
    kingK.src = "../static/img/cards/king-kresti.png"
    kingK.classList.add("front")
    const king2X = document.createElement("img")
    king2X.src = shirt
    king2X.classList.add("back")
    king2X.classList.add("back_rotate")
    king2X.id = "k2"
    king2.appendChild(kingK)
    king2.appendChild(king2X)

    const king3 = document.createElement("div")
    king3.classList.add("ten")
    const kingP = document.createElement("img")
    kingP.src = "../static/img/cards/king-piki.png"
    kingP.classList.add("front")
    const king3X = document.createElement("img")
    king3X.src = shirt
    king3X.classList.add("back")
    king3X.classList.add("back_rotate")
    king3X.id = "k3"
    king3.appendChild(kingP)
    king3.appendChild(king3X)

    const king4 = document.createElement("div")
    king4.classList.add("ten")
    const kingC = document.createElement("img")
    kingC.src = "../static/img/cards/king-chervi.png"
    kingC.classList.add("front")
    const king4X = document.createElement("img")
    king4X.src = shirt
    king4X.classList.add("back")
    king4X.classList.add("back_rotate")
    king4X.id = "k4"
    king4.appendChild(kingC)
    king4.appendChild(king4X)

    const As = document.createElement("div")
    As.classList.add("ten")
    const AsB = document.createElement("img")
    AsB.src = "../static/img/cards/as-bubi.png"
    AsB.classList.add("front")
    const AsX = document.createElement("img")
    AsX.src = shirt
    AsX.classList.add("back")
    AsX.classList.add("back_rotate")
    AsX.id = "a"
    As.appendChild(AsB)
    As.appendChild(AsX)

    const As2 = document.createElement("div")
    As2.classList.add("ten")
    const AsK = document.createElement("img")
    AsK.src = "../static/img/cards/as-kresti.png"
    AsK.classList.add("front")
    const As2X = document.createElement("img")
    As2X.src = shirt
    As2X.classList.add("back")
    As2X.classList.add("back_rotate")
    As2X.id = "a2"
    As2.appendChild(AsK)
    As2.appendChild(As2X)

    const As3 = document.createElement("div")
    As3.classList.add("ten")
    const AsP = document.createElement("img")
    AsP.src = "../static/img/cards/as-piki.png"
    AsP.classList.add("front")
    const As3X = document.createElement("img")
    As3X.src = shirt
    As3X.classList.add("back")
    As3X.classList.add("back_rotate")
    As3X.id = "a3"
    As3.appendChild(AsP)
    As3.appendChild(As3X)

    const As4 = document.createElement("div")
    As4.classList.add("ten")
    const AsC = document.createElement("img")
    AsC.src = "../static/img/cards/as-chervi.png"
    AsC.classList.add("front")
    const As4X = document.createElement("img")
    As4X.src = shirt
    As4X.classList.add("back")
    As4X.classList.add("back_rotate")
    As4X.id = "a4"
    As4.appendChild(AsC)
    As4.appendChild(As4X)
    let arr = [
        ten,
        ten2,
        ten3,
        ten4,
        nine,
        nine2,
        nine3,
        nine4,
        eight,
        eight2,
        eight3,
        eight4,
        seven,
        seven2,
        seven3,
        seven4,
        six,
        six2,
        six3,
        six4,
        valet,
        valet2,
        valet3,
        valet4,
        queen,
        queen2,
        queen3,
        queen4,
        king,
        king2,
        king3,
        king4,
        As,
        As2,
        As3,
        As4
    ]
    function sortCards(arr: any[]) {
        return arr.sort(function () {
            return 0.5 - Math.random()
        })
    }
    sortCards(arr)
    application.cards = arr
    // console.log(application.cards)
    let arrBack = [
        tenX,
        ten2X,
        ten3X,
        ten4X,
        nineX,
        nine2X,
        nine3X,
        nine4X,
        eightX,
        eight2X,
        eight3X,
        eight4X,
        sevenX,
        seven2X,
        seven3X,
        seven4X,
        sixX,
        six2X,
        six3X,
        six4X,
        valetX,
        valet2X,
        valet3X,
        valet4X,
        queenX,
        queen2X,
        queen3X,
        queen4X,
        kingX,
        king2X,
        king3X,
        king4X,
        AsX,
        As2X,
        As3X,
        As4X
    ]
    function rotateCards(arrBack: string | any[]) {
        for (let i = 0; i < arrBack.length; i++) {
            arrBack[i].classList.remove("back_rotate")
        }
    }
    setTimeout(() => {
        rotateCards(arrBack)
    }, 5000)
}
application.cardsScreen.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (target.tagName === "IMG") {
        target.classList.add("back_rotate")
        application.idCards.push(target.id)
    } else if(target.tagName !== "IMG"){
    console.log("Это не картинка") //Доработать
    }
    if (application.idCards.length === 2) {
        comparison()
    }
    console.log(application.idCards)
})
function comparison() {
    if (application.idCards[0] === application.idCards[1]) {
        application.idCards = []
        application.victoryPoint.push(1)
        if(application.victoryPoint.length === 3 && application.levels === "1"){
            application.victoryPoint = []
            application.renderScreen("renderWin")
          } else if(application.victoryPoint.length === 6 && application.levels === "2"){
            application.victoryPoint = []
            application.renderScreen("renderWin")
          }  else if(application.victoryPoint.length === 9 && application.levels === "3"){
            application.victoryPoint = []
            application.renderScreen("renderWin")
          }  
    } else {
        application.idCards = []
        application.renderScreen("renderLose")
    }       
}
application.blocks["hard_block"] = renderHardBlock 
//Отрисовка простого экрана игры
function renderEasyGameScreen() {
    application.renderBlock("time_button")
    application.renderBlock("hard_block")
    application.easyLevelScreen()
}
application.screens["render_easy_game"] = renderEasyGameScreen 
//Отрисовка нормального экрана игры
function renderNormalGameScreen() {
    application.renderBlock("time_button")
    application.renderBlock("hard_block")
    application.normalLevelScreen()
}
application.screens["render_normal_game"] = renderNormalGameScreen 
//Отрисовка сложного экрана игры
function renderHardGameScreen() {
    application.renderBlock("time_button")
    application.renderBlock("hard_block")
    application.hardLevelScreen()
}
application.screens["render_hard_game"] = renderHardGameScreen 
