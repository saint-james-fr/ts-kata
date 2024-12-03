#### Step 1: Define the coordinate column order types

- Define `LatLongSpec` as a tuple `["latitude", "longitude"]`.
- Define `LongLatSpec` as a tuple `["longitude", "latitude"]`.

```typescript
type LatLongSpec = readonly ["latitude", "longitude"];
type LongLatSpec = readonly ["longitude", "latitude"];
```

#### Step 2: Define the valid column names

- Define `ValidColumns` as a union of `"latitude"` and `"longitude"`.

```typescript
type ValidColumns = "latitude" | "longitude";
```

#### Step 3: Define table names

- Define `TableName` as a union of `"robin"` and `"andreas"`.

```typescript
type TableName = "robin" | "andreas";
```

#### Step 4: Define the coordinate row structure

- Define `CoordinateRow` as a conditional type based on the column order (`LatLongSpec` or `LongLatSpec`).

```typescript
type CoordinateRow<Spec extends LatLongSpec | LongLatSpec> =
  Spec extends LatLongSpec
    ? { latitude: number; longitude: number }
    : { longitude: number; latitude: number };
```

#### Step 5: Define the database structure

- Use a mapped type to define the `Database` type.
- For `robin`, use `LongLatSpec` (longitude first).
- For `andreas`, use `LatLongSpec` (latitude first).

```typescript
type Database = {
  [K in TableName]: K extends "robin"
    ? CoordinateRow<LongLatSpec>[]
    : CoordinateRow<LatLongSpec>[];
};
```

#### Step 6: Create an example database

- Create a `myDatabase` instance with sample data for both `"robin"` and `"andreas"`.

```typescript
const myDatabase: Database = {
  robin: [
    { longitude: 0.232132, latitude: 0.323214 },
    { longitude: 0.632132, latitude: 0.523214 },
  ],
  andreas: [{ latitude: 323214, longitude: 232132 }],
};
```

#### Step 7: Access and print the data

- Access the data for `robin` and `andreas` tables and print them.

```typescript
const robinData = myDatabase.robin;
const andreasData = myDatabase.andreas;

console.log(robinData);
console.log(andreasData);
```

---

### Challenge:

Try to modify the structure to handle more tables or add another coordinate specification (e.g., `EastWestSpec` for `east` and `west`). How can you extend this design?
