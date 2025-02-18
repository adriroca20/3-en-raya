module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/testing/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: 'tsconfig.json'
    }]
  }
}; 