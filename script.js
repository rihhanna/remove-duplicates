// Good Luck 💪🏾
function removeDuplicates(arr) {
    // create an empty array to store the unique items
    let unique = [];
    // loop through the original array
    for (let i = 0; i < arr.length; i++) {
      // check if the current item is already in the unique array
      if (!unique.includes(arr[i])) {
        // if not, push it to the unique array
        unique.push(arr[i]);
      }
    }
    // return the unique array
    return unique;
  }
  console.log(removeDuplicates([1, 0, 1, 0]))
  console.log(removeDuplicates(["New", "York", "City"]))// ➞ ["New", "York", "City"]
  console.log(removeDuplicates(["Hassan", "Aisha", "Aisha"])) //➞ ["Hassan", "Aisha"]
  
