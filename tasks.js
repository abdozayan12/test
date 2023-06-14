const stringLength = (str) => {
    
    if (str.length < 1 || str.length > 10) {
        throw new Error('String length must be between 1 and 10 characters');
    }
    return str.length;
    }
    
    const reverseString = (string) => {
        return string.toLowerCase().split('').reverse().join('');
    }
    
    export default class Calc{
        static addition = (a, b) => {
            return a + b;
        }
        static subtraction = (a, b) => {
            return a - b;
        }
        static dividation = (a, b) => {
            return a / b;
        }
        static multiplation = (a, b) => {
            return a * b;
        }
    }
    
    
    const capitalize = (string) => {
        const stringWithOutFirstLetter = string.slice(1);
        const capitalizedString = string.charAt(0).toUpperCase() + stringWithOutFirstLetter;   
    
        return capitalizedString;
    }
    
    export {stringLength, reverseString, capitalize};