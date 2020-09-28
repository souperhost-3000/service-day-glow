module.exports = {
  roots: [
    '<rootDir>',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>client/src/tests/mocks/styleMock.js',
  },
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
  clearMocks: true,
};
