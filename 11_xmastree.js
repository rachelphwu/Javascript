//Goal: print out stars in a certain pattern with parameter n.
//1. create a function for input n
//2. print n lines of stars 
//3. number of stars in  each line will plus one

var star = ""

function stars(n) { 
 for (var i=0; i <= n; i++) {
 star += "*"
 console.log(star)
 }
}

stars(5)




