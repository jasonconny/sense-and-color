import { Text } from './text';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Sense and Color/Components/Typography/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Light the song with sense and color, hold away despair.',
  },
  render: (args) => <Text {...args}>{args.children}</Text>,
} satisfies Story;
