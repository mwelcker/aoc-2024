import { assertEquals } from "@std/assert";
import { calculateProgram } from "./main.ts";
import { calculateProgramWithConditionals } from "./main.ts";
const test = await Deno.readTextFile("input_test.txt");
const test2 = await Deno.readTextFile("input_test_2.txt");
const input = await Deno.readTextFile("input.txt");

Deno.test(function TestInput() {
  assertEquals(calculateProgram(test), 161);
});

Deno.test(function MainInput() {
  assertEquals(calculateProgram(input), 167650499);
});

Deno.test(function TestInput() {
  assertEquals(calculateProgramWithConditionals(test2), 48);
});

Deno.test(function TestInput() {
  assertEquals(calculateProgramWithConditionals(input), 95846796);
});
