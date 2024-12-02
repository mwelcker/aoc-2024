const text = await Deno.readTextFile("input.txt");

export function totalDistance(text: string): number {
  const [leftList, rightList] = parseInput(text);
  const sortedLeft = leftList.slice().sort((a, b) => a - b);
  const sortedRight = rightList.slice().sort((a, b) => a - b);

  let totalDistance = 0;

  for (let i = 0; i < sortedLeft.length; i++) {
    totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
  }

  return totalDistance;
}

export function calculateSimilarityScore(text: string): number {
  const [leftList, rightList] = parseInput(text);
  const countMap: { [key: number]: number } = {};

  for (const number of rightList) {
    countMap[number] = (countMap[number] || 0) + 1;
  }

  let similarityScore = 0;

  for (const number of leftList) {
    if (countMap[number]) {
      similarityScore += number * countMap[number];
    }
  }
  return similarityScore;
}

// Function to parse the input and extract the two lists
function parseInput(input: string): [number[], number[]] {
  const lines = input.trim().split("\n");
  const leftList: number[] = [];
  const rightList: number[] = [];

  for (const line of lines) {
    const [left, right] = line.trim().split(/\s+/).map(Number);
    leftList.push(left);
    rightList.push(right);
  }

  return [leftList, rightList];
}

if (import.meta.main) {
  console.log({
    totalDistance: totalDistance(text),
    similarityScore: calculateSimilarityScore(text),
  });
}
