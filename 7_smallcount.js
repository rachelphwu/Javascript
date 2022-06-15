//1.Create a function that requirea an array and a number input
//2.Check each element in the array if they are bigger than the number
//3.If yes, a new var called total will +1
//4. Print total. 

var total = 0 

function findSmallCount(array, number) {
  for (var i = 0; i < array.length; i++) {
  if (array.at(i) > number) {
   total++}
 } return total 
}

var print = findSmallCount([1,4,3,2], 1)
console.log(print)

