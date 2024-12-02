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

### Révision 1 : le jeu ça

T est ça.

- keyof: je veux avoir accès à toutes les clés de d'un objet comme une union, c'est cette clé de ça ou cette clé de ça ou cette clé de ça...
  idée: on déplie -> on collectionne
- mapped type: je veux pouvoir dire que pour chacuns des élements de ça. Pour cet élément de ça, puis pour cet élément de ça....
  idée: itération -> on parcourt
- conditional type: est-ce que ça est inclus dans ça ? Oui, alors quelquechose est forcément vrai et voici cette chose, et si non voici ce qui va se passer ou pas
  idée: question -> on fait bifurquer

  More examples here

#### Révision 2 Tuple TupleToObject

[tuple-to-object exercice](https://type-challenges.github.io/?question=00011-easy-tuple-to-object)

```typescript
// What is a tuple ?

// An array of
type Tuple<T> = T[];

// a readonlly tuple

type ReadonlyTuple<T> = readonly T[];

// An example ?
// An array of const values, like.. an enum?
// A row of a database and the the column's name

// A tuple of strings
type StringTuple = readonly string[];

// a tuple of composite types
type CompositeTuple = readonly [boolean, string];

// Keys as a tuple: Latitude and longitude
type TableName = "robin" | "andreas";
type CoordinatesTuples = readonly number[];
type TableRow = CoordinatesTuples[];
type Database = Record<TableName, { [key in ColumnName]: TableRow[] }[]>;

myDatabase = {
  robin: [0.323214, 0.232132],
  andreas: [232132, 323214],
};

// 1. Define the coordinate column order types (tuples)
type LatLongSpec = readonly ["latitude", "longitude"];
type LongLatSpec = readonly ["longitude", "latitude"];

// 2. Define valid column names (latitude and longitude)
type ValidColumns = "latitude" | "longitude";

// 3. Define table names
type TableName = "robin" | "andreas";

// 4. Define the structure of a coordinate row based on the column specification
// For "robin", we use LongLatSpec (longitude first), and for "andreas", we use LatLongSpec (latitude first)
type CoordinateRow<Spec extends LatLongSpec | LongLatSpec> =
  Spec extends LatLongSpec
    ? { latitude: number; longitude: number }
    : { longitude: number; latitude: number };

// 5. Define the database structure, with the correct column order based on the table name
type Database = {
  [K in TableName]: K extends "robin"
    ? CoordinateRow<LongLatSpec>[]
    : CoordinateRow<LatLongSpec>[];
};

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

type MyObject = {
  PropertyKey: unknown;
};

/*

Why Not Use PropertyKey for Object Definitions?
In most cases, when you're defining an object, you'll use a string as the key because:

String is the default for most object keys: When you define an object with keys like obj = { name: "Alice" }, the key is implicitly a string.
Objects don't naturally accept numeric keys in a way that's significantly different from strings, except for things like arrays, which have numeric indices. Symbol keys are rarely used in everyday code: While symbols are powerful for creating unique keys (useful for things like "private" properties or metadata), they're not commonly used for typical object keys.

type AnyObject = {
[key: string]: unknwown
}

Let's do it!

*/

type TupleToObject<T extends readonly PropertyKey[]> = { [P in T[number]]: P };
```

###

### infer

Exerice Awaited
