for (const k of Object.keys(obj))  // enumerable own keys
for (const [k, v] of Object.entries(obj))  // enumerable own [key, value]s
for (const k of Object.getOwnPropertyNames(obj)) // all own keys
for (const s of Object.getOwnPropertySymbols(obj)) // all own symbols
for (const k of Reflect.ownKeys(obj)){} // all own keys (include symbols)

