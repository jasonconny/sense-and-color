import { globalStyles } from './global-styles';
import { theme as chakraDefaultTheme, extendTheme } from '@chakra-ui/react';

// Chakra defaults to extend
const themeExtensions = {
  styles: {
    global: globalStyles
  }
};

// Chakra default to override
const themeOverrides = {
  ...chakraDefaultTheme
};

export const senseAndColorTheme = extendTheme(themeExtensions, themeOverrides);
export default senseAndColorTheme;
