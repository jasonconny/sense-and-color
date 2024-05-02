import type { Preview } from "@storybook/react";
import { ThemeDecorator } from './decorators';

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
  },
};

export default preview;