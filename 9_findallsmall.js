//1.Create a function for array and number input
//2.Test an element if it is smaller than number.
//3. If yes, push the number to an array.
//4. Repeat the loop

var total = []

function findAllSmall(array, number) {
  for (var i = 0; i < array.length; i++) {
  if (array.at(i) < number) {
   total.push(array.at(i))}
 } return total
}

console.log(findAllSmall([6, 1, 4], 10))
