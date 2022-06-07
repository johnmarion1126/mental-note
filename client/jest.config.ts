export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@fontsource/open-sans': 'identity-obj-proxy',
    '@fontsource/raleway': 'identity-obj-proxy',
  },
};
