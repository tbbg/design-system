import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Button from "./Button.vue";

describe("Button", () => {
  it("renders with default props", () => {
    const wrapper = mount(Button, {
      slots: { default: "Click me" },
    });

    expect(wrapper.text()).toBe("Click me");
    expect(wrapper.classes()).toContain("ds-button");
    expect(wrapper.classes()).toContain("ds-button--primary");
    expect(wrapper.classes()).toContain("ds-button--medium");
  });

  it("emits click event when clicked", async () => {
    const wrapper = mount(Button, {
      slots: { default: "Click me" },
    });

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("does not emit click when disabled", async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: "Click me" },
    });

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });
});
