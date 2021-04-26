module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testRegex: "tests/.*\\.spec\\.ts",
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.tests.json"
    }
  }
};