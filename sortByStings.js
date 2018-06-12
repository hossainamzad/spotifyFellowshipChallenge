// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByStrings(s,t){
  let str = ""; //Declare str as an empty string
  const obj = {}; //An object with property and value pair where property=current letter and value=number
  for (let i =0; i<s.length; i++){
    obj[s.charAt(i)] ? obj[s.charAt(i)]++ : obj[s.charAt(i)] = 1;
  }
  for (let i = 0; i<t.length; i++){
    while(obj[t.charAt(i)]>0){
      for (let j = 0; j < obj[t.charAt(i)]; j++){
          str = str + t.charAt(i);
          obj[t.charAt(i)]--;}
      }
  }
  return str;
}

sortByStrings("good", "odg");
