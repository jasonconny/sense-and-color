import { Heading } from './heading';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Sense and Color/Components/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default = {
  args: {
    children: 'Sense and Color',
  },
  render: (args) => <Heading {...args}>{args.children}</Heading>,
} satisfies Story;
