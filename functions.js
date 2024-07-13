// Check vowels 
function vowels(string) {
    const firstChar = string.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(firstChar) 
      ? `The word ${string} starts with a vowel` 
      : `The word ${string} starts with a consonant`;
  }
  
  console.log(vowels("Umbrella"));  
  console.log(vowels("Banana"));    
  

// Console log numbers from 1 to n. For multiples of 3, return triangle, for multiple of 5 
//return pentagon and for both, return octagon.

function shape(n) {
   for (let i =1; i<=n; i++) {
      if (i%3===0 && i%5===0) {
           console.log("Octagon");
      } else if (i%3===0) {
        console.log("Triangle");

      } else if (i%5===0) {
        console.log("Pentagon");
      
    } else  {
        console.log(i);
    }     
}
    
}
   
console.log (shape(15));


//Return a new string by reversing it
// function reverse(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverse("hello"));


// Reverse integers

function reverse(num) {
    let numStrg = num.toString();
    return parseInt(numStrg.split("").reverse().join(""))*Math.sign(num);
}
console.log(reverse(-1234));

// Return True if reversing a string will return the same string and false if it would return a different string.
function palindrome(str) {
    let reversed = str.split("").reverse().join("");
    return (str === reversed)? `The word ${str} is a palindrom`: `"${str}" isnt a palindrom`;
    // if (reversed === str) {
    //     return true
    // } else {
    //     return false;
    // }

}
console.log(palindrome("bob"))
console.log(palindrome("builder"))

// Return the modal (most used) character in a string

function modal (str) {
const charMap = {}
let max = 0
let maxChar =''

for (let char of str) {
    charMap[char] = charMap[char] +1 || 1
}
for (let key in charMap) {
    if (charMap[key] > max) {
        max = charMap[key]
        maxChar = key
    }
}

return maxChar

}
console.log(modal("abbcccddddd"))

// Divide an array into sub-arrays
function orignal(array, size) {
    let divided = []
    for (let i=0; i<array.length; i+=size) {
        const subArray = array.slice(i, i+size);
        divided.push(subArray);
    }
    return divided;

}
console.log(orignal([1,2,3,4],2));


// Capitalize the first letter of each word in a string
function capitalize(string) {
const words = string.split(" ");
const result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
return result.join(" ")

}
console.log(capitalize("one small step for man"))


//Check if two strings have exactly the same characters
function anagrams(stringX, stringY) {
    const sortedX = stringX.toLowerCase().split("").sort().join("");
    const sortedY = stringY.toLowerCase().split("").sort().join("");
    if(sortedX === sortedY) {
        return `${stringX} is an anagram of ${stringY}`
    }else{
        return "These words are not anagrams"
    }
}
console.log(anagrams("bob", "boob"));

console.log(anagrams("Kayak", "yakak"))



//
