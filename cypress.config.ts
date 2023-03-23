import { defineConfig } from 'cypress';
import { defineConfig as defineViteConfig } from 'vite';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react', // For some reason this is required ??
      bundler: 'vite',
      viteConfig: defineViteConfig({
        build: {
          sourcemap: true,
        }
      })
    },
    specPattern: ['src/**/*.cy.ts'],
    fixturesFolder: 'src',
    experimentalWebKitSupport: true,
    includeShadowDom: true
  }
});
