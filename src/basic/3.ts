let stringOrNumber: string | number;
let enabledOrDisabled: "enable" | "disable";

console.log("---------------------3 task------------------");

stringOrNumber = "hello";
console.log(stringOrNumber); // Теперь переменная читается

stringOrNumber = 100;
console.log(stringOrNumber); // Теперь переменная читается

// console.log(stringOrNumber = {}); // Ошибка, т.к. {} не соответствует string | number

enabledOrDisabled = "disable";
console.log(enabledOrDisabled); // Теперь переменная читается

enabledOrDisabled = "enable";
console.log(enabledOrDisabled); // Теперь переменная читается

// console.log(enabledOrDisabled = "hello"); // Ошибка, т.к. "hello" не соответствует "enable" | "disable"
