// @filename: src/stacks.ts
import { simpleAppTemplate, namespaceTemplate } from '@kubricate/stacks';
import { Stack } from 'kubricate';

export const myNamespace = Stack.fromTemplate(namespaceTemplate, {
  name: 'demo-namespace',
});
export const myApp = Stack.fromTemplate(simpleAppTemplate, {
  name: 'demo-app',
  namespace: 'demo-namespace',
  replicas: 2,
  imageName: 'nginx:latest',
  port: 8080,
});

