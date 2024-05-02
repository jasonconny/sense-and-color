import { Text as ChakraText, forwardRef } from '@chakra-ui/react'
import { type TexProps } from './text.types';

export const Text = forwardRef<TexProps, 'p'>((props, ref) => {
  const { ...rest } = props;

  return (
    <ChakraText ref={ref} {...rest} />
  );
});

Text.displayName = 'Text';
