//Goal: print star to form a patterns 
//1. create a function for input n
//2. i = 0, number of stars in  each line will plus one 
//3. i = 1, on top of the original, add one more line, and the number of stars will plus one
//4. do it n times 
//5. i = 1, number of stars is * 
//6. i = 2, on the same line we add one more star 
//7. i = 2, what we have previously will go down
//6. number of stars in each line is minus one of the previous 
// eg. 1-->1 2-->3  3--> 5  5--> 9 6--> 11  7--> 13 8-->15


//ascending  1 12     123       1234
//descending    1   (1+1)1    (1+1+1)(1+1)1
                     


 
//   1                (1+1)1        (1+1+1) (1+1) (1) 
// 1  (1+1)     1 (1+1) (1+1+1)
//all lines + 1 
// add one line of star  
//each line + 1star 
// 

var top = ""
var bottom = ""
var result = ""
var newstar = ""

function stars(n) {
 for (var i=0; i <= n; i++) {
 top += "*"
 console.log(top)
 if (i===n) {
 for (var i=n; i >= 1; i--) {
 top -= "*"
 console.log(top)
  }
 } 
  }
}
stars(3)
