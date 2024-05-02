import { ComponentStyleConfig, defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  color: 'current',
  mt: 0
});

const variants = {
  bold: defineStyle({
    fontWeight: 'bold'
  }),
  regular: defineStyle({
    fontWeight: 'normal'
  })
};

export const textTheme: ComponentStyleConfig = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'regular'
  }
});
