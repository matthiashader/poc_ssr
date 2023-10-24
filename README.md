<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Proof of concept server side rendering in a gatsby example
</h1>

## Main Changes:
1. **Stencil**

   (stencil.config.ts) 
   ```shell
    # 
    {
      type: 'dist-hydrate-script',
      dir: 'hydrate'
    },
    ```
   (package.json)
   ```shell
    "files": [
    "dist/",
    "loader/",
    "hydrate/"
    ],
    ```
   
2. **Gatsby**:

    ```shell
    const { defineCustomElements } = require("pocstencilssr/loader");
    defineCustomElements();
    ```

    ```shell
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
    ```
