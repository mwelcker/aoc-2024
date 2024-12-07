export function calculateProgram(input: string): number {
  const splittedByOperation = input.split("mul(");
  const result = splittedByOperation.map((operation) => {
    const numbersToMultiply = operation.split(")")[0];
    const firstNumber = Number(numbersToMultiply.split(",")[0]);
    const secondNumber = Number(numbersToMultiply.split(",")[1]);
    const result = firstNumber * secondNumber;
    return Number.isNaN(result) ? 0 : result;
  });
  return result.reduce((acc, curr) => acc + curr, 0);
}

export function calculateProgramWithConditionals(input: string): number {
  const splittedByOperation = input
    .split("do(")
    .map((operation) => operation.split("don't(")[0]);
  const mergedString = splittedByOperation.join("");
  return calculateProgram(mergedString);
}
