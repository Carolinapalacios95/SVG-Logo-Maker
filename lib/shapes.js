class Shape {
    constructor (text, textColor, shapeColor, fontSize, shapeCode, xPosition, yPosition) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.fontSize = fontSize;
        this.shapeCode = shapeCode;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }
};

function generateShape() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${this.shapeCode} fill="${this.shapeColor}" />
  
    <text x="${this.xPosition}" y="${this.yPosition}" font-size="${this.fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`
};