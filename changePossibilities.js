// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins.
// They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given an amount of money and an array of coin denominations,
// computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢),
// your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(amount, input_array) {
  // intialize an empty input_array
  let solutions = [];
  for (let i = 0; i <= amount; i++) {
      solutions[i] = 0;
  }
   // renturn 0 cents
  solutions[0] = 1;

  // loop over the items in input_array
  for (let i = 0; i < input_array.length; i++) {
    let coin = input_array[i];
    for (let j = coin; j <= amount; j++) {
        let remainder = j - coin;
        solutions[j] += solutions[remainder];
    }
  }
    return solutions[amount];
}
console.log(changePossibilities(4,[1,2,3]));
console.log(changePossibilities(5,[1,2,3,4,5]));
console.log(changePossibilities(8,[1,2,3,4,5,6,7,8]));



