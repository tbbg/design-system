import { setup } from "@storybook/vue3";
// import "@fontsource/inter"; // example font

setup((app) => {
  // global plugin registration, if any
  // app.use(MyPlugin);
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "#ffffff" },
      { name: "dark", value: "#1e1e1e" },
    ],
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: ["light", "dark"],
      dynamicTitle: true,
    },
  },
};
