/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {
    // Check if string is empty.
    if (!str) {
        return 'This is an empty string!';
    }
    // change tolowerCase -> add to array divided by space
    const newStr = str.toLowerCase().split(" ").map(el => {
        // Capitalize first character
        return el.replace(el[0], el[0].toUpperCase());
    }).join("-"); // Connect by "-";

    // return new string(kebabCase);
    return newStr;
};

console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");

