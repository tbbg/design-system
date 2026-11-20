import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ChatDock from "../organisms/ChatDock.vue";
import GameLayout from "../layout/GameLayout.vue";
import Panel from "./Panel.vue";
import PlayerIdentity from "./PlayerIdentity.vue";
import Stat from "./Stat.vue";

describe("game foundation components", () => {
  it("provides named, responsive game layout regions", () => {
    const wrapper = mount(GameLayout, {
      slots: {
        header: "Header",
        left: "Left",
        default: "Game board",
        right: "Players",
        chat: "Chat",
      },
    });

    expect(wrapper.find("main").text()).toBe("Game board");
    expect(wrapper.find('aside[aria-label="Game navigation"]').text()).toBe(
      "Left",
    );
    expect(wrapper.find('aside[aria-label="Player information"]').text()).toBe(
      "Players",
    );
    expect(wrapper.find(".ds-game-layout__chat").text()).toBe("Chat");
  });

  it("renders a panel with title, subtitle, and content", () => {
    const wrapper = mount(Panel, {
      props: { title: "Inventory", subtitle: "Carried items" },
      slots: { default: "Three items" },
    });

    expect(wrapper.find("h2").text()).toBe("Inventory");
    expect(wrapper.text()).toContain("Carried items");
    expect(wrapper.text()).toContain("Three items");
  });

  it("renders stat values and units accessibly", () => {
    const wrapper = mount(Stat, {
      props: { label: "Health", value: 80, unit: "/ 100", tone: "success" },
    });

    expect(wrapper.attributes("aria-label")).toBe("Health");
    expect(wrapper.text()).toContain("80");
    expect(wrapper.text()).toContain("/ 100");
    expect(wrapper.classes()).toContain("ds-stat--success");
  });

  it("uses initials when no player avatar is provided", () => {
    const wrapper = mount(PlayerIdentity, {
      props: { name: "Ari Vale", subtitle: "Scout", status: "away" },
    });

    expect(wrapper.find(".ds-player-identity__avatar").text()).toBe("AV");
    expect(wrapper.text()).toContain("Scout");
    expect(wrapper.text()).toContain("Away");
  });

  it("keeps an accessible reopen control when the chat is dismissed", async () => {
    const wrapper = mount(ChatDock, {
      props: { modelValue: false },
      slots: { default: "Recent messages" },
    });
    const reopen = wrapper.get('button[aria-label="Open game chat"]');
    const panelId = reopen.attributes("aria-controls");

    expect(reopen.attributes("aria-expanded")).toBe("false");
    await reopen.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toEqual([[true]]);

    await wrapper.setProps({ modelValue: true });
    expect(wrapper.get(`#${panelId}`).text()).toContain("Recent messages");
    expect(
      wrapper
        .get('button[aria-label="Close game chat"]')
        .attributes("aria-controls"),
    ).toBe(panelId);
  });
});
