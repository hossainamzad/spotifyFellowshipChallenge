function sortByStrings(s,t){
  let str = ""; //Declare str as an empty string
  const obj = {}; //An object with property and value pair where property=current letter and value=number

  //create object with data of used letters and their muber of occurence
  for (let i =0; i<s.length; i++){
    obj[s.charAt(i)] ? obj[s.charAt(i)]++ : obj[s.charAt(i)] = 1;
  }

  //This loop will generate str
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
