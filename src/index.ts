import type { App } from "vue";
import Button from "./components/atoms/Button.vue";
// import Card from "./components/molecules/Card.vue";
// import Header from "./components/organisms/Header.vue";

// Export individual components
export { Button };

// Export plugin for global registration
export default {
  install(app: App) {
    app.component("DsButton", Button);
    // app.component("DsCard", Card);
    // app.component("DsHeader", Header);
  },
};

// Export types
export type { ButtonProps } from "./components/atoms/Button.vue";
// export type { CardProps } from "./components/molecules/Card.vue";
