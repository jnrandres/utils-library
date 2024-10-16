import { Config } from "jest";

// const config: Config = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   globals: {
//     "ts-jest": {
//       pathRegex: "\\.(spec|test)\\.ts$",
//       diagnostics: false,
//     },
//   },
// };

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/test/**/*.(spec|test).ts'], // Ruta de tus tests
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default config;