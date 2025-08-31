// let a = 10; (outside)

// you created a variable a in the global scope.

// its value is 10.

// inside function test()

// you again wrote let a = 20;.

// this does not change the outer a.

// instead, JavaScript makes a new variable a only inside this function.

// this is called shadowing → inner variable “covers” (or hides) the outer variable while inside this block.

// console.log(a); inside function

// here, JS will always look for the variable in the closest scope first.

// it finds the inner a = 20, so it prints 20.

// console.log(a); outside

// now we are back in the global scope.

// only the outer a = 10 exists here.

// so it prints 10.