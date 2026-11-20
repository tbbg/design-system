<template>
  <button :class="buttonClasses" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "medium",
  disabled: false,
});

const emit = defineEmits<{
  click: [event: Event];
}>();

const buttonClasses = computed(() => [
  "ds-button",
  `ds-button--${props.variant}`,
  `ds-button--${props.size}`,
  {
    "ds-button--disabled": props.disabled,
  },
]);

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>

<style lang="scss" scoped>
.ds-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: var(--ds-radius-sm);
  font-weight: 650;
  cursor: pointer;
  transition:
    background-color 140ms ease,
    border-color 140ms ease,
    color 140ms ease,
    transform 140ms ease;

  &--primary {
    background: var(--ds-color-accent);
    color: #172019;

    &:hover:not(:disabled) {
      background: var(--ds-color-accent-strong);
      transform: translateY(-1px);
    }
  }

  &--secondary {
    border-color: var(--ds-color-border);
    background: var(--ds-color-surface-raised);
    color: var(--ds-color-text);

    &:hover:not(:disabled) {
      border-color: var(--ds-color-border-strong);
      background: #223239;
    }
  }

  &--outline {
    border-color: var(--ds-color-border-strong);
    background: transparent;
    color: var(--ds-color-text);

    &:hover:not(:disabled) {
      background: var(--ds-color-surface-raised);
    }
  }

  &--small {
    min-height: 2rem;
    padding: 0.35rem 0.7rem;
    font-size: 0.82rem;
  }

  &--medium {
    min-height: 2.45rem;
    padding: 0.55rem 0.95rem;
    font-size: 0.92rem;
  }

  &--large {
    min-height: 2.85rem;
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.48;
  }
}
</style>
