function optionalMultiplier(
  a?: string | number,
  b?: string | number,
  c?: string | number
): number {
  return Number(a || 1) * Number(b || 1) * Number(c || 1);
}

console.log(optionalMultiplier("3", 5, "10"));
console.log(optionalMultiplier("2", "2"));
console.log(optionalMultiplier(undefined, 2, 3));
console.log(optionalMultiplier(7, undefined, "2"));
console.log(optionalMultiplier());
