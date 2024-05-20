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
      exclude: /^(_.*|htmlTranslate.*)$/,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: 'requiredFirst',
    },
    chakra: {
      theme: senseAndColorTheme
    },
  },
};

export default preview;
