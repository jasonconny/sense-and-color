import { foundations } from './foundations';
import { globalStyles } from './global-styles';
import { theme as chakraDefaultTheme, extendTheme, type ThemeConfig } from '@chakra-ui/react';

// typography
import { textTheme as Text } from '../components/typography/text/text.theme';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false
}

// Chakra defaults to extend
const themeExtensions = {
  components: {
    Text,
  },
  config,
  styles: {
    global: globalStyles
  }
};

// Chakra default to override
const themeOverrides = {
  ...chakraDefaultTheme,
  ...foundations
};

export const senseAndColorTheme = extendTheme(themeExtensions, themeOverrides);
export default senseAndColorTheme;
