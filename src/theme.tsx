import type { Theme } from 'theme-ui';

const makeTheme = <T extends Theme>(t: T) => t;

export const theme = makeTheme({
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    secondary: '#9c9c9c',
  },
  space: [0, 8, 16, 32, 64, 128, 256],
  sizes: [0, 8, 16, 32, 64, 128, 256],
});

export type ThemeType = typeof theme;
