/*
1.Start with the first character in the input string

2. If the charcode is a small letter, turn it to capital > add to output
3. If the charcode is a capital letter, turn it to small > add to output
4. Move on to the next character 

5. Repeat step 2-4
6. Return output
*/

var input = ""
var output = ""

function swap(input) {
  for (i=0; i <=input.length; i++){
  var aCode = input.charCodeAt(i)
  
  if (aCode > 96 && aCode < 123){
  output += String.fromCharCode(aCode-32)
  } 
  
  else if (aCode > 64 && aCode < 91){
  output += String.fromCharCode(aCode+32)
  }
 }
 return(output)
}

console.log(swap("Peter"))
