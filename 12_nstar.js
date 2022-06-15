//Goal: print out stars in a certain pattern with parameter n.
//1. create a function for input n
//2. create a variable totalStar = number of * plus 1 each time 
//3. if i>1, add "/n" each time 
//4. add totalStar each time 
//5. repeat step 2 


var result = ""
var totalStar = ""
var string = "/n"

function stars(n) {
 for (var i=1; i <= n; i++) {
 totalStar += "*"
 if (i>1) {
 result += string
  }
 result += totalStar
 }
 return result 
}


console.log(stars(5))


