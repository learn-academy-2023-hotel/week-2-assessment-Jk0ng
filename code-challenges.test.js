// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
describe ("divisibleByThree", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// input:an object  
// output: a string 
// declare a function that takes in an obejct as the argument 
// access the value pairs by using dot notation and use modulo operation to decide whether the current value is evenly divisible by three
// return messages based on whether the value is divisible by three

const divisibleByThree = (object) => {
    if(object.number % 3 === 0){
        return `${object.number} is divisible by three`}
    else if (object.number % 3 !== 0){
        return `${object.number} is not divisible by three`
        }
    else {
        return "ERROR"}
    }



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalizer", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
        expect(capitalizer(randomNouns1)).toEqual (["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]) 
        expect(capitalizer(randomNouns2)).toEqual (["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// input: an array of words with lowercare
// output: an array of capitalized words
// create a function called capitalizer that takes in an array 
// use .map to iterate the array 
// then use bracket notation to iterate each element and use toUppercase() function to capitalize the first letter/zero index of each word.  

const capitalizer = (array) =>{
    return array.map((value) => {
        return value[0].toUpperCase()+ value.substring (1)
    })
}

console.log(capitalizer(randomNouns1))
console.log(capitalizer(randomNouns2))
