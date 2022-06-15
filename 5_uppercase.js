function IsUpperCase(str) {
var code = str.charCodeAt(0)
  if (code <= 90 && code >=65) {
  return true}
  else {
  return false}
}

console.log(IsUpperCase("aba"))

