function conditionalNumber<T>(arg: T extends number ? number : string) {
  if (typeof arg === "number") {
    console.log(arg.toFixed(2));
  } else {
    console.log(arg);
  }
}

conditionalNumber<number>(20.3555);
conditionalNumber<string>("wow");
conditionalNumber<boolean>("a string");
// // Errors \\
// conditionalNumber<boolean>(30);
// conditionalNumber<number>('test');
