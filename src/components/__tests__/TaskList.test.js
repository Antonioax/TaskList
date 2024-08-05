import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { createTestingPinia } from "@pinia/testing";

import { useTodoStore } from "@/store/todo";
import TaskList from "../TaskList.vue";
import { setActivePinia } from "pinia";

describe("TaskList.vue", () => {
  let wrapper;
  let pinia;

  beforeEach(() => {
    pinia = createTestingPinia({
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

    setActivePinia(pinia);

    wrapper = mount(TaskList, { global: { plugins: [pinia] } });
  });

  it("should render tasks when filteredTodo has items", async () => {
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("Task 1");
    expect(wrapper.text()).toContain("Task 2");
  });

  it("should not render finished tasks when showFinished === false", async () => {
    const store = useTodoStore();
    store.showFinished = false;

    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("Task 1");
    expect(wrapper.text()).not.toContain("Task 2");
  });
});
