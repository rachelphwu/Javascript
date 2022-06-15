//1.Create a function for array input
//2.Add all numbers to "total"
//3. return

var total = 0

function sum(array) {
  for (var i = 0; i < array.length; i++) {
    total += array.at(i)
  } return total
} 

console.log(sum([-1,2,3]))
