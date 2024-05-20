import { HeadingProps as ChakraHeadingProps } from '@chakra-ui/react';
import React from 'react';

export interface HeadingProps extends ChakraHeadingProps {
  children: React.ReactNode;
  /**
   * Size of the Heading. If no option is passed then defaults to responsive sizing.
   * */
  size?: 'sm' | 'lg';
  /**
   * Sets the `font-weight` property without `<strong />`
   * @default bold
   */
  variant?: 'bold' | 'regular' | 'semibold';
}
