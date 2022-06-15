/*  012345      0>-1 1>2 2>1 -1>0 
    543210      0>5 1>4 2>3 3>2 4>1 5>0 
               
     0123     0>-1 1>-2 2>-3 3>-4 
                0>              
1. Create a function
2. Receive the numbers - str > arr 
3. Move how many positions ? i-- 
4. arr > str 
*/


var str = ""
var arr = []

function reverse(str){
 arr = str.split("")
 for (let i=arr.length; i>=0; i--){
    var cut = arr.splice(0, 1)
    arr.splice(i+1, 0, cut)}
 console.log(arr)}

reverse("0123")

/*
     i=       0>-1   0>-2    0>-3
          0>3    0>2     0>1      
orig - 0123  1230    2310    3210
real - 0321
ideal- 3210*/
