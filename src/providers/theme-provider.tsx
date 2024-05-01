import '@fontsource-variable/open-sans';
import { ChakraProvider } from '@chakra-ui/react';
import senseAndColorTheme from '../theme/sense-and-color-theme';
import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ChakraProvider theme={senseAndColorTheme}>
      {children}
    </ChakraProvider>
  );
};
