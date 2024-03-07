// question 1
//Extract the last four characters from the string below;"extravaganza"
let word = "extravaganza"
let result = word.substring(8,0);
console.log({result});

// question 2
//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

let word1 = "The quick fox jumped "
let word2 = "over the lazy dog"
console.log(`${word1} eat ${word2}`)

//question 3
//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

const story = "The quick brown fox jumps over the lazy dog";
console.log((story.match(/the/g)).length);
console.log((story.match(/brown/g)).length);

// question 4
//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

const string1 = "The pupils are reading in the library";
console.log({index: string1.indexOf('are')});

const string2 = "The child was sitting on the table before it fell";
console.log({index:string2.indexOf('sitting')});

// question 5
//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"

 let text = "wonderful"
 let uppercaseText= text.toUpperCase();
 console.log({uppercaseText})
 let words = "amazing, UndERneath";
 let lowercaseWords = words.toLowerCase();
  console.log({lowercaseWords})
