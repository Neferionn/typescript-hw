/*
 Write a detailed explanation with images / steps / words how ex 5 withLet function works and why did we get the expected result
 */
/*
var app = () => {
  var withVar = () => {
    for (var index: number = 0; index < 10; index += 1) {
      setTimeout(() => console.log(`var idx = ${index}`), 0);
      console.log(`var index withOutSetTimeOut = ${index}`);
    }
    // console.log(index);
  };

  var withLet = () => {
    for (let index: number = 0; index < 10; index += 1) {
      setTimeout(() => console.log(`let index = ${index}`), 0);
      console.log(`let index withOutSetTimeOut = ${index}`);
    }
    // console.log(index);
  };

  withVar();
  withLet();
};
setTimeout(app, 0);
*/
/*

1. setTimeout initializes app fn instant.
2. withVar() fn is called and its pushed to the callStack.
3. withVar() fn loops with a var declaration which has a function scope.
4. the ‘setTimeout’ function is an asynchronous function.
This function will interact with browser environment to create a ‘timer’.
Once the time period is elapsed, which would happen immediately as we’ve
mentioned zero milliseconds, browser would not execute the function immediately.
Instead the callback function would be placed in callback queue.
5. console.log(`var index withOutSetTimeOut = ${index}`) is executed 10 times
and prints var index withOutSetTimeOut = 0 ... 9

6. withLet() fn is called and its pushed to the callStack.
7. withLet() fn loops with a let declaration which creates a block scope.
8. step 4 repeats for the withLet() fn
8. console.log(`let index withOutSetTimeOut = ${index}`) is executed 10 times
and prints let index withOutSetTimeOut = 0 ... 9
10. callback functions from the callback queue are starting to execute one by one.

11. In the first for loop, variable is declared using ‘var’ keyword.
Variables declared using ‘var’ keyword are function scoped.
As the first ‘for’ loop is enclosed in function withVar(), the variable is accesible,
and the value of the variable was incremented at each iteration
of the first for loop. At the end of the first for loop,
the variable ‘index’ will have the value of 10 as the value is overwritten
at each iteration of the first for loop. At the time of execution
of the first callback function from the ‘callback queue’, the value of ‘index’ will be 10.

12. The first callback function from queue will print var idx = 10 at console.
The second and the next callback functions will also print the same var idx = 10 ten times
as it points the same variable.

13. In the case of second for loop, the ‘let’ keyword to declare the variable was declared.
Variables declared using ‘let’ keyword are block scoped.
So, in second for loop, a new value is used for each iteration.
So, the last 10 callback functions will have the numeric values 0, 1, 2 ... 9
respectively for the variable ‘index’ and hence would print index = 0, index = 1, ... index = 9

*/
