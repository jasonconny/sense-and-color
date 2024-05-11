import { type TexProps } from './text.types';
import { Text as ChakraText, forwardRef } from '@chakra-ui/react'

export const Text = forwardRef<TexProps, 'p'>((props, ref) => {
  const { ...rest } = props;

  return (
    <ChakraText {...rest} ref={ref} />
  );
});

Text.displayName = 'Text';
