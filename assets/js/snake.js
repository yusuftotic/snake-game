class Snake {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocityX = 0;
    this.velocityY = 0;
    this.snakeHeadElement;
    this.snakeCoordinates = [];
    this.snakeElements = [];
  }

  createSnake() {

    let snakeElement = document.createElement('div');
    snakeElement.className = 'snake';
    snakeElement.style.gridArea = `${this.y} / ${this.x}`;

    this.snakeHeadElement = snakeElement;

    this.snakeElements.push(this.snakeHeadElement);

    return this.snakeHeadElement;

  }

  changeDirection() {

    let snakeX = Number(this.snakeHeadElement.style.gridArea.split(' / ')[1]);
    let snakeY = Number(this.snakeHeadElement.style.gridArea.split(' / ')[0]);

    this.x = snakeX + this.velocityX;
    this.y = snakeY + this.velocityY;

    this.snakeHeadElement.style.gridArea = `${this.y} / ${this.x}`;

  }

  addBody(x, y) {

    let snakeBodyElement = document.createElement('div');
    snakeBodyElement.className = 'snake';
    snakeBodyElement.style.gridArea = `${y} / ${x}`;

    this.snakeElements.push(snakeBodyElement);
    // console.log(this.snakeElements[0].style);

    return snakeBodyElement;
  }

  updateSnakeCoordinates() {

    for (let i = snake.snakeCoordinates.length - 1; i > 0; i--) {
      snake.snakeCoordinates[i] = snake.snakeCoordinates[i - 1]
    }
    this.snakeCoordinates[0] = [this.x, this.y];
  }

  followHead() {
    if (this.snakeElements.length > 1) {

      for (let i = 1; i <= this.snakeCoordinates.length - 1; i++) {

        this.snakeElements[i].style.gridArea = `${this.snakeCoordinates[i][1]} / ${this.snakeCoordinates[i][0]}`;

        if (i !== 0 && this.snakeCoordinates[0][0] === this.snakeCoordinates[i][0] && this.snakeCoordinates[0][1] === this.snakeCoordinates[i][1]) {
          return true;
        }
      }
    }
  }

}