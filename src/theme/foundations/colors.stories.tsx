import { Box, Heading, Text, VStack, Wrap, WrapItem } from '../../components';
import { Meta, StoryObj } from '@storybook/react';
import { colors } from './colors';
import { senseAndColorTheme } from '../sense-and-color-theme';
import { chakra } from '@chakra-ui/react';
import React from 'react';

const meta: Meta = {
  title: 'Sense And Color/Tokens/Colors',
};

export default meta;

type Story = StoryObj<typeof colors>;

type ColorPaletteContainerProps = {
  colorKey: string;
  colorLabel: any;
}

const colorLabels = [
  {
    key: 'base',
    label: 'Base'
  },
  {
    key: 'neutral',
    label: 'Neutral'
  },
  {
    key: 'primary',
    label: 'Primary'
  },
  {
    key: 'feature',
    label: 'Feature'
  },
  {
    key: 'success',
    label: 'Success'
  },
  {
    key: 'warning',
    label: 'Warning'
  },
  {
    key: 'error',
    label: 'Error'
  },
];

const ColorPaletteContainer: React.FC<ColorPaletteContainerProps>= ({ colorKey, colorLabel }) => {
  const { colors } = senseAndColorTheme;
  return (
    <Box>
      <Heading as="h3" size="sm">
        {colorLabel}
      </Heading>

      <Wrap spacing={4}>
        <>
          {Object.keys(colors[colorKey]).map((colorNumber) => {
            return (
              <WrapItem>
                <Box
                  borderRadius="lg"
                  boxShadow={
                    '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)'
                  }
                  key={`${colorKey}.${colorNumber}`}
                  width={32}
                >
                  <Box
                    borderTopRadius="lg"
                    height={32}
                    sx={{ backgroundColor: `${colors[colorKey][colorNumber]}` }}
                  >&nbsp;</Box>
                  <Text
                    color="text.secondary"
                    fontSize="sm"
                    pb={2}
                    pt={3}
                    px={2}
                  >
                    token:{' '}
                    <chakra.em
                      color="text.primary"
                      fontStyle="normal"
                      fontWeight="medium"
                    >
                      {colorKey}.{colorNumber}
                    </chakra.em>
                    <br />
                    hex:{' '}
                    <chakra.em
                      color="text.primary"
                      fontStyle="normal"
                      fontWeight="medium"
                    >
                      {colors[colorKey][colorNumber]}
                    </chakra.em>
                  </Text>
                </Box>
              </WrapItem>
            );
          })}
        </>
      </Wrap>
    </Box>
  );
};

export const Default: Story = {
  render: () => {

    return (
      <VStack alignItems="flex-start" spacing={8}>
        {colorLabels.map((color) => {
          return (
            <ColorPaletteContainer
              key={color.key}
              colorKey={color.key}
              colorLabel={color.label}
            />
          );
        })}
      </VStack>
    );
  },
};
