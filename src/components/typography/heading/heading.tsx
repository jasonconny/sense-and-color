import { Heading as ChakraHeading, forwardRef } from '@chakra-ui/react'
import { type HeadingProps } from './heading.types';

export const Heading = forwardRef<HeadingProps, 'p'>((props, ref) => {
  const { as, children, size, variant = 'bold', ...rest } = props;

  return (
    <ChakraHeading
      {...rest}
      as={as}
      ref={ref}
      size={size ? size : { base: 'sm', md: 'lg' }}
      variant={variant}
    >
      {children}
    </ChakraHeading>
  );
});

Heading.displayName = 'Heading';
