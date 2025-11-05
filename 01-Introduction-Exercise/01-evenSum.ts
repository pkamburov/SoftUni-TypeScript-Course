function evenSum(
  a: number,
  b: number,
  c: number
): boolean {
  let sum = a + b + c;
  return sum % 2 === 0 ? true : false;
}

console.log(evenSum(1, 2, 3));
console.log(evenSum(2, 2, 3));
