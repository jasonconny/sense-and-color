import '@fontsource-variable/open-sans';
import { ThemeProvider } from '../../src/providers/theme-provider';

export const ThemeDecorator = (Story: any) => (
  <ThemeProvider>
    {Story()}
  </ThemeProvider>
)
