/*
1. Create function9to9(n)
2. 1*i, var i= 1, i<9,  i++
3. 2*i
4. ...
9. 9 * 1 
*/


function table(n){
for(var i=1; i<10; i++){
 console.log( n + "*" + i + "=" + n*i)}
 }

function table9to9(){
 for(var t=1; t<10; t++){
 table(t)}
  }

table9to9()
