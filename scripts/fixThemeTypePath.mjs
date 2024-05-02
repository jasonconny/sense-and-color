#! /usr/bin/env node

/* eslint-disable no-console */
import replace from 'replace-in-file';

const options = {
  files: './types/sense-and-color.types.d.ts',
  from: './shared.types.js',
  to: '@chakra-ui/styled-system/dist/shared.types.js'
};

replace(options, (error, results) => {
  if (error) {
    return console.error('Error occurred:', error);
  }
  console.log('Replacement results:', results);
});
