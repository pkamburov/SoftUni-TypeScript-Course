type stringOrNumber<T> = T extends number ? number : string;

function conditionalNumber<T>(arg: stringOrNumber<T>) {
  if (typeof arg === "number") {
    console.log(arg.toFixed(2));
  } else {
    console.log(arg);
  }

  //console.log(typeof arg === 'number' ? param.toFixed(2) : param);
}

conditionalNumber<number>(20.3555);
conditionalNumber<string>("wow");
conditionalNumber<boolean>("a string");
// // Errors \\
// conditionalNumber<boolean>(30);
// conditionalNumber<number>('test');
