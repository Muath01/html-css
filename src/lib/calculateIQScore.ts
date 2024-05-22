// Function to map test score to IQ score
export function calculateIQScore(
  testScore: number,
  testScoreMin: number,
  testScoreMax: number,
  iqScoreMin: number,
  iqScoreMax: number
): number {
  // Ensure the test score is within the valid range
  const normalizedTestScore = Math.max(
    testScoreMin,
    Math.min(testScoreMax, testScore)
  );

  // Calculate the normalized position of the test score within the range
  const position =
    (normalizedTestScore - testScoreMin) / (testScoreMax - testScoreMin);

  // Map the normalized position to the IQ score range
  const iqScore = iqScoreMin + position * (iqScoreMax - iqScoreMin);

  return iqScore;
}
