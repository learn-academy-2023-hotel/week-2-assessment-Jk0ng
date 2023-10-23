// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
// console.log(cohort.split(" "))

// a) Your answer:[Hotel 2023]
// b) Verify and explain: my answer was partially correct but missed a couple of things. I remember that split command would split a string based on what goes in the quotation mark. So, is there is an empty space in the quotation marks, the string will be divided into different elemtns in an array. But in the array, comma is used to separate different data at differnt index, and strings have "" around them to indicate it's datatype. The anser should be ["Hotel", "2023"] 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: 
// undefined?
// b) Verify and explain:the answer is undefined because the code tries to establish a function but doens't include a return command. 

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The answer is a new array that has passes through the filter and returns with only numbers that have a reminder after dividing 2. 

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: the answer is JavaScript as expected. When accessing a value in an object, the way is to use dot notation followed by the corresponding keyword.In this case, the valus is an array, so the bracket notation incidates the element of zero index will be logged according to the command.  

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent) 

// a) Your answer: student:George, cohort: Hotel, year:2023
// b) Verify and explain:the answer is partially correct but missed quotaiton marks around strings. The example above is a class which often used to create objects. 
