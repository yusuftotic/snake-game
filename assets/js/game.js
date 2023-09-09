class Game {

  constructor() {
    this.score = 0;
    this.highScore = 0;
    this.gameOver = false;

    this.initGame();
  }

  initGame() {
    score.innerText = this.score;

    let snakeElement = {};
    let foodElement = {};

    snakeElement = snake.createSnake();
    gameArea.appendChild(snakeElement);

    foodElement = food.createFood();
    gameArea.appendChild(foodElement);

    if (window.localStorage.getItem('highScore')) {
      highScore.innerHTML = window.localStorage.getItem('highScore');
      this.highScore = window.localStorage.getItem('highScore');
    }
    

    const interval = setInterval(() => {
      snake.changeDirection();
      snake.updateSnakeCoordinates();
      snake.followHead() === true ? this.gameOver = true : this.gameOver = false;
      this.checkSnakeInsidePlayground();
      this.handleGameOver(interval);
      this.handleHitFood();
    }, 100);

  }

  handleHitFood() {

    if (snake.x === food.x && snake.y === food.y) {
      snake.snakeCoordinates.push([food.x, food.y]);
      gameArea.append(snake.addBody(food.x, food.y));

      food.changeCoordinates(this.generateCoordinates(), this.generateCoordinates());

      this.score += 1;
      score.innerText = this.score;
    }

  }

  handleGameOver(interval) {
    if (this.gameOver === true) {
      this.gameOver = false;
      if (this.score > window.localStorage.getItem('highScore')) {
        window.localStorage.setItem('highScore', this.score);
        this.highScore = this.score;
      }
      clearInterval(interval);
      uiScore.innerHTML = this.score;
      uiHighScore.innerHTML = this.highScore;
      uiContainer.style.display = 'grid';

    }
  }

  checkSnakeInsidePlayground() {

    if (snake.x < 1 || snake.x > 30 || snake.y < 1 || snake.y > 30) this.gameOver = true;

  }

  handleMove(e) {

    if (snake.velocityY !== 1 && e.code === 'KeyW' || e.code === 'ArrowUp') {
      snake.velocityX = 0;
      snake.velocityY = -1;
    }

    else if (snake.velocityX !== -1 && e.code === 'KeyD' || e.code === 'ArrowRight') {
      snake.velocityX = 1;
      snake.velocityY = 0;
    }

    else if (snake.velocityY !== -1 && e.code === 'KeyS' || e.code === 'ArrowDown') {
      snake.velocityX = 0;
      snake.velocityY = 1;
    }

    else if (snake.velocityX !== 1 && e.code === 'KeyA' || e.code === 'ArrowLeft') {
      snake.velocityX = -1;
      snake.velocityY = 0;
    }

  }

  generateCoordinates() {
    return Math.floor(Math.random() * 30) + 1;
  }


}
