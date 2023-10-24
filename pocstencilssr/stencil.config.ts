import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'pocstencilssr',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
      dir: 'hydrate'
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
