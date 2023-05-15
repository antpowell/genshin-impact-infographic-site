import { assert } from "https://deno.land/std@0.186.0/testing/asserts.ts";

Deno.test({
  name: "a test case",
  fn() {
    const someCondition = true;
    assert(someCondition);
  },
});