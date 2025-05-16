/* -------------------------------how node js work-------------------------------- 

when we define any code 
like-> 
a=5
console.log(a)

----working-----
(call stack =====> node Apis =====> calback queue) this all process call ==> event loop


in "  call stack "  for any line of code the main function will automatically call first in backend then other function will call it starts form bottom

log(a)-----2
main()-----1

and the main function will remove at the end 

APIs => application programing interface

the function we inherit from other languages like c,c++
eg => setTimeout()  =>>>>>>> will store in "node Apis" instead of storing in call stack

then node apis data go in "callback queue"  and when call stack "main function" remove then (automatically)
then "callback queue data" goes in a "call stack" as callback 


call stack      =>  Node Apis
       ^            ||
      ||            ||
   callback queue<==||

   this process call event loop

*/