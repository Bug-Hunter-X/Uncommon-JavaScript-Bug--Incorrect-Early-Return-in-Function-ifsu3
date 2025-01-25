function myFunc(a, b) {
  if (b === 0) {
    throw new Error('Division by zero'); // Handle division by zero
  } else if (a === 0) {
    return 0; // Correct handling for 'a' being zero
  }
  return a / b; 
}