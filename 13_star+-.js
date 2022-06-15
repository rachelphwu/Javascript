//1. create a function for input n
//2. print n lines of stars
//3. number of stars in  each line will plus one
//4. print stars until n-1
//5. n - 1, until it is = 0  
//6. repeat step 4  
// ** can + not - 
// ** "" immutable 

var up = ""

function stars(n) {
 for (var i=1; i <= n; i++) {
 up += "*"
 console.log(up)
 }

 for (var i=n-1; i > 0; i--){
 console.log(up.slice(0, i))
 }
}


/* for (var i=n-1; i > 0; i--){
 for (var i=1; i <= n; i++){
 down += "*"}
 console.log(down)
*/


stars(5)



/*
for(var i = n-1; i > 0; i--) {
console.log(starArray[i])
}
}
*/


/*if (i>1) {
 result += string
  }
 result += totalStar
 return result
*/

