import '@fontsource-variable/source-code-pro';
import { ThemeProvider } from '../../src/providers/theme-provider';

export const ThemeDecorator = (Story: any) => (
  <ThemeProvider>
    {Story()}
  </ThemeProvider>
)
