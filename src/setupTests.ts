import '@testing-library/jest-dom/extend-expect';
import type {Config} from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/setup-matchers.js'],
};

export default config;