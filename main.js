//This script fulfills the project reqs for "Whale Talk" in Codecademy

let input = "Whale talk sounds extremely made up"; //string can be changed

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log('i is '+ i);
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    //console.log('j is '+ j);
    if (input[i] === vowels[j]) {
      //console.log(input[i]);
      resultArray.push(input[i]);
      //console.log(resultArray);
     
    }
  }
};

//console.log(resultArray);

let resultString = resultArray.join().toUpperCase().replace(/,/g, '');

console.log("The message \""+ input + "\" translated to Whale Talk results in \"" + resultString + "\"!!!");
