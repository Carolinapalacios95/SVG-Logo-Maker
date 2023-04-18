//creates a Shape constructor class that defines shape parameters and holds function to generate a shape
class Shape {
    constructor(text, textColor, shapeColor, shapeCode, xPosition, yPosition, fontSize) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shapeCode = shapeCode;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.fontSize = fontSize;
    }
    // function to generate a shape's svg text aka logo
    generateLogo() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${this.shapeCode} fill="${this.shapeColor}" />

    <text x="${this.xPosition}" y="${this.yPosition}" font-size="${this.fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
    }
};

// creates a square class that inherits its main structure from the parent Shape class and extends it by specifying parameters specific to its shape
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor, 'rect x="50" y="50" width="150" height="150"', 125, 140, 60);
    }
};

// creates a circle class that inherits its main structure from the parent Shape class and extends it by specifying parameters specific to its shape
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor, 'circle cx="150" cy="100" r="80"', 150, 125, 60)
    }
};

// creates a triangle class that inherits its main structure from the parent Shape class and extends it by specifying parameters specific to its shape
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor, 'polygon points="150, 18 244, 182 56, 182"', 150, 150, 55)
    }
};

//exports the shapes code to be used in other areas
module.exports = {
    Square,
    Circle,
    Triangle,
};