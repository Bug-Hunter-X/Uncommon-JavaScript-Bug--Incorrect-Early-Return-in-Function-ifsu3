function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect early return
  }
  return a / b; 
}