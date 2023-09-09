class Food {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.foodElement;
  }

  createFood () {
    
    let foodElement = document.createElement('div');
    foodElement.className = 'food';
    foodElement.style.gridArea = `${this.y} / ${this.x}`;

    this.foodElement = foodElement;

    return this.foodElement;

  }

  changeCoordinates(x, y) {
    this.x = x;
    this.y = y;

    this.foodElement.style.gridArea = `${this.y} / ${this.x}`;
  }

}