// Solution 1 - simple Solution

// function httpCodes(response: {
//   code: number;
//   text: string;
//   printChars?: number;
// }) {
//   if (response.printChars) {
//     console.log(
//       response.text.slice(0, response.printChars)
//     );
//   } else {
//     console.log(response.text);
//   }
// }

// Solution 2 - with Advanced Types
type TextCodes = { code: 200 | 201 | 301; text: string };
type SliceTextCodes = {
  code: 400 | 404 | 500;
  text: string;
  printChars?: number;
};

function httpCodes(response: TextCodes | SliceTextCodes) {
  switch (response.code) {
    case 200:
    case 201:
    case 301:
      console.log(response.text);
      break;
    case 400:
    case 404:
    case 500:
      console.log(response.text.slice(0, response.printChars));
      break;
  }
}

httpCodes({ code: 200, text: "OK" });
httpCodes({ code: 201, text: "Created" });
httpCodes({
  code: 400,
  text: "Bad Request",
  printChars: 4,
});
httpCodes({ code: 404, text: "Not Found" });
httpCodes({ code: 404, text: "Not Found", printChars: 3 });
httpCodes({
  code: 500,
  text: "Internal Server Error",
  printChars: 1,
});
