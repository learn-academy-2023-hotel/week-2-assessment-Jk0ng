// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.
function findFirstVowelIndex(inputString) {
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
        console.log(`The index of the first vowel is: ${i}`);
        return;
      }
    }
    console.log("No vowels found in the string.");
  }
  
  // Example usage:
  const inputString = "Hello, World!";
  findFirstVowelIndex(inputString);
  findFirstVowelIndex("test if this test works")
  findFirstVowelIndex("123445566788899ssa")

// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 
 
// I was a bit surprised by the output because the logic that the code used was not the direction that I was going. I was thinking to use a filter method. But in order to use a filter method, the input has to be in array datatype, so I would have to create a function to convert the string to an array and then use filter and logical to find all the strings that contain a vowel. 

//The output was correct and I like this approach. Also the code didn't neglect casing could be an issue. If I was left on my own to arrroach this quesiton, I might forget to consider the uppercase. So, I like this code and it is effienct. 

// Didn't really see any areas where best practice was not followed. So, looking at an AI-generated code can be a good way to check any missing conditions after righting my own code. 


  