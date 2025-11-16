class Calculator {
  calculate(operation: "power" | "log", a: number, b: number): number;
  calculate(
    operation: "add" | "subtract" | "multiply" | "divide",
    a: number,
    b: number,
    c?: number,
    d?: number
  ): number;
  calculate(
    operation: "power" | "log" | "add" | "subtract" | "multiply" | "divide",
    a: number,
    b: number,
    c?: number,
    d?: number
  ): number {
    if (operation === "power") {
      return Math.pow(a, b);
    } else if (operation === "log") {
      if (a <= 0 || b <= 0 || a === 1) {
        throw new Error("Invalid data");
      }
      return Math.log(a) / Math.log(b);
    }

    const numbers = [a, b, c, d].filter((n) => n !== undefined);

    switch (operation) {
      case "add":
        return numbers.reduce((acc, curr) => acc + curr, 0);
      case "subtract":
        return numbers.reduce((acc, curr) => acc - curr);
      case "multiply":
        return numbers.reduce((acc, curr) => acc * curr, 1);
      case "divide":
        return numbers.reduce((acc, curr) => acc / curr);
      default:
        throw new Error("Invalid operation");
    }
  }
}

//// Test 1 - Supposed to work
const calc = new Calculator();
console.log(calc.calculate("power", 2, 3));
console.log(calc.calculate("power", 4, 1 / 2));
console.log(calc.calculate("log", 8, 2));
console.log(calc.calculate("add", 10, 5));
console.log(calc.calculate("add", 10, 5, 3));
console.log(calc.calculate("subtract", 10, 5));
console.log(calc.calculate("multiply", 2, 3, 4));
console.log(calc.calculate("divide", 100, 5, 2, 2));

//// Test 2 - Not supposed to work
// const calc = new Calculator();
// console.log(calc.calculate("power", 2, 3, 2));
// console.log(calc.calculate("add", 2));
// console.log(calc.calculate("log", 2, 3, 4, 5));
// console.log(calc.calculate("multiply", 2, 3, 4, 5, 6));
