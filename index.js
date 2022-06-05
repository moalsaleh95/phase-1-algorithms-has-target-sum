function hasTargetSum(array, target) {
  // Write your algorithm here

  for (let i = 0; i < array.length; i++) {

    for (let j = i + 1; j < array.length; j++) {

      if (array[i] + array[j] === target) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  1- loop thorugh the array
  2- take the 1st item of the array and add it to the second item
  3- check if their sum equals the target
  4- if not, add the same item to the 3rd item this time.
  5- repeat until until it works, and return true.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
