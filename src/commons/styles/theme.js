import { down, up } from './utils';

const Roboto = 'Roboto, sans-serif';

// https://material.io/resources/color/#!/?view.left=0&view.right=1
const baseTheme = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 960,
    xl: 960,
  },
  palette: {
    blue: {
      light: '#009dff30',
      main: '#009dff',
      dark: '#006fcb',
    },
    black: {
      light: '#4e4e4e30',
      main: '#4e4e4e',
      dark: '#262626',
    },
    grey: {
      light: '#d8d8e430',
      main: '#d8d8e4',
      dark: '#a4a4a4',
    },
  },
  typography: {
    h1: {
      fontFamily: Roboto,
      fontWeight: 500,
      fontSize: 32,
      lineHeight: 1.75,
    },
    h2: {
      fontFamily: Roboto,
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1,
    },
    body: {
      fontFamily: Roboto,
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1,
    },
    body2: {
      fontFamily: Roboto,
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1,
    },
    button: {
      fontFamily: Roboto,
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.75,
    },
  },
};

const theme = {
  ...baseTheme,

  breakpoints: {
    ...baseTheme.breakpoints,
    down: (breakpoint) => down(breakpoint, baseTheme),
    up: (breakpoint) => up(breakpoint, baseTheme),
  },
};

export default theme;
