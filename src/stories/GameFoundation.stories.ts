import type { Meta, StoryObj } from "@storybook/vue3";
import "../styles/tokens.css";
import ChatDock from "../components/organisms/ChatDock.vue";
import GameLayout from "../components/layout/GameLayout.vue";
import Panel from "../components/molecules/Panel.vue";
import PlayerIdentity from "../components/molecules/PlayerIdentity.vue";
import Stat from "../components/molecules/Stat.vue";

const meta: Meta = {
  title: "Game foundation/Play screen",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const PlayScreen: Story = {
  render: () => ({
    components: { ChatDock, GameLayout, Panel, PlayerIdentity, Stat },
    data: () => ({ chatOpen: true }),
    template: `
      <GameLayout>
        <template #header>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:1rem 0">
            <div>
              <div style="color:var(--ds-color-accent);font-size:.7rem;letter-spacing:.14em">THE NORTHERN REACH</div>
              <h1 style="margin:.3rem 0 0;font-size:1.35rem">A quiet crossing</h1>
            </div>
            <span style="color:var(--ds-color-text-muted);font-size:.8rem">Turn 04 · 18:42</span>
          </div>
        </template>
        <template #left>
          <Panel title="Your character" subtitle="Ready for the next turn">
            <PlayerIdentity name="Ari Vale" subtitle="Wayfinder" status="online" />
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-top:1.4rem">
              <Stat label="Health" value="84" unit="/ 100" tone="success" />
              <Stat label="Focus" value="62" unit="/ 100" tone="accent" />
            </div>
          </Panel>
        </template>
        <Panel title="The old bridge" subtitle="North bank · light rain">
          <div style="display:grid;place-items:center;min-height:18rem;border:1px solid var(--ds-color-border);border-radius:var(--ds-radius-sm);background:radial-gradient(ellipse at 50% 70%,#273b3b 0%,#172329 54%,#121a1e 100%);color:var(--ds-color-text-muted)">
            A calm space for the active game scene
          </div>
        </Panel>
        <template #right>
          <Panel title="At the table">
            <div style="display:grid;gap:1.2rem">
              <PlayerIdentity name="Mira Sol" subtitle="Cartographer" status="online" />
              <PlayerIdentity name="Eren Moss" subtitle="Sentinel" status="away" />
            </div>
          </Panel>
        </template>
        <template #chat>
          <ChatDock v-model="chatOpen">
            <div style="color:var(--ds-color-text-muted);font-size:.85rem">
              The group can keep conversation close without crowding the play space.
            </div>
          </ChatDock>
        </template>
      </GameLayout>
    `,
  }),
};
