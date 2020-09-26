module.exports = {
  roots: [
    '<rootDir>',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  testURL: 'http://localhost/3001',
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.ts',
  ],
};
