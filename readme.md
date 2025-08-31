# Project: new

Minimal TypeScript + Jest (ESM) starter.

## Quick setup

1. Install dev dependencies:
   ```sh
   npm install --save-dev typescript@5.1.6 ts-node@10.9.1 ts-jest@29.1.1 jest@29.6.2 @types/jest@29.5.3
   ```
2. Initialize TypeScript:
   ```sh
   npx tsc --init
   ```
3. Ensure package.json contains `"type": "module"` for ESM.

## Recommended tsconfig.json
```jsonc
{
  "compilerOptions": {
      "target": "ESNext",
    "module": "ESNext",                    // changed from CommonJS
    "moduleResolution": "node",            // add for proper resolution
    "outDir": "dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "exclude": ["node_modules", "./*.ts", "__test__"]
}
```

## Example jest.config.ts
```ts
import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  verbose: true,
  transform: {
    "^.+\\.ts?$": ["ts-jest", { useESM: true }]
  },
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: { "^(\\.{1,2}/.*)\\.js$": "$1" }
};

export default config;
```

## Project structure
root_folder/
├── __test__/  
│   └── index.test.ts  
├── src/  
│   └── index.ts  
├── jest.config.ts  
├── package.json  
└── tsconfig.json


## Package.json
- "scripts": {
     "build": "tsc",
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
    "start": "node dist/index.js"
  }


## NPM scripts (recommended)
- build: `npm run build` (tsc → dist)
- test (avoid shell-script parse errors):  
  ```json
  "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  ```

