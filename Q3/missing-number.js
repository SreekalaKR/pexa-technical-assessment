//Funtion to find missing number
function findMissingNumber(arr) {
    let n = arr.length;

    // Expected sum from 1 to (n+1)
    let expectedSum = (n + 1) * (n + 2) / 2;

    // Actual sum of array
    let actualSum = arr.reduce((total, num) => total + num, 0);

    return expectedSum - actualSum;
}

// Provide sample arrays here
const arr1 = [3, 7, 1, 2, 8, 4, 5];
const arr2 = [1, 2, 4, 5, 6];

console.log("Missing number is: " ,findMissingNumber(arr1)); 
console.log("Missing number is: ",findMissingNumber(arr2)); 