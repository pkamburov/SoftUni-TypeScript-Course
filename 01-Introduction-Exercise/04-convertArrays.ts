function convertArrays(
  data: string[]
): [string, number] {
  const concatenatedString =
    data.join("");
  const concatenatedStringLength =
    concatenatedString.length;

  return [
    concatenatedString,
    concatenatedStringLength,
  ];
}

console.log(
  convertArrays(["How", "are", "you?"])
);

console.log(
  convertArrays([
    "Today",
    " is",
    " a ",
    "nice",
    " ",
    "day for ",
    "TypeScript",
  ])
);
