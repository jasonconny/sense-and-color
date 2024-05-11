import { ObjectInspector } from 'react-inspector';
import { Heading, useTheme } from '../components';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const meta: Meta = {
  title: 'Sense and Color/Theme/Theme Inspector',
};

export default meta;

type Story = StoryObj<React.ReactElement>;

const ChakraTheme = () => {
  const senseAndColorTheme = useTheme();

  return (
    <>
      <Heading mb={4}>Theme Inspector</Heading>

      <ObjectInspector expandLevel={1} data={senseAndColorTheme} />
    </>
  );
};

export const ThemeInspector: Story = {
  render: () => <ChakraTheme />,
};
