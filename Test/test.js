// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test

describe("Sum", () => {
    test("Adds 14 + 9 to equal 23", () => {
        let total = sum(14, 9);  
        expect(total).toBe(23); 
    });
});

const InitialEuros = 3.5;

describe("Convert values", () => {
    test("3.5 euro should be 3.99 dollars", () => {
        let dollar  = fromEuroToDollar(InitialEuros); 
        expect(dollar).toBe(3.99);
    });

    test("3.99 dollars should be 459.03 yens", () => {
        let yen  = fromDollarToYen(fromEuroToDollar(InitialEuros)); 
        expect(yen).toBe(459.03);
    });

    test("459.03 yens should be 2.91 pounds", () => {
        let pound  = fromYenToPound(fromDollarToYen(fromEuroToDollar(InitialEuros))); 
        expect(pound).toBe(2.91);
    });
});






