import { TextProps as ChakraTextProps } from '@chakra-ui/react';

export interface TexProps extends ChakraTextProps {
  /*
  * Sets the `font-weight` property without `<strong />`
  * */
  variant?: 'bold' | 'regular';
}
