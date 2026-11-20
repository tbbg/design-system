# RPGRoot design system

A Vue 3 component library for a quiet, game-inspired interface: layered dark
surfaces, restrained sage accents, compact player and stat primitives, and a
responsive play-screen layout.

## Game foundation

```vue
<script setup lang="ts">
import { ref } from "vue";
import {
  ChatDock,
  GameLayout,
  Panel,
  PlayerIdentity,
} from "@rpgroot/design-system";

const chatOpen = ref(true);
</script>

<template>
  <GameLayout>
    <template #left>
      <Panel title="Your character">
        <PlayerIdentity name="Ari Vale" subtitle="Wayfinder" />
      </Panel>
    </template>

    <Panel title="The old bridge">Game scene</Panel>

    <template #chat>
      <ChatDock v-model="chatOpen">
        <div>Chat UI supplied by the consuming application</div>
      </ChatDock>
    </template>
  </GameLayout>
</template>
```

Components are also registered globally as `DsButton`, `DsChatDock`,
`DsGameLayout`, `DsPanel`, `DsPlayerIdentity`, and `DsStat` by installing the
default plugin. Importing the package entry includes its base CSS tokens; host
applications can override the `--ds-*` custom properties.

See [the game foundation guide](docs/components/GameFoundation.md) and the
Storybook play-screen story for component props, slots, and theme tokens.
