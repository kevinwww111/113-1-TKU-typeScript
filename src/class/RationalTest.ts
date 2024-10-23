import { Rational } from './Rational';

const r1 = new Rational(1, 2);
const r2 = new Rational(3, 4);

console.log(`r1: ${r1.toString()}`);  // Output: r1: 1/2
console.log(`r2: ${r2.toString()}`);  // Output: r2: 3/4

const sum = r1.add(r2);
console.log(`r1 + r2: ${sum.toString()}`);  // Output: r1 + r2: 5/4

const difference = r1.subtract(r2);
console.log(`r1 - r2: ${difference.toString()}`);  // Output: r1 - r2: -1/4

const product = r1.multiply(r2);
console.log(`r1 * r2: ${product.toString()}`);  // Output: r1 * r2: 3/8

const quotient = r1.divide(r2);
console.log(`r1 / r2: ${quotient.toString()}`);  // Output: r1 / r2: 2/3