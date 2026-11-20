<template>
  <div class="ds-player-identity">
    <span class="ds-player-identity__avatar" aria-hidden="true">
      <img v-if="avatarUrl" :src="avatarUrl" alt="" />
      <span v-else>{{ initials }}</span>
    </span>
    <span class="ds-player-identity__copy">
      <span class="ds-player-identity__name">{{ name }}</span>
      <span v-if="subtitle" class="ds-player-identity__subtitle">
        {{ subtitle }}
      </span>
      <span
        class="ds-player-identity__status"
        :class="`ds-player-identity__status--${status}`"
      >
        <span class="ds-player-identity__status-dot" aria-hidden="true" />
        {{ statusText }}
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    name: string;
    subtitle?: string;
    avatarUrl?: string;
    status?: "online" | "away" | "offline" | "busy";
    statusLabel?: string;
  }>(),
  {
    status: "online",
  },
);

const initials = computed(
  () =>
    props.name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join("")
      .toLocaleUpperCase() || "?",
);

const statusText = computed(
  () =>
    props.statusLabel ??
    {
      online: "Online",
      away: "Away",
      offline: "Offline",
      busy: "Busy",
    }[props.status],
);
</script>

<style scoped>
.ds-player-identity {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 0.8rem;
}

.ds-player-identity__avatar {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 2.8rem;
  height: 2.8rem;
  overflow: hidden;
  border: 1px solid var(--ds-color-border-strong);
  border-radius: 50%;
  background: var(--ds-color-surface-raised);
  color: var(--ds-color-accent);
  font-size: 0.8rem;
  font-weight: 700;
}

.ds-player-identity__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ds-player-identity__copy {
  display: grid;
  min-width: 0;
  gap: 0.2rem;
}

.ds-player-identity__name,
.ds-player-identity__subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ds-player-identity__name {
  color: var(--ds-color-text);
  font-size: 0.9rem;
  font-weight: 650;
}

.ds-player-identity__subtitle {
  color: var(--ds-color-text-muted);
  font-size: 0.76rem;
}

.ds-player-identity__status {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--ds-color-text-muted);
  font-size: 0.72rem;
}

.ds-player-identity__status-dot {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
  background: var(--ds-color-status-offline);
}

.ds-player-identity__status--online .ds-player-identity__status-dot {
  background: var(--ds-color-success);
}

.ds-player-identity__status--away .ds-player-identity__status-dot {
  background: var(--ds-color-warning);
}

.ds-player-identity__status--busy .ds-player-identity__status-dot {
  background: var(--ds-color-danger);
}
</style>
