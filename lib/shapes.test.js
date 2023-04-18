const Shape = require('../lib/shapes.js');

describe('Shape', () => {

    describe('Square', () => {
        it('should generate a square svg logo', () => {
            const shape = new Shape.Square('SVG', 'red', 'green');
            expect(shape.generateLogo()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="50" y="50" width="150" height="150" fill="green" />

    <text x="125" y="140" font-size="60" text-anchor="middle" fill="red">SVG</text>

</svg>`);
        });
    });


    describe('Circle', () => {
        it('should generate a circle svg logo', () => {
            const shape = new Shape.Circle('SVG', 'red', 'green');
            expect(shape.generateLogo()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="green" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text>

</svg>`);
        });
    });


    describe('Triangle', () => {
        it('should generate a triangle svg logo', () => {
            const shape = new Shape.Triangle('SVG', 'red', 'green');
            expect(shape.generateLogo()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="green" />

    <text x="150" y="150" font-size="55" text-anchor="middle" fill="red">SVG</text>

</svg>`);
        });
    });

});

