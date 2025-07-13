# Button Component

The Button component is a fundamental UI element for triggering actions.

## Usage

```vue
<template>
  <DsButton @click="handleClick"> Click me </DsButton>
</template>
```

## API

### Props

| Prop       | Type                                    | Default     | Description                |
| ---------- | --------------------------------------- | ----------- | -------------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Visual style variant       |
| `size`     | `'small' \| 'medium' \| 'large'`        | `'medium'`  | Button size                |
| `disabled` | `boolean`                               | `false`     | Disable button interaction |

### Events

| Event   | Payload | Description                    |
| ------- | ------- | ------------------------------ |
| `click` | `Event` | Emitted when button is clicked |

### Slots

| Slot      | Description    |
| --------- | -------------- |
| `default` | Button content |

## Examples

### Variants

<DsButton variant="primary">Primary</DsButton>
<DsButton variant="secondary">Secondary</DsButton>
<DsButton variant="outline">Outline</DsButton>

### Sizes

<DsButton size="small">Small</DsButton>
<DsButton size="medium">Medium</DsButton>
<DsButton size="large">Large</DsButton>

### States

<DsButton disabled>Disabled</DsButton>
