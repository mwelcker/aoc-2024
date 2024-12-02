import { assertEquals } from "@std/assert";
import { sumSafeReports } from "./main.ts";
const test = await Deno.readTextFile("input_test.txt");
const input = await Deno.readTextFile("input.txt");

Deno.test(function SafeReportsExample() {
  assertEquals(sumSafeReports(test), 2);
});

Deno.test(function SafeReports() {
  assertEquals(sumSafeReports(input), 639);
});

Deno.test(function SafeReportsWithToleration() {
  assertEquals(sumSafeReports(input, true), 674);
});
