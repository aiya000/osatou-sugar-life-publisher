export default {
  coverageProvider: 'v8',
  errorOnDeprecated: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.[tj]sx?$': ['babel-jest', { configFile: './babel.config.jest.js' }],
  },
}
