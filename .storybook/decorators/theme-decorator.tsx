import { Grid } from '@chakra-ui/react';
import { ThemeProvider } from '../../src/providers/theme-provider';
import {ColorModeSwitcher} from '../../src/components';

export const ThemeDecorator = (Story: any) => (
  <ThemeProvider>
    <Grid>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Story/>
    </Grid>
  </ThemeProvider>
)
