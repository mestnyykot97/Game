export const application: any = {
  blocks: {},
  screens: {},
  watch: [],
  timers: [],
  levels: null,
  cards: [],
  cardsClone:[],
  idCards: [],
  victoryPoint:[],
  container: document.querySelector(".app"), //Основной контейнер
  winLoseScreen: document.querySelector(".win_lose_screen"),
  cardsScreen: document.querySelector(".cards"), //Контейнер для отрисовки экранов сложности
  renderScreen: function (screenName: string) {
    this.watch.forEach((element: string) => {
      clearTimeout(element)
    })
    if (!this.screens[screenName]) {
      console.warn("Такой страницы нет")
    } else {
      this.container.innerHTML = "";
      this.cardsScreen.innerHTML = "";
      this.winLoseScreen.innerHTML = "";
      this.screens[screenName]()
    }
  },

  renderBlock: function (blockName: string) {
    if (!this.blocks[blockName]) {
      console.warn("Такого блока нет")
    } else {
      this.blocks[blockName](this.container)
    }
  },

  easyLevelScreen: function () {    
    let cardsSort = []
    for (let i = 33; i < this.cards.length; i++) {
      cardsSort.push(this.cards[i])
      this.cardsClone=this.cards[i]
     let clone = this.cardsClone.cloneNode(true)
     setTimeout(() => {
       clone.children[1].classList.remove("back_rotate")
   }, 5000)
     cardsSort.push(clone)
   }     
   const shuffleCards = [...cardsSort].sort( () => 0.5 - Math.random());
   console.log(shuffleCards)
   for (let i = 0; i < shuffleCards.length; i++) {
    this.cardsScreen.appendChild(shuffleCards[i]
    )     
   }
   this.container.appendChild(
     this.cardsScreen
   )       
  },  

  normalLevelScreen: function () {
    let cardsSort = []
    for (let i = 30; i < this.cards.length; i++) {
      cardsSort.push(this.cards[i])
      this.cardsClone=this.cards[i]
     let clone = this.cardsClone.cloneNode(true)
     setTimeout(() => {
       clone.children[1].classList.remove("back_rotate")
   }, 5000)
     cardsSort.push(clone)
   }     
   const shuffleCards = [...cardsSort].sort( () => 0.5 - Math.random());
   console.log(shuffleCards)
   for (let i = 0; i < shuffleCards.length; i++) {
    this.cardsScreen.appendChild(shuffleCards[i]
    )     
   }
   this.container.appendChild(
     this.cardsScreen
   )       
  },  

  hardLevelScreen: function () {
    let cardsSort = []
    for (let i = 27; i < this.cards.length; i++) {
      cardsSort.push(this.cards[i])
      this.cardsClone=this.cards[i]
     let clone = this.cardsClone.cloneNode(true)
     setTimeout(() => {
       clone.children[1].classList.remove("back_rotate")
   }, 5000)
     cardsSort.push(clone)
   }     
   const shuffleCards = [...cardsSort].sort( () => 0.5 - Math.random());
   console.log(shuffleCards)
   for (let i = 0; i < shuffleCards.length; i++) {
    this.cardsScreen.appendChild(shuffleCards[i]
    )     
   }
   this.container.appendChild(
     this.cardsScreen
   )       
  },  
}

