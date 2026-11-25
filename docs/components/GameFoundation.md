# Game foundation

The game foundation combines a flexible three-region layout with reusable
surface, player, stat, and chat primitives. Components are generic: applications
own game rules, data, and message composition.

## Import

```ts
import {
  ChatDock,
  GameLayout,
  Panel,
  PlayerIdentity,
  Stat,
} from "@rpgroot/design-system";
```

The package entry imports the base theme tokens. Consumers can override the
`--ds-*` CSS custom properties at their application theme boundary.

## Layout

`GameLayout` provides optional `header`, `left`, `right`, and `chat` slots, with
the default slot as the main game area. It collapses to a single column on
narrow screens.

```vue
<DsGameLayout>
  <template #left><DsPanel title="Character">...</DsPanel></template>
  <DsPanel title="Current scene">...</DsPanel>
  <template #right><DsPanel title="Players">...</DsPanel></template>
  <template #chat>
    <DsChatDock v-model="chatOpen"><ChatMessages /></DsChatDock>
  </template>
</DsGameLayout>
```

## Components

| Component        | Purpose                                                     | Public props / slots                                                                                                     |
| ---------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `GameLayout`     | Responsive header, side rails, main region, and chat region | `leftLabel`, `rightLabel`; `header`, `left`, default, `right`, `chat` slots                                              |
| `Panel`          | Titled surface with optional action and footer areas        | `title`, `subtitle`, `tone` (`default` or `inset`), `frame` (`standard` or `ornate`); `actions`, default, `footer` slots |
| `Stat`           | Labelled numeric or text value                              | Required `label`, `value`; optional `unit`, `tone` (`neutral`, `accent`, `success`, `warning`)                           |
| `PlayerIdentity` | Avatar or initials, name, subtitle, and presence state      | Required `name`; optional `subtitle`, `avatarUrl`, `status`, `statusLabel`                                               |
| `ChatDock`       | Dismissible chat surface with a persistent reopen control   | `v-model` (`modelValue`, defaults to `true`), `title`, `reopenLabel`, `closeLabel`; default slot                         |

`ChatDock` emits `update:modelValue`. When closed, its labelled button stays
visible and announces the expanded state and controlled panel.

Use `frame="ornate"` for a focal game surface that benefits from layered bronze
edges and a restrained title plate. The standard frame remains the default, so
small utility panels and controls stay visually quiet.

## Theme tokens

The base palette uses cool charcoal surfaces, quiet borders, warm pale-green
accents, and distinct success/warning/danger states. Override tokens such as
`--ds-color-canvas`, `--ds-color-surface`, `--ds-color-text`,
`--ds-color-accent`, and `--ds-radius-md` to fit a host theme.
