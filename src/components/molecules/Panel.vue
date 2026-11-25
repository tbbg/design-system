<template>
  <section
    class="ds-panel"
    :class="[`ds-panel--${tone}`, `ds-panel--frame-${frame}`]"
  >
    <header v-if="title || subtitle || $slots.actions" class="ds-panel__header">
      <div class="ds-panel__heading">
        <h2 v-if="title" class="ds-panel__title">{{ title }}</h2>
        <p v-if="subtitle" class="ds-panel__subtitle">{{ subtitle }}</p>
      </div>
      <div v-if="$slots.actions" class="ds-panel__actions">
        <slot name="actions" />
      </div>
    </header>
    <div class="ds-panel__body">
      <slot />
    </div>
    <footer v-if="$slots.footer" class="ds-panel__footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    tone?: "default" | "inset";
    frame?: "standard" | "ornate";
  }>(),
  {
    tone: "default",
    frame: "standard",
  },
);
</script>

<style scoped>
.ds-panel {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--ds-color-border);
  border-radius: var(--ds-radius-md);
  background: var(--ds-color-surface);
  box-shadow: var(--ds-shadow-panel);
}

.ds-panel--inset {
  background: var(--ds-color-surface-inset);
  box-shadow: none;
}

.ds-panel--frame-ornate {
  position: relative;
  border-color: var(--ds-color-frame);
  box-shadow:
    inset 0 1px 0 var(--ds-color-frame-highlight),
    0 0 0 1px var(--ds-color-frame-shadow),
    var(--ds-shadow-panel);
}

.ds-panel--frame-ornate::before {
  position: absolute;
  z-index: 1;
  inset: 4px;
  border: 1px solid var(--ds-color-frame-shadow);
  border-radius: calc(var(--ds-radius-md) - 0.25rem);
  background:
    linear-gradient(
        var(--ds-color-frame-highlight),
        var(--ds-color-frame-highlight)
      )
      top left,
    linear-gradient(
        var(--ds-color-frame-highlight),
        var(--ds-color-frame-highlight)
      )
      top left,
    linear-gradient(
        var(--ds-color-frame-highlight),
        var(--ds-color-frame-highlight)
      )
      top right,
    linear-gradient(
        var(--ds-color-frame-highlight),
        var(--ds-color-frame-highlight)
      )
      top right,
    linear-gradient(
        var(--ds-color-frame-highlight),
        var(--ds-color-frame-highlight)
      )
      bottom left,
    linear-gradient(
        var(--ds-color-frame-highlight),
        var(--ds-color-frame-highlight)
      )
      bottom left,
    linear-gradient(
        var(--ds-color-frame-highlight),
        var(--ds-color-frame-highlight)
      )
      bottom right,
    linear-gradient(
        var(--ds-color-frame-highlight),
        var(--ds-color-frame-highlight)
      )
      bottom right;
  background-repeat: no-repeat;
  background-size:
    0.65rem 1px,
    1px 0.65rem,
    0.65rem 1px,
    1px 0.65rem,
    0.65rem 1px,
    1px 0.65rem,
    0.65rem 1px,
    1px 0.65rem;
  content: "";
  pointer-events: none;
}

.ds-panel--frame-ornate .ds-panel__header {
  border-bottom-color: var(--ds-color-frame);
  background: linear-gradient(
    90deg,
    var(--ds-color-surface-raised),
    transparent 78%
  );
}

.ds-panel--frame-ornate .ds-panel__heading {
  padding: 0.4rem 0.65rem;
  border: 1px solid var(--ds-color-frame);
  border-radius: var(--ds-radius-sm);
  background: var(--ds-color-surface-raised);
  box-shadow: inset 0 1px 0 var(--ds-color-frame-highlight);
}

.ds-panel--frame-ornate .ds-panel__footer {
  border-top-color: var(--ds-color-frame);
}

.ds-panel__header,
.ds-panel__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.1rem;
}

.ds-panel__header {
  border-bottom: 1px solid var(--ds-color-border);
}

.ds-panel__footer {
  border-top: 1px solid var(--ds-color-border);
}

.ds-panel__heading {
  min-width: 0;
}

.ds-panel__title {
  margin: 0;
  color: var(--ds-color-text);
  font-size: 0.98rem;
  font-weight: 680;
  letter-spacing: 0.01em;
}

.ds-panel__subtitle {
  margin: 0.3rem 0 0;
  color: var(--ds-color-text-muted);
  font-size: 0.8rem;
}

.ds-panel__actions {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.5rem;
}

.ds-panel__body {
  padding: 1rem 1.1rem;
}
</style>
