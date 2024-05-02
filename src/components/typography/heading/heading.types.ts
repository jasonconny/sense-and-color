import { HeadingProps as ChakraHeadingProps } from '@chakra-ui/react';
import React from 'react';

export interface HeadingProps extends ChakraHeadingProps {
  children: React.ReactNode;
  size?: 'sm' | 'lg';
  /*
  * Sets the `font-weight` property without `<strong />`
  * */
  variant?: 'bold' | 'regular' | 'semibold';
}
