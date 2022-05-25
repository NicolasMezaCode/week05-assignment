/*
In this exercise, we will be counting the number of vowels that appear in characters given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function(data) {
  let characters=Array.from(data);
  let n=characters.length
  var vowels=0
  
    for (i=0; i<n ; i++){
      if((characters[i] == "a") || (characters[i] == "e") || (characters[i] == "i") || (characters[i] == "o") || (characters[i] == "u")){
        vowels+=1
      }
    };
  console.log(vowels)

}
  console.log(numberOfVowels("orange")); // 3
  console.log(numberOfVowels("cornerstone college")); // 7
  console.log(numberOfVowels("aeiou")); // 5