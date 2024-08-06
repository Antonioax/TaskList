import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { createTestingPinia } from "@pinia/testing";

import { useTodoStore } from "@/store/todo";
import TaskList from "../TaskList.vue";
import { setActivePinia } from "pinia";

describe("TaskList.vue", () => {
  let wrapper;
  let pinia;
  let store;

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
    });

    setActivePinia(pinia);
    store = useTodoStore(); // Get the store instance

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

  it("should call toggleTodo when the toggle button is clicked", async () => {
    const toggleTodoSpy = vi.spyOn(store, "toggleTodo");

    // Debugging statements
    const toggleButton = wrapper.find("button.toggleTodo");
    console.log("Button exists:", toggleButton.exists());

    await toggleButton.trigger("click");

    await wrapper.vm.$nextTick();

    // Debugging statements
    console.log("toggleTodoSpy calls:", toggleTodoSpy.mock.calls);

    expect(toggleTodoSpy).toHaveBeenCalledWith(1);
    expect(toggleTodoSpy).toHaveBeenCalledTimes(1);
  });
});
