var arr = []
var sum = 0
function fib(n){
  for(var i=0; i<n; i++){
  if (i<2){
  arr.push(i)}
  else{
  sum = arr.at(i-1) + arr.at(i-2)
  arr.push(sum)}
  }
  return arr.at(-1)
}
console.log(fib(8))

