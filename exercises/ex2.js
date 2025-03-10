/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

Warning
Use some sort of looping. Do Not use Array.prototype.filter()
*/


const conditionalSum = function(values, condition) {
    let length = values.length;
    let SumTotal= 0;
 
    if (condition === "even") {
        for (i = 0; i < values.length; i++) {
            if (values[i] % 2 === 0) {
             SumTotal+= values[i];
            }
        };
    };
    if (condition == 'odd') {
        for (i = 0; i < values.length; i++) {
            if (values[i] % 2 != 0) {
             SumTotal+= values[i];
            }
        }
    };
    if (length === 0) {
        return 0;
    }
    return SumTotal;
};
  
console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0