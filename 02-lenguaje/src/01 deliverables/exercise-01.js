console.log("************** DELIVERABLE 01 *********************");

const head = ([a] = []) => a;
const tail = ([_a, ...other] = []) => other;
const init = (array = []) => [...array].slice(0, array.length - 1);
const last = (array = []) => [...array].slice(-1);

const alumno1 = { name: "Paco" };
const alumno2 = { name: "Antonio" };
const alumno3 = { name: "Luis" };
const alumno4 = { name: "Jose" };
const alumno5 = { name: "Manuel" };
const array = [alumno1, alumno2, alumno3, alumno4, alumno5];

console.log("Head", head(array));
console.log("Tail", tail(array));
console.log("Init", init(array));
console.log("Last", last(array));
console.log("Array", array);
