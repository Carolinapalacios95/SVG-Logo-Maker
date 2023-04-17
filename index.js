const inquirer = require("inquirer");
const fs = require("fs");


const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter up to 3 characters for your logo.",
        validate: textInput => {
            if ((textInput) && (textInput <= 3)) {
                return true;
            } else {
                console.log("Please enter up to 3 characters for your logo.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter a text color keyword or hexadecimal number",
        validate: textColorInput => {
            if (textColorInput) {
                return true;
            } else {
                console.log("Please enter a text color keyword or hexadecimal number");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a shape from the following list.",
        choices: ["circle", "triangle", "square"],
        validate: shapeInput => {
            if (shapeInput) {
                return true;
            } else {
                console.log("Please select a shape from the following list.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a shape color keyword or hexadecimal number",
        validate: shapeColorInput => {
            if (shapeColorInput) {
                return true;
            } else {
                console.log("Please enter a shape color keyword or hexadecimal number");
                return false;
            }
        }
    }
];


function writeToFile(data) {
  
    fs.writeFile("logo.svg", data, function (err) {
      err ? console.log(err) : console.log('Successfully generated logo.svg!')
    });
};

function createShape(data) {
    if (data.shape === "square") {
        return new shapes.Square(data.text, data.textColor, data.shapeColor);
    } else if (data.shape === "circle") {
        return new shapes.Circle(data.text, data.textColor, data.shapeColor);
    } else if (data.shape === "triangle") {
        return new shapes.Triangle(data.text, data.textColor, data.shapeColor);
    }
};



