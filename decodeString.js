// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.
// Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s){
  //check if string is decoded
  function decoded(s){
    //replace the ] with "" from the string
  let str = s.replace("]","");
  //replace the [ with "" from the string
  str = str.replace("[","");

  return str.length === s.length;
}
  while(!decoded(s)){
    let indexOfClosingBracket = -1; //index of the closing square bracket
    for(let i = s.length-1; i>=0; i--){
     if(s.charAt(i)==="]"){
      indexOfClosingBracket = i;
     }
   }
  let indexOfOpeningBracket = -1; //index of the opening square bracket
  let j = 0; //index for calculation
  while(j < indexOfClosingBracket){
    if(s.charAt(j)==="["){
      indexOfOpeningBracket = j;
    }
    j++;
  }
  let num = 0; //number in front of the opening square bracket
  let k=indexOfOpeningBracket-1;
  let p=0; //power used for calculation of num
  while(!(k<0 || isNaN(s.charAt(k)))){ //while character is number it will be used for calculation of num
    num = num + s.charAt(k) * Math.pow(10,p);
    k--;
    p++;
  }
  let left = s.substring(0,indexOfOpeningBracket-p); //string left of num
  let right = s.substring(indexOfClosingBracket+1,s.length); //string between brackets
  let mid = s.substring(indexOfOpeningBracket+1,indexOfClosingBracket); //string right from closing square bracket
  let newMid="";
  for(let i = 1; i<=num; i++){
    newMid += mid;
  }
  s = left + newMid  + right;
  }
  return s;
}
//testing
decodeString('4[ab]') // ---> 'abababab'
decodeString('2[b3[a]]') // ---> 'baaabaaa'
