import { defineStyle } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = defineStyle((props) => {
  return {
    body: {
      bg: mode('neutral.100', 'neutral.900')(props),
      color: mode('neutral.900', 'neutral.50')(props),
      fontFamily: 'body',
      minHeight: '100vh',
      minWidth: '20rem',
      overflowX: 'hidden',
    },
  };
});
