import { assertEquals } from "@std/assert";
import { sumSafeReports } from "./main.ts";
const test = await Deno.readTextFile("input_test.txt");
const input = await Deno.readTextFile("input.txt");

Deno.test(function HelloWorld() {
  assertEquals(2, 2);
});
