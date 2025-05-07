/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  testMatch: [
    "<rootDir>/tests/**/*.test.ts", // any .test.ts file in tests/
    "<rootDir>/src/**/*.test.ts", // if you ever put tests beside src
  ],
  moduleFileExtensions: ["ts", "js", "json"],
};
