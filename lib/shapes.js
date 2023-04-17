class Shape {
    constructor (text, textColor, shapeColor, shapeCode, xPosition, yPosition, fontSize) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shapeCode = shapeCode;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.fontSize = fontSize;
    }
};

function generateShape() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${this.shapeCode} fill="${this.shapeColor}" />
  
    <text x="${this.xPosition}" y="${this.yPosition}" font-size="${this.fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`
};

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor,'rect x="50" y="20" width="150" height="150"', 125, 120, 60);
    }
};

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor, 'circle x="100" y="100" width="150" height="150"', 150, 150, 60)
    }
};

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor, 'polygon points="50, 13.397 100, 100 0, 100"', 120, 125, 60)
    }
};

module.exports = {
    Square,
    Circle,
    Triangle
};