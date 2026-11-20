<template>
  <div class="ds-chat-dock">
    <section
      v-show="modelValue"
      :id="panelId"
      class="ds-chat-dock__panel"
      role="region"
      :aria-label="title"
    >
      <header class="ds-chat-dock__header">
        <div class="ds-chat-dock__heading">
          <span class="ds-chat-dock__eyebrow">COMMUNICATIONS</span>
          <h2 class="ds-chat-dock__title">{{ title }}</h2>
        </div>
        <button
          type="button"
          class="ds-chat-dock__toggle"
          :aria-label="closeLabel"
          :aria-controls="panelId"
          aria-expanded="true"
          @click="setOpen(false)"
        >
          <span aria-hidden="true">−</span>
        </button>
      </header>
      <div class="ds-chat-dock__content">
        <slot />
      </div>
    </section>
    <button
      v-if="!modelValue"
      type="button"
      class="ds-chat-dock__reopen"
      :aria-label="reopenLabel"
      :aria-controls="panelId"
      aria-expanded="false"
      @click="setOpen(true)"
    >
      <span class="ds-chat-dock__reopen-mark" aria-hidden="true">✦</span>
      <span>{{ title }}</span>
      <span class="ds-chat-dock__reopen-hint">Open</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";

withDefaults(
  defineProps<{
    modelValue?: boolean;
    title?: string;
    reopenLabel?: string;
    closeLabel?: string;
  }>(),
  {
    modelValue: true,
    title: "Game chat",
    reopenLabel: "Open game chat",
    closeLabel: "Close game chat",
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const panelId = `ds-chat-${getCurrentInstance()?.uid ?? "dock"}`;

function setOpen(value: boolean) {
  emit("update:modelValue", value);
}
</script>

<style scoped>
.ds-chat-dock {
  position: sticky;
  z-index: 2;
  bottom: 0;
  width: 100%;
  color: var(--ds-color-text);
}

.ds-chat-dock__panel {
  max-height: min(28rem, 52vh);
  overflow: auto;
  border: 1px solid var(--ds-color-border-strong);
  border-radius: var(--ds-radius-lg) var(--ds-radius-lg) 0 0;
  background: var(--ds-color-surface);
  box-shadow: 0 -1rem 3rem rgb(0 0 0 / 24%);
}

.ds-chat-dock__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 1.1rem;
  border-bottom: 1px solid var(--ds-color-border);
}

.ds-chat-dock__heading {
  display: grid;
  gap: 0.2rem;
}

.ds-chat-dock__eyebrow {
  color: var(--ds-color-accent);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.ds-chat-dock__title {
  margin: 0;
  font-size: 0.96rem;
  font-weight: 680;
}

.ds-chat-dock__toggle {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid var(--ds-color-border);
  border-radius: var(--ds-radius-sm);
  background: var(--ds-color-surface-raised);
  color: var(--ds-color-text);
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
}

.ds-chat-dock__content {
  padding: 1rem 1.1rem;
}

.ds-chat-dock__reopen {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 3rem;
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--ds-color-border-strong);
  border-radius: var(--ds-radius-md) var(--ds-radius-md) 0 0;
  background: var(--ds-color-surface-raised);
  color: var(--ds-color-text);
  box-shadow: 0 -0.5rem 1.8rem rgb(0 0 0 / 18%);
  font-size: 0.84rem;
  font-weight: 650;
  cursor: pointer;
}

.ds-chat-dock__reopen-mark {
  color: var(--ds-color-accent);
}

.ds-chat-dock__reopen-hint {
  margin-left: auto;
  color: var(--ds-color-text-muted);
  font-size: 0.72rem;
  font-weight: 500;
}
</style>
