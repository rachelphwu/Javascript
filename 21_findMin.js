var input = []

function findMin(input) {
   var n = input.length
   for(var i=0; i<=n; i++){
   if (input[0] > input[1]) {
   input.splice(0, 1)}
   else{
   input.splice(1, 1)}
   }
   return input
}
console.log(findMin([1,2,5,6,99,4,5,-10]))

