console.log("************** DELIVERABLE 02 *********************");

const concat = (a, b) => [...a, ...b];

const alumno1 = { name: "Paco" };
const alumno2 = { name: "Antonio" };
const alumno3 = { name: "Luis" };
const alumno4 = { name: "Jose" };
const alumno5 = { name: "Manuel" };
const array1 = [alumno1, alumno2];
const array2 = [alumno3, alumno4, alumno5];

console.log("Concat", concat(array1, array2));

const concatPlus = (...array) => array.concat.apply([], array);
const array3 = [{ name: "Pepe" }];

console.log("ConcatPlus", concatPlus(array1, array2, array3));
