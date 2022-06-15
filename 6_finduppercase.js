//test charcode for each element, once there is an uppercase, break the loop

function position(str) {
  for (i=0; i<str.length; i++) {
  var code = str.charCodeAt(i)
  if (code>=65 && code<=90) {
 return [String.fromCharCode(code), code]
 return 0
}

//if there is no uppercase after the loop, return -1

 }return -1
}

var result = position("aEdd")
console.log(result)

