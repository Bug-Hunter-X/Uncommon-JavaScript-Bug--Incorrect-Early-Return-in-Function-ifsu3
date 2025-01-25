# Uncommon JavaScript Bug: Incorrect Early Return

This repository demonstrates a subtle bug in JavaScript related to incorrect early returns within a function. The function `myFunc` is intended to divide two numbers, but it incorrectly returns 0 if either input is 0, instead of handling the division by zero error. This leads to unexpected behavior when one of the inputs is zero. 

## Bug Description
The `myFunc` function does not correctly handle the case where either input (`a` or `b`) is 0. It returns 0 prematurely, masking a potential `DivisionByZero` error. 

## How to Reproduce
1. Clone this repository.
2. Run `bug.js` with different input values. Observe the output when either 'a' or 'b' is 0 or other values.
3. Notice the incorrect behavior when either input is 0.