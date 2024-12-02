import { assertEquals } from "@std/assert";
import { calculateSimilarityScore } from "./main.ts";
import { totalDistance } from "./main.ts";

const text = await Deno.readTextFile("input_test.txt");

Deno.test(function totalDistanceTest() {
  assertEquals(totalDistance(text), 11);
});

Deno.test(function SimilarityScoreTest() {
  assertEquals(calculateSimilarityScore(text), 311);
});
