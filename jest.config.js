module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '.*\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\.(css|jpg|png)$': '<rootDir>/empty-module.js',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.tsx',
  ],
  testURL: 'http://localhost/',
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.ts'
};
