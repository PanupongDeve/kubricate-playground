// @filename: kubricate.config.ts
import { defineConfig } from 'kubricate';
import { myApp, myNamespace } from './src/stacks';

export default defineConfig({
  stacks: {
    myNamespace: myNamespace,
    myApp: myApp
  },
});