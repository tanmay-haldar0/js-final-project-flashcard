//? Problem 1

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

const sum = sumArray([1, 2, 3, 4, 5]);

console.log(sum); //* Output: 15



//? Problem 2

function findMaxNumber(arr) {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}

const maxNumber = findMaxNumber([10, 5, 8, 20, 3]);

console.log(maxNumber); //* Output: 20




//? Problem 3

function filterOddNumbers(arr) {
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers[oddNumbers.length] = arr[i];
        }
    }
    return oddNumbers;
}

const oddNumbers = filterOddNumbers([1, 2, 3, 4, 5]);

console.log(oddNumbers); //* Output: [1, 3, 5]




//? Problem 4

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

const isPalindromeResult = isPalindrome('radar');
const isNonPalindromeResult = isPalindrome('hello');

console.log(isPalindromeResult); //* Output: true
console.log(isNonPalindromeResult); //* Output: false

//? Problem 5

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let totalSum = 0;
    let currentSum = 0;

    for (let i = 1; i <= n; i++) {
        totalSum += i;
    }

    for (let num of arr) {
        currentSum += num;
    }

    return totalSum - currentSum;
}

const missingNumber = findMissingNumber([1, 2, 3, 5, 6]);

console.log(missingNumber); //* Output: 4

//? Problem 6

function findDuplicates(arr) {
    const duplicates = [];
    const count = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        count[num] = (count[num] || 0) + 1;
        if (count[num] === 2) {
            duplicates[duplicates.length] = num;
        }
    }

    return duplicates;
}

const duplicateNumbers = findDuplicates([1, 2, 3, 2, 4, 5, 4, 6]);

console.log(duplicateNumbers); //* Output: [2, 4]
