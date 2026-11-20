<template>
  <dl class="ds-stat" :class="`ds-stat--${tone}`" :aria-label="label">
    <dt class="ds-stat__label">{{ label }}</dt>
    <dd class="ds-stat__value">
      <span>{{ value }}</span>
      <span v-if="unit" class="ds-stat__unit">{{ unit }}</span>
    </dd>
  </dl>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    value: string | number;
    unit?: string;
    tone?: "neutral" | "accent" | "success" | "warning";
  }>(),
  {
    tone: "neutral",
  },
);
</script>

<style scoped>
.ds-stat {
  display: grid;
  gap: 0.35rem;
  margin: 0;
}

.ds-stat__label {
  color: var(--ds-color-text-muted);
  font-size: 0.74rem;
  font-weight: 620;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ds-stat__value {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  margin: 0;
  color: var(--ds-color-text);
  font-size: clamp(1.2rem, 2vw, 1.65rem);
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  line-height: 1;
}

.ds-stat__unit {
  color: var(--ds-color-text-muted);
  font-size: 0.78rem;
  font-weight: 500;
}

.ds-stat--accent .ds-stat__value {
  color: var(--ds-color-accent);
}

.ds-stat--success .ds-stat__value {
  color: var(--ds-color-success);
}

.ds-stat--warning .ds-stat__value {
  color: var(--ds-color-warning);
}
</style>
