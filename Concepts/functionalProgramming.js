/*
    Is a programming paradigm
    to threat all code as parts or as functions
    composing by using peer functions, without changing data

    It avoids using looping, mutations, share states and more.

    It works based in immutability, the data should not be changed
*/

// Imperative Approach

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evens = [];

for (num of nums) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}

// Functional Approach

const evensF = nums.filter((n) => n % 2 === 0);

// FunctionAL Programming

/// Pure Functions

function pureSquareValue(num) {
  return num * num;
}

function addToArray(arr, value) {
  return [...arr, value];
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/*
    Higher order functions,
    which are functions that receives
    another function as argument, returns a
    function or both
*/

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}


/* 
    Currying is taking a function that can be called
    with any number of arguments if you call it with less
    arguments it returns a "smaller" partial call that you
    can do with the remaining arguments
*/

/// Basic Currying

function addThreeNumbersCurry(a)  {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

addThreeNumbersCurry(1)(2)(3); // 6

/// Advanced Currying

function advCurry(a, b, c)  {
    return a + b + c
}

function curryFunction(func) {
    return function curried (...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

const advancedCurry = curryFunction(advCurry);

advancedCurry(1, 2, 3); // 6
advancedCurry(1, 2); // 3