// // https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f
// //

// // Type to determine the length of a tuple
// type Length<Tuple extends any[]> = Tuple["length"]

// // Recursive type to build a tuple of a specific length
/* 
1. Type Parameters:
Length extends number: This parameter specifies the desired length of the tuple. It must be a number.
Tuple extends any[] = []: This is an optional parameter with a default value of an empty array. It represents the current state of the tuple being built.
Recursive Type Definition:
The type uses a conditional type to check if the current Tuple has reached the desired Length.
Tuple extends { length: Length }: This checks if the current tuple's length matches the desired length.
If true (? Tuple), it returns the current Tuple as it has reached the desired length.
If false (: BuildTuple<Length, [...Tuple, any]>), it recursively calls BuildTuple, adding one more element (any) to the Tuple.
Recursion:
The recursion continues until the Tuple reaches the specified Length.
Each recursive call adds one element to the Tuple using the spread operator (...Tuple, any), effectively building the tuple one element at a time.
Example Usage
If you use BuildTuple<5>, it will recursively build a tuple of length 5, like [any, any, any, any, any].
This type is particularly useful in TypeScript for operations that require fixed-length arrays, such as type-level arithmetic or constraints on function arguments.
 */
// type BuildTuple<Length extends number, Tuple extends any[] = []> =
//   Tuple extends { length: Length }
//   ? Tuple
//   : BuildTuple<Length, [...Tuple, any]>;

// // Example usages
// let l: Length<[number, string, string, boolean]>; // `4`
// let tuple: BuildTuple<5>; // `[any, any, any, any, any]`

// // Addition using tuple concatenation
// type Add<Number1 extends number, Number2 extends number> =
//   Length<[...BuildTuple<Number1>, ...BuildTuple<Number2>]> extends number ? Length<[...BuildTuple<Number1>, ...BuildTuple<Number2>]> : never;

// let addition: Add<5, 4>; // `9`

// // Subtraction: A natural number is the result of subtracting one tuple's length from another.
// // If A > B, then there exists a tuple X such that A = B + X. The result is X.
// type Subtract<Number1 extends number, Number2 extends number> =
//   BuildTuple<Number1> extends [...(infer Remainder), ...BuildTuple<Number2>]
//   ? Length<Remainder>
//   : never;

// let subtraction: Subtract<4, 2>; // `2`

// // Multiplication through repeated addition
// type MultiAdd<N extends number, Accum extends number, Iterations extends number> =
//   Iterations extends 0
//   ? Accum
//   : MultiAdd<N, Add<N, Accum>, Subtract<Iterations, 1>>;

// type Test = MultiAdd<4, 0, 3>; // `12`
