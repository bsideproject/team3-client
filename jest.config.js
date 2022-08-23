const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>src/hooks/$1',
    '^@/utils/(.*)$': '<rootDir>src/utils/$1',
    '^@/styles/(.*)$': '<rootDir>src/styles/$1',
    '^@/services/(.*)$': '<rootDir>src/services/$1',
    '^@/views/(.*)$': '<rootDir>src/domain/$1',
    '^@/stores/(.*)$': '<rootDir>src/stores/$1',
    '^@/types/(.*)$': '<rootDir>src/types/$1',
    '^@/images/(.*)$': '<rootDir>public/images/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
