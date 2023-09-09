const highScore = document.getElementById('high-score');
const gameArea = document.getElementById('game-area');
const score = document.getElementById('score');
const uiContainer = document.getElementById('ui-container');
const uiButton = document.getElementById('ui-button');

const uiScore = document.getElementById('ui-score');
const uiHighScore = document.getElementById('ui-high-score');

const snake = new Snake(5, 5);
const food = new Food(9, 5);
const game = new Game();


const eventListeners = () => {

  document.addEventListener('keydown', (e) => game.handleMove(e));

  uiButton.addEventListener('click', () => {
    location.reload()
  });

}

eventListeners();