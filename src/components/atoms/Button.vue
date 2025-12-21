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
  @apply inline-flex items-center justify-center;
  @apply font-medium rounded-md transition-colors;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
  border: 2px solid gray;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 255px;
  border-bottom-right-radius: 255px 15px;
  border-bottom-left-radius: 15px 255px;
  padding: 5px 7px;

  &--primary {
    @apply bg-primary-500 text-white;
    @apply hover:bg-primary-600;
    @apply focus:ring-primary-500;
  }

  &--secondary {
    @apply bg-gray-100 text-gray-900;
    @apply hover:bg-gray-200;
    @apply focus:ring-gray-500;
  }

  &--outline {
    @apply border border-gray-300 bg-white text-gray-700;
    @apply hover:bg-gray-50;
    @apply focus:ring-gray-500;
  }

  &--small {
    @apply px-3 py-1.5 text-sm;
  }

  &--medium {
    @apply px-4 py-2 text-base;
  }

  &--large {
    @apply px-6 py-3 text-lg;
  }

  &--disabled {
    @apply opacity-50 cursor-not-allowed;
  }
}
</style>
