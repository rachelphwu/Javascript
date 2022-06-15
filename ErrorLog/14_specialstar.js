//Goal: print out stars in a certain pattern with parameter n.
//1. create a function for input n
//2. print n lines of stars
//3. number of stars in  each line will plus one
//4. print what is added previously 

var total = ""
var last  = ""
var result = "" 
var starArray = []

function stars(n) {
 for (var i=1; i <= n; i++) {
 starArray.push(total)
 last = total
 total += "*"
 console.log(total)
 } 
for(var i = n-1; i > 0; i--) {
console.log(starArray[i])
}
}
stars(5)


/*if (i>1) {
 result += string
  }
 result += totalStar
 return result
*/
