// packages/ui-core/src/index.ts

import { VNode } from 'snabbdom';

export type TemplateFunction = (state: any, props: any) => VNode;

export interface Component {
  template: TemplateFunction;
  state: any;
  props: any;
  updateState(newState: any): void;
}

export function createComponent(template: TemplateFunction, initialState: any = {}, initialProps: any = {}): Component {
  let state = initialState;
  let props = initialProps;

  function updateState(newState: any) {
    state = { ...state, ...newState };
    // Trigger re-render
  }

  return {
    template,
    state,
    props,
    updateState
  };
}
