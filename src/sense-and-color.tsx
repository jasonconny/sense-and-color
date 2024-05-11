import { ColorModeSwitcher } from "./components";
import { ThemeProvider } from './providers/theme-provider';
import { Box, Grid, Heading, Text } from './components';
import * as React from 'react';

export const SenseAndColor: React.FC = () => (
  <ThemeProvider>
    <Grid minH="100vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />

      <Box textAlign="center">
        <Heading as="h1">Sense and Color</Heading>
        <Text>hold away despair</Text>
      </Box>
    </Grid>
  </ThemeProvider>
);
