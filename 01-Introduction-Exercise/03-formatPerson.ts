function formatPerson(
  param: [string, number]
): string {
  return `Hello, my name is ${param[0]} and my age is ${param[1]}`;
}

console.log(formatPerson(["Ivan", 25]));
console.log(
  formatPerson(["Georgi", 32])
);

// formatPerson(['Ivan', 'Ivanov', 25]);
// formatPerson(['Ivanov']);
// formatPerson([]);
