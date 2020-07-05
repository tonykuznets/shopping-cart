module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],

  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|svg)$': '<rootDir>/tests/testMock.ts',
  },

  moduleNameMapper: {
    '@src(.*)$': '<rootDir>/src/$1',
    '@UI(.*)$': '<rootDir>/src/components/UI/$1',
    'test-utils': '<rootDir>/tests/test-utils',
  },

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
