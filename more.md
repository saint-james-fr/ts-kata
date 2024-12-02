# Révision 1

#### L'idée : **Déplier → Collectionner**

Tu veux accéder à **toutes les clés** d’un objet et les collecter sous forme d'une **union** de types. C’est ce qu’on fait avec l’opérateur `keyof`. Cela te permet de "déplier" un objet pour récupérer ses clés, et ensuite de les **collectionner** dans une **union**.

##### Exemple :

Si tu as un objet et que tu veux récupérer une union de ses clés, tu utilises `keyof`.

```typescript
type Person = {
  name: string;
  age: number;
  isActive: boolean;
};

type PersonKeys = keyof Person; // "name" | "age" | "isActive"
```

Ici, `PersonKeys` est un **type union** des clés de `Person`, à savoir `"name"`, `"age"` et `"isActive"`. Tu peux l'utiliser pour vérifier que tu as des clés valides dans un contexte où tu veux travailler uniquement avec des clés existantes de l'objet.

#### Pensée : **Déplier → Collectionner**

- **Déplier** un objet, c’est prendre chaque clé et la rendre **disponible** pour utilisation.
- Ensuite, **collectionner**, c’est les regrouper sous forme d'une **union de types** qui permet de manipuler toutes les clés à la fois.

**Concept général** : Tu crées une **union de valeurs** à partir des clés d’un objet (une sorte de **"expand/reduce"** des propriétés de l’objet).

---

#### L'idée : **Itération → Parcours**

Tu veux créer un **nouveau type** à partir des éléments d'un objet, en itérant sur chaque propriété de l’objet, et en appliquant une transformation à chaque élément. C’est ce qu’on fait avec les **mapped types**.

Les **mapped types** permettent de définir un nouveau type en transformant chaque élément d'un type existant.

##### Exemple :

Si tu veux créer un type où toutes les valeurs d’un objet sont rendues optionnelles, tu peux le faire avec un **mapped type** :

```typescript
type Person = {
  name: string;
  age: number;
  isActive: boolean;
};

type OptionalPerson = {
  [K in keyof Person]?: Person[K]; // rendre chaque propriété de Person optionnelle
};
```

Ici, `OptionalPerson` est un type où chaque propriété de `Person` devient optionnelle grâce à l'itération sur chaque clé (`keyof Person`) et à l’ajout de `?`.

#### Pensée : **Itération → Parcours**

- Tu **itères** sur chaque clé de l’objet et tu peux lui appliquer une **transformation**, par exemple rendre toutes les propriétés optionnelles, modifier leur type, ou ajouter des contraintes supplémentaires.
- Ce processus est une forme d'**itération** (boucle implicite), où tu parles de chaque élément **un à un** pour appliquer une règle.

**Concept général** : Le mapped type transforme un objet en parcourant ses clés et en les appliquant à un nouvel ensemble de règles (ex. rendre les valeurs optionnelles, changer le type, etc.).

---

#### L'idée : **Question → Bifurquer**

Avec **les types conditionnels**, tu poses une **question** à TypeScript pour savoir si un type satisfait à une condition. Si la condition est vraie, tu renvoies un type, sinon un autre. Cela permet de **bifurquer** la logique en fonction de la structure du type.

##### Exemple :

Imaginons que tu veux savoir si un type donné est une **string** ou non. Si c'est une string, tu vas lui appliquer un traitement, sinon un autre :

```typescript
type IsString<T> = T extends string
  ? "C'est une string"
  : "Ce n'est pas une string";

type Test1 = IsString<string>; // "C'est une string"
type Test2 = IsString<number>; // "Ce n'est pas une string"
```

Dans cet exemple, le type `IsString` interroge (`extends`) le type `T`. Si `T` est une **string**, il renverra `"C'est une string"`, sinon `"Ce n'est pas une string"`. C’est une bifurcation entre deux chemins possibles, basé sur un test conditionnel.

#### Pensée : **Question → Bifurquer**

- **Questionner** un type en utilisant `extends` pour savoir s'il satisfait une condition.
- Si la condition est vraie, tu appliques **un type spécifique**, sinon tu appliques **un autre type** (en fonction de la condition). Cela permet de manipuler des types de manière **dynamique**.

**Concept général** : Les types conditionnels permettent de définir des règles qui testent des types et **bifurquent** la logique en fonction du résultat du test.

---

Voici un exemple qui combine ces trois idées :

Imaginons un objet où tu veux :

1. **Accéder à toutes ses clés** (avec `keyof`),
2. **Transformer ses propriétés** (avec un mapped type),
3. **Appliquer une condition** sur les types des propriétés (avec un type conditionnel).

```typescript
type Person = {
  name: string;
  age: number;
  isActive: boolean;
};

// Accéder aux clés de l'objet (keyof)
type PersonKeys = keyof Person; // "name" | "age" | "isActive"

// Transformer les propriétés de l'objet (mapped type)
type OptionalPerson = {
  [K in keyof Person]?: Person[K]; // Chaque propriété devient optionnelle
};

// Appliquer une condition sur les types des propriétés (conditional type)
type PropertyType<T, K extends keyof T> = T[K] extends string
  ? "String type"
  : "Non-string type";

type NameType = PropertyType<Person, "name">; // "String type"
type AgeType = PropertyType<Person, "age">; // "Non-string type"
```
