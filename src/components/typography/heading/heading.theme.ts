import {
  ComponentStyleConfig,
  defineStyle,
  defineStyleConfig,
} from '@chakra-ui/react';

const baseStyle = defineStyle({
  color: 'inherit',
  letterSpacing: 'normal',
});

const sizes = {
  sm: defineStyle({
    fontSize: 'xl',
    lineHeight: 'short',
  }),
  lg: defineStyle({
    fontSize: '2xl',
    lineHeight: 'short',
  }),
};

const variants = {
  bold: defineStyle({
    fontWeight: 'bold',
  }),
  regular: defineStyle({
    fontWeight: 'normal',
  }),
  semibold: defineStyle({
    fontWeight: 'semibold',
  }),
};

export const headingTheme: ComponentStyleConfig = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'bold',
  },
});
