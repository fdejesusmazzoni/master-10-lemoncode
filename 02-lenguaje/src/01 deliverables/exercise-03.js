console.log("************** DELIVERABLE 03 *********************");

const clone = (a) => ({ ...a });
const merge = (source, target) => ({ ...source, ...target });

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log("Merge", merge(a, b));
