import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { createTestingPinia } from "@pinia/testing";

import { useTodoStore } from "@/store/todo";
import TaskList from "../TaskList.vue";

describe("TaskList.vue", () => {
  let wrapper;

  beforeEach(() => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      initialState: {
        todo: {
          todo: [
            { id: 1, text: "Task 1", isFinished: false },
            { id: 2, text: "Task 2", isFinished: true },
          ],
          showFinished: true,
        },
      },
      mocks: {
        useTodoStore: () => ({
          todo: [
            { id: 1, text: "Task 1", isFinished: false },
            { id: 2, text: "Task 2", isFinished: true },
          ],
          showFinished: true,
          get filteredTodo() {
            return this.showFinished
              ? this.todo
              : this.todo.filter((t) => !t.isFinished);
          },
          addTodo: vi.fn(),
          removeTodo: vi.fn(),
          toggleTodo: vi.fn(),
          toggleFilter: vi.fn(),
          removeAll: vi.fn(),
        }),
      },
    });

    wrapper = mount(TaskList, { plugins: [pinia] });
  });

  it("should render tasks when filteredTodo has items", () => {
    expect(wrapper.text()).toContain("Task 1");
    expect(wrapper.text()).toContain("Task 2");
  });
});
