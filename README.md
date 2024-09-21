# THE COLOR ALCHEMIST

This repository is about a video game of chromatic perception, where the player will have to mix colors and thus complete all the levels.

It also serves as a reference to study DDD (Domain Driven Development), hexagonal architecture, component testing, application state management and other techniques applied to software development. In this repository you will find

- A frontend assembled with React.
- Styles applied with Styled Components.
- Animated transitions between views.
- A state management with Zustand.
- A store divided in several sub-stores.
- A router of paths and views.
- Draggable elements with Interactjs.
- Component testing with Testing library.
- Acceptance tests with Cypress.
- A dependency injector.
- Dependency inversion.
- Ports and adapters.
- An event bus.
- A rich domain modeled with DDD.
- A connection between frontend and domain through an adapter layer with subscribers.

### Stack

#### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
