/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/


const camelCase=function(input) {
  let phrase=input.split("");
  phrase[0]=phrase[0].toLowerCase();
  for(i=0;i<phrase.length;i++) {
    if(phrase[i] == " "){
      phrase[i+1] = phrase[i+1].toUpperCase();
      phrase[i] = phrase[i].replace(" ", "");
    }
  }
   console.log(phrase.join(""))
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

