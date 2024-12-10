# 🚀 TypeScript Kata Progression

L'idée est de progresser ensemble, toutes les 2 ou 3 semaines sur des kata typescript.

## 📚 Ressources

- [TypeScript Tutorial Exercises](https://type-challenges.github.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/)

### 🤝 Règles

- on apprend un nouveau concept avec un exercice.

- on joue tous ensemble mais on répond individuellement. Celui qui a trouvé doit être capable de l'expliquer ou d'aiguiller l'autre en essayant de procéder par étapes

## 🎯 Séance 1: 19 novembre 2024

### 🧠 Concepts

Concepts à réviser :

- [keyof operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

### 💻 Exercices

- Hello World: [TypeScript Tutorial Exercises](https://type-challenges.github.io/?question=00013-warm-hello-world)

- Pick: [TypeScript Tutorial Exercises](https://type-challenges.github.io/?question=00004-easy-pick)

- First Of Array: [TypeScript Tutorial Exercises](https://type-challenges.github.io/?question=00014-easy-first)

- Readonly: [TypeScript Tutorial Exercises](https://type-challenges.github.io/?question=00007-easy-readonly)

## 🎯 Séance 2: 3 décembre 2024

### 1️⃣ Révision : le jeu du ça

T est ça.

- **keyof**: je veux avoir accès à toutes les clés de d'un objet comme une union, c'est cette clé de ça ou cette clé de ça ou cette clé de ça...
  idée: on déplie -> on collectionne
- **mapped type**: je veux pouvoir dire que pour chacuns des élements de ça. Pour cet élément de ça, puis pour cet élément de ça....
  idée: itération -> on parcourt
- **conditional type**: est-ce que ça est inclus dans ça ? Oui, alors quelquechose est forcément vrai et voici cette chose, et si non voici ce qui va se passer ou pas
  idée: question -> on fait bifurquer

  More examples here

### 2️⃣ Révision: Tuple -> TupleToObject

Copy to [playground](https://www.typescriptlang.org/play/)

```typescript
// What is a tuple ?

// An array of
type Tuple<T> = T[];

// a readonlly tuple

type ReadonlyTuple<T> =

// An example ?
// An array of const values, like.. an enum?
// A row of a database and the the column's name

// A tuple of strings
type StringTuple = r

// a tuple of composite types (boolean and string)
type CompositeTuple =

// Small exercise : latitude or longitude ?

// 1. Define the coordinate column order types (tuples)
type LatLongSpec =
type LongLatSpec =


// 2. Define table names
type TableName = "robin" | "andreas";

// Define the order
type CoordinateRow

// 5. Define the database structure, with the correct column order based on the table name
type Database =

// Example usage
const myDatabase: Database = {
  robin: [
    { longitude: 0.232132, latitude: 0.323214 }, // longitude comes first for robin
    { longitude: 0.632132, latitude: 0.523214 },
  ],
  andreas: [
    { latitude: 323214, longitude: 232132 }, // latitude comes first for andreas
  ],
};

// Accessing data
const robinData = myDatabase.robin; // Array of CoordinateRow for the "robin" table
const andreasData = myDatabase.andreas; // Array of CoordinateRow for the "andreas" table

console.log(robinData);
console.log(andreasData);
```

### 3️⃣ TupleToObject

Head over to [typescript playground](https://www.typescriptlang.org/play/#code/PQKgUABBCM0QtBAKgVwA4BsCmEAuB7CAeQCMArLAY10gXnodpIE8IBnASwDt98uIAFAAFOPPgEoIAYiwBDNqyn5yVXPADWWZmzC0p+iAEUUWNrg59dUAOIcAbln6ynAJxezmAGjzuubAGb4LgC2EBy4YVwEEM4QyhTUeMxoOM4AJngAFjiazMB2shgmEMEoZhAkONxZOGgu+HYcaVgZsm4eAHRWEABiQRBYAB6ywZhYAFzdAAYzuDpQlHzluOjYEAC8EADaAOS4phiyO947wfjNGBAAzMcQp+dYlwAat-cXEACaOwC6MWwQiz8NFouGSOBcphQGAim1QYyQ+FICVwAB5QSl8P48KssAA+CDAYADQYpagtCAAbzu+zYhx242pByOJzO7xuDLej2ur1ZXJeHN5zx5D0uXwFIs+OwAvrQZlNuviAGocLAAdzi-FsuAAEigSAzMrhcGg2ONCXNKJkOmQ2B0ggBzYCwMAgYC6UAQAD63p9vp9n3wKBcEAAwg8INqsBCvX7Y56IK7dOicHDsAikaoUUhifsuGl-hDZGk+BhWM5mFtvvjNuX3SAY3HfchTBEQ-JTA3G96E26OKMghFk5SIABRACOKEK3hHJNUEClEH89VCOyEyfglsK2C49tMwBQ5gwbB2ukByxxG22eyZwrZt7599FPz+AKWNDPg5xADkUMFKsHNi2aBvAAJm8K5vAAFl+eRXyBMAP3YZhgjgTYAGVkJIfAMAEaBxAQt8kOCEDLwwv9sIEED8MQlYxjIrDLkAhQUO8ZiQJg-4PwIoFsTGABZDhBkvICThA24ILuSDbmY6AOLgswkzBAF23+QDaBnUlUXHScMCzHF0xUag0TBTFeOwXFvCpa9aSODkaTpFkJXZO5BW5Rz3n5FyJRedyuTFLz3i+edcQs9TZyM7TCj0+FEUM1Fk1M2jsB-P8ows4doAZYCIBAhkwOuBkJMghlIOC0KoA0zNIt01MsAM5FjIxLEkqwejsPSqkthk74GQSrEZO8LrkPY3qTP64ays8MLNJRarorTWKGr6sysAEwYOpgLLRPpO4xPAwqTikjkpMG7rRqaoi4ClEKpu+d0iTXNh4CGTTnrcIIwCHKN6gA5B9MWzMthEnLvksqUqzrTsu16INcGyYM0P2E0ocbHswFAWh8TQzI2hwZhA2DNhsIPCw-ANI0TTNYALStG07RcR1YGAZw2FVKNMYgZU1XYYnzCWcnjVNc02Eta1bQdJ1oGAImij5vwOb4oIcBDHGMG3XdTQgQ1Bapmmxfp+0XTdIA) and copy the code below

```typescript
// How to define the property of an object ?

// A string -> {"c'est vrai ?": true}
// a symbol : a unique primitive data type
/*

But under the hood, all object keys are ultimately converted to strings, even if the
key is a number. This is because JavaScript objects treat
keys as strings (except for Symbol-based keys).

Even if you use a non-string value (like a number or symbol)
 as an object key, JavaScript will implicitly convert it to a string.

Symbols ?

Symbols are a primitive data type introduced in ES6 that are unique
and immutable. They can be used as keys in objects without
risk of collision with other keys.

const sym = Symbol('description');
const obj = { [sym]: 'value with symbol key' };

OK now how do you represent any property : with PropertyKey

In TypeScript, property keys (i.e., the keys of an object) can be either:

Strings
Numbers
Symbols (though less common)

Ok how how you represent any object then?

*/

type MyObject =

/*

Why Not Use PropertyKey for Object Definitions?
In most cases, when you're defining an object, you'll use a string as the key because:

String is the default for most object keys: When you define an object with keys like obj = { name: "Alice" }, the key is implicitly a string.
Objects don't naturally accept numeric keys in a way that's significantly different from strings, except for things like arrays, which have numeric indices. Symbol keys are rarely used in everyday code: While symbols are powerful for creating unique keys (useful for things like "private" properties or metadata), they're not commonly used for typical object keys.

*/

type AnyObject =
// You're ready ! Let's do it!

type TupleToObject<> =
```

## 🎯 Séance 3: 10 décembre 2024

### 1️⃣ Pick First

[Exercice](https://type-challenges.github.io/?question=00014-easy-first)

### 2️⃣ Length

[Exercice](https://type-challenges.github.io/?question=00018-easy-tuple-length)

### 3️⃣ Exclude

[Exercice](https://type-challenges.github.io/?question=00043-easy-exclude)

### 4️⃣ If

[Exercice](https://type-challenges.github.io/?question=00268-easy-if)

### 5️⃣ Concat

[Exercice](https://type-challenges.github.io/?question=00533-easy-concat)
