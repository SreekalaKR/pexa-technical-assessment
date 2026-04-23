# Test Questions

This document contains a set of frontend development test questions covering Angular and JavaScript concepts.

---

## 1. Paginated Table in Angular

Using Angular, create a component that displays a paginated table of data fetched from the REST API:

### API:
https://reqres.in/api/users/

### Requirements:
- Implement pagination where users can navigate between pages dynamically
- Add a dropdown to select the number of rows per page (for example: 5, 10, 20)
- Display page numbers at the bottom of the table for easy navigation
- Fetch data dynamically from the API on each page change

---

## 2. Implement a Debounce Function

Write a function `debounce` that limits the rate at which a function `func` is called.

### Requirements:
- The debounce function should return a new function
- It should only call `func` after it stops being invoked for a specified wait time (in milliseconds)

---

## 3. Find the Missing Number in a Sequence

You are given an array containing `n` distinct numbers taken from the range 1 to (n+1). One number is missing from the sequence.

### Requirements:
- Find the first missing number
- If multiple numbers are missing, return only the first missing number

### Function Signature:
```javascript
function findMissingNumber(arr) {
  // Your code here
}

const arr1 = [3, 7, 1, 2, 8, 4, 5];
const arr2 = [1, 2, 4, 5, 6];

console.log(findMissingNumber(arr1)); // Output: 6
console.log(findMissingNumber(arr2)); // Output: 3
`````
---

## 4. Modify User List in HTML

Assume the following HTML structure exists:

Tasks:
Write JavaScript code to add a new user "David" to the list  
Modify the script to remove the first user from the list  

---

## 5. Form Validation in JavaScript

Given a login form in HTML:

Requirements:
Validate that both fields are not empty when the form is submitted  
If validation fails, display an error message inside the #error-message div  
If validation passes, log "Form Submitted" to the console  
