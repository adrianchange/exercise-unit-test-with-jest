//Variables
const oneEuroIs = {
    "JPY":131.15,
    "USD": 1.14,
    "GBP": 0.83
}


// we declare the functionS 

const sum = (a,b) => a + b;

const fromEuroToDollar = euro => parseFloat((euro * oneEuroIs.USD).toFixed(2))

const fromDollarToYen = dollar => parseFloat(((oneEuroIs.JPY / oneEuroIs.USD) * dollar).toFixed(2))

const fromYenToPound = yen => parseFloat(((oneEuroIs.GBP / oneEuroIs.JPY) * yen).toFixed(2));
    
 







// Export the functions to be used on other files 

module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound };



