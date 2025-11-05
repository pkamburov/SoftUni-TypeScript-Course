function customTypeGuard(
  param: unknown
): param is string[] {
  return param &&
    Array.isArray(param) &&
    param.length > 0 &&
    param.every(
      (el) => typeof el === "string"
    )
    ? true
    : false;
}

console.log(customTypeGuard({}));
console.log(
  customTypeGuard({ test: "one" })
);
console.log(customTypeGuard([]));
console.log(customTypeGuard(undefined));
console.log(customTypeGuard(null));
console.log(customTypeGuard([12, 13]));
console.log(
  customTypeGuard(["test", 123])
);
console.log(
  customTypeGuard(["a", "b", "c"])
);
