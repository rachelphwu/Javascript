//1.Create a function for array and number input 
//2.Test an element if it is smaller than number.
//3. If yes, add the value to total
//4. Repeat the loop

var total = 0

function findSmallerTotal(array, number) {
  for (var i = 0; i < array.length; i++) {
  if (array.at(i) < number) {
   total += array.at(i)}
 } return total
}

var print = findSmallerTotal([6,5,3,1,2,10], 10)
console.log(print)
