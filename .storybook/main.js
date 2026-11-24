/**
 * @type { import('@storybook/vue3-vite').StorybookConfig }
 */
const config = {
  // 1️⃣ Where to find stories & docs
  stories: [
    // component stories
    // "../packages/**/*.stories.@(js|jsx|ts|tsx|mdx|vue)",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx|vue)",
    // design-token or intro pages
    "../docs/**/*.stories.mdx",
  ],

  // 2️⃣ Add-ons to power a design-system
  addons: [
    "@storybook/addon-links", // link stories together
    "@storybook/addon-designs", // embed Figma frames
    // "storybook-addon-vue-slots", // slot playgrounds
    // "storybook-vue-addon", // .stories.vue syntax (optional)
  ],

  // 3️⃣ Use Vue 3 + Vite builder
  framework: {
    name: "@storybook/vue3-vite",
    options: {
      // enable vue-component-meta for better prop extraction (SB 8+)
      builder: { vueDocGen: "vue-component-meta" },
    },
  },

  // 4️⃣ Enable docs auto-generation & MDX
  docs: {
    autodocs: "tag",
  },

  // 5️⃣ Feature flags (SB 8)
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },

  // 6️⃣ Static assets (icons, fonts)
  // staticDirs: ["../public"],

  // 7️⃣ Compose remote Storybooks (optional)
  refs: {
    "storybook-design-system": {
      title: "Core DS",
      url: "https://example-design-system.netlify.app",
    },
  },
};

export default config;
