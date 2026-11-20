<template>
  <div class="ds-game-layout">
    <header v-if="$slots.header" class="ds-game-layout__header">
      <slot name="header" />
    </header>
    <aside
      v-if="$slots.left"
      class="ds-game-layout__left"
      :aria-label="leftLabel"
    >
      <slot name="left" />
    </aside>
    <main class="ds-game-layout__main">
      <slot />
    </main>
    <aside
      v-if="$slots.right"
      class="ds-game-layout__right"
      :aria-label="rightLabel"
    >
      <slot name="right" />
    </aside>
    <div v-if="$slots.chat" class="ds-game-layout__chat">
      <slot name="chat" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    leftLabel?: string;
    rightLabel?: string;
  }>(),
  {
    leftLabel: "Game navigation",
    rightLabel: "Player information",
  },
);
</script>

<style scoped>
.ds-game-layout {
  display: grid;
  grid-template-columns: minmax(12rem, 0.82fr) minmax(0, 2.2fr) minmax(
      13rem,
      0.88fr
    );
  grid-template-areas:
    "header header header"
    "left main right"
    "chat chat chat";
  align-content: start;
  gap: 1rem;
  width: 100%;
  min-height: 100%;
  padding: clamp(0.75rem, 2vw, 1.5rem);
  color: var(--ds-color-text);
  background: var(--ds-color-canvas);
}

.ds-game-layout__header {
  grid-area: header;
  min-width: 0;
}

.ds-game-layout__left,
.ds-game-layout__right,
.ds-game-layout__main,
.ds-game-layout__chat {
  min-width: 0;
}

.ds-game-layout__left {
  grid-area: left;
}

.ds-game-layout__main {
  grid-area: main;
}

.ds-game-layout__right {
  grid-area: right;
}

.ds-game-layout__chat {
  grid-area: chat;
  align-self: end;
}

@media (max-width: 800px) {
  .ds-game-layout {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "header"
      "main"
      "left"
      "right"
      "chat";
  }
}
</style>
