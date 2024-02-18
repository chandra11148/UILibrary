// packages/example-app/src/index.ts

import { createComponent, Component } from 'ui-core';

const appTemplate = (state: { count: number }, props: {}) => {
  const increment = () => {
    // Increment count
  };

  return h('div', {}, [
    h('h1', {}, state.count.toString()),
    h('button', { on: { click: increment } }, 'Add')
  ]);
};

const initialState = { count: 0 };

const app: Component = createComponent(appTemplate, initialState);

// Mounting lifecycle event
console.log('Component mounted');

// Simulating state change
app.updateState({ count: 1 });

// State change lifecycle event
console.log('State changed:', app.state);
