var print = "*"
var array = []

function star(number) {
  for (var i=1; i<=number; i++) {
  array.push (print)  //add number
}
return (array.join('')) //remove comma 
}

console.log(star(5))

/*
Option 2
var print = "*"
var ans = ""

function star(number) {
  for (var i=1; i<=number; i++) {
  ans += print
} return ans
}

console.log(star(5))
~
*/
