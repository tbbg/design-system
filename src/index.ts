import type { App, Plugin } from "vue";
import "./styles/tokens.css";
import Button from "./components/atoms/Button.vue";
import ChatDock from "./components/organisms/ChatDock.vue";
import GameLayout from "./components/layout/GameLayout.vue";
import Panel from "./components/molecules/Panel.vue";
import PlayerIdentity from "./components/molecules/PlayerIdentity.vue";
import Stat from "./components/molecules/Stat.vue";

export { Button, ChatDock, GameLayout, Panel, PlayerIdentity, Stat };
export type { ButtonProps } from "./components/atoms/Button.vue";

const components = [
  ["DsButton", Button],
  ["DsChatDock", ChatDock],
  ["DsGameLayout", GameLayout],
  ["DsPanel", Panel],
  ["DsPlayerIdentity", PlayerIdentity],
  ["DsStat", Stat],
] as const;

const plugin: Plugin = {
  install(app: App) {
    components.forEach(([name, component]) => app.component(name, component));
  },
};

export default plugin;
