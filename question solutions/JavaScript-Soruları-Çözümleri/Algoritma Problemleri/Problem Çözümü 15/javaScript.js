// 2. Dereceden denklem köklerini programı yazdır
// 1) deltayı bul : b^2 - 4.a.c
// 2) x = -b +- kök delta / 2.a
// a!=0

const a = parseInt(prompt("a :"));
const b = parseInt(prompt("b :"));
const c = parseInt(prompt("c :"));

const delta = (b** 2) - (4 * a * c );
console.log(delta);

const x1 = (-b + Math.sqrt(delta)) / (2 * a);
const x2 = (-b - Math.sqrt(delta)) / (2 * a);
console.log(`x1 : ${x1} x2 : ${x2}`);