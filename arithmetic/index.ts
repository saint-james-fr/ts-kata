// Use a type to determine the length of a tuple: Length<...>

// Recursive type to build a tuple of a specific length using concatenation and recursion. BuildTuple<...>

// Example usages
// let l: Length<[number, string, string, boolean]>; // `4`
// let tuple: BuildTuple<5>; // `[any, any, any, any, any]`

// Addition using tuple concatenation
// type Add<Number1 extends number, Number2 extends number>

// Now let's build a Add function : Add<...>
// Think about it: addition is like concatenating two arrays and checking their lenghth
// You'll need to use BuildTuple<...> and Length<...>, recursion and conditional types
// let addition: Add<5, 4>; // `9`

// Subtraction: A natural number is the result of subtracting one tuple's length from another.
// If A > B, then there exists a tuple X such that A = B + X. The result is X.

// let subtraction: Subtract<4, 2>; // `2`

// Multiplication through repeated addition : MultiAdd<...>
/* 
Here we will use the Add and Substract function we created earlier. We need to use recursion and an accumulator.
For example, performing 8 * 3 would mean 8 is added to itself 3 times, and we should assign these two numbers to N and I, respectively. A, being the accumulator, should start at 0. On each iteration we subtract 1 from the current value of I and add N to the current value of A. Eventually, I will work its way down to 0, and the value stored in A at that point is the product of our two numbers.
*/
// let addition: MultiAdd<4, 0, 3>; // `12`
