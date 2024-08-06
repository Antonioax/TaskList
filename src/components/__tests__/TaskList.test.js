import { it, describe, expect } from "vitest";
import TaskList from "../TaskList.vue";

describe("TaskList.vue", () => {
  it("should mount component", () => {
    expect(TaskList).toBeTruthy();
  });
});
