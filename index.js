// example of let


let x = 10;
if (x > 5) {
  let y = 2 * x;
  console.log(y); // Output: 20
}
console.log(x); // Output: 10
console.log(y); // Output: Uncaught ReferenceError: y is not defined

// example of var

var i = 10;
if (i > 5) {
  var j = 2 * i;
  console.log(y); // Output: 20
}
console.log(i); // Output: 10
console.log(j); // Output: 20

// example of const

const p = 10;
if (p > 5) {
  const q= 2 * p;
  console.log(q); // Output: 20
}
console.log(p); // Output: 10
console.log(q); // Output: Uncaught ReferenceError: y is not defined