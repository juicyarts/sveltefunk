import { writable } from 'svelte/store';

export const INITIAL_APP_CONFIG = {
  theme: 'light',
};

export default writable(INITIAL_APP_CONFIG);
