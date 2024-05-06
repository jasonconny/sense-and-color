import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import { ThemeDecorator } from './decorators';
import { senseAndColorTheme } from '../src/theme';

const decorators = [
  ThemeDecorator
]

const preview: Preview = {
  decorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: { ...themes.dark, appBg: senseAndColorTheme.colors.neutral[900]},
      darkClass: ['chakra-ui-dark', 'dark'],
      light: { ...themes.light, appBg: senseAndColorTheme.colors.neutral[100]},
      lightClass: ['chakra-ui-light', 'light'],
      stylePreview: true
    },
  },
};

export default preview;
