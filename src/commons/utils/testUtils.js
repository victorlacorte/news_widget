import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount, shallow } from 'enzyme';

import defaultTheme from 'commons/styles/theme';

function mountWithTheme(child) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={defaultTheme}>
        {children}
      </ThemeProvider>
    ),
  });
}

function shallowWithTheme(child) {
  return shallow(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={defaultTheme}>
        {children}
      </ThemeProvider>
    ),
  });
}

export {
  mountWithTheme,
  shallowWithTheme,
};
