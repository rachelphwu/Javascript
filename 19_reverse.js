/*  
1. Create a function
2. Turn string into array 

{
3. Slice the last element 
4. Add the last element at position i (i=0)   
5. Remove the last element 
6. i++ 
}

7. Repeat 3-6
8. Join the array 
9. Turn array back to string 
10. Print the string 
*/


var str = ""
var arr = []
var i=0

function reverse(str){
 arr = str.split("")
   for (let i=0; i<arr.length; i++){
    var cut = arr.slice(-1)
    arr.splice(i, 0, cut)
    arr.pop()}
    join = arr.join("")
    text = join.toString()
 console.log(text)}

reverse("01234")

