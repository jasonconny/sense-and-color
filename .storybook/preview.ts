import type { Preview } from "@storybook/react";
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
    chakra: {
      theme: senseAndColorTheme
    },
  },
};

export default preview;
