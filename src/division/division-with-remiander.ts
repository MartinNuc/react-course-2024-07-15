type Result = {
  remainder: number;
  result: number;
}

export function divideWithRemainder(a: number, b: number): Result {
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }
  
  const result = Math.floor(a / b);
  const remainder = a % b;
  
  return {
    result,
    remainder
  };
}