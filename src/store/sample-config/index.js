import { writable } from 'svelte/store';

export const INITIAL_SAMPLE_CONFIG = {
  value_range: { min: 100, max: 200 },
  interval: 1000, // time in milliseconds
  sample_size: 15 // number of ids to be simulated
};

export default writable(INITIAL_SAMPLE_CONFIG);
