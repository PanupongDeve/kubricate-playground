// @filename: kubricate.config.ts
import { defineConfig } from 'kubricate';
import { myNamespace } from './src/stacks';

export default defineConfig({
  stacks: {
    myFirstStack: myNamespace,
  },
});