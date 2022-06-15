/* 
1. function fib()
2. fib(4) = 0  1   1       2          3                 5                          8       13      21 
                 1     1         1               2                   3                 5       8       13 
            0  1   1x1+0x1 1x2+0x1    1x3 + 0x2         1x5+0x3                    
            0  1   1+0     1+1        2+1               3+2                        5+3      8+5     13+8        
            0  1  [(0+1)]  [1+ (0+1)] [1+(0+1) + (0+1)] [1+(0+1) + (0+1)+1+ (0+1)]    
            0  1   0+1     1+1       1+2                2+3                         5+3    5+7    
            0  1   2       3          4                 5                           6       7       8
          
           
3. fib(n) = fib(n-1) + fib(n-2) , n >= 2 
fib(0)=0
fib(1)=1
fib(2)=1+0=1 
fib(3)=1+1=2 
*/
/*Trial 1 
1. Add up all numbers 
2. Minus all numbers (2 before) 

f(x)=y 

y=f(x-1) + f(x-2)
 
f(3) = f(3-1) + f(3-2) 
f(3) = f(2) + f(1) 

function fib(n){
  if (n>1){   
    = fib(n-1) + fib(n-2)
  return fib(n)
}
}
*/












fib(1) 


