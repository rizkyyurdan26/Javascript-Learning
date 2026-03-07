// String Operations

let str1 = 'Hello'
console.log(str1[0])
console.log(str1.charAt(1))

// String Concatenation
let str2 = 'World'
let concatenatedString = str1 + ',' + ' ' + str2
console.log(concatenatedString)
console.log(str1.concat(', ', str2))

// String Length
console.log('Length of str1:', str1.length)
console.log('Length of concatenatedString:', concatenatedString.length)

// substring
let substring1 = concatenatedString.substring(0, 5)
console.log('Substring (0,5):', substring1)

// toUpperCase and toLowerCase
console.log('Upper Case:', concatenatedString.toUpperCase())
console.log('Lower Case:', concatenatedString.toLowerCase())