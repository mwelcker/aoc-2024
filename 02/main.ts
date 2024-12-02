function isReportSafe(levels: number[]): boolean {
  const isAscending = levels[0] < levels[levels.length - 1];

  for (let i = 0; i < levels.length - 1; i++) {
    const difference = levels[i] - levels[i + 1];

    if (
      (isAscending && difference > 0) ||
      (!isAscending && difference < 0) ||
      Math.abs(difference) > 3 ||
      Math.abs(difference) < 1
    ) {
      return false;
    }
  }

  return true;
}

function isReportSafeWithToleration(levels: number[]): boolean {
  return levels.some((_, index) => {
    const levelsWithoutOne = [...levels];
    levelsWithoutOne.splice(index, 1);
    return isReportSafe(levelsWithoutOne);
  });
}

export function sumSafeReports(input: string, errorToleration = false): number {
  const levelGroups = input
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  const safeReportsCount = levelGroups.reduce((count, levels) => {
    const isSafe = errorToleration
      ? isReportSafeWithToleration(levels)
      : isReportSafe(levels);
    return count + (isSafe ? 1 : 0);
  }, 0);

  return safeReportsCount;
}
