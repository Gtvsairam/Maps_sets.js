console.log("hello world!!");

//"Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"


function remove(str){
    const Elements = [...new Set(str)];
    console.log(Elements.join(''));
}
remove('abcadeecfb');


// //"Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

let str = "abcadeecfb";
function count () {
 let x = new Map();
 let count = 0;
  for (const key of str) {
   x.set(key,count); 
  }

  for (const key of str) {
    let count = x.get(key);
    x.set(key, count + 1);
  }
  for (const [key,value] of x) {
    console.log(key,value);
  }
}
count();
