// @filename: src/stacks.ts
import { Stack } from 'kubricate';

export const myNamespace = Stack.fromStatic('Namespace', {
  // you can write any name of the resource in the stack
  namespace: {
    apiVersion: 'v1',
    kind: 'Namespace',
    metadata: {
      name: 'my-namespace',
    },
  },
});