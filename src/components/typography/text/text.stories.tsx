import { Text } from './text';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
  title: 'Sense and Color/Components/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Set the text'
    },
    variant: {
      control: 'select',
      defaultValue: 'regular',
      description: 'Set the font-weight',
      options: ['regular', 'bold']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Light the song with sense and color, hold away despair.'
  },
  render: (args) => (
    <Text {...args}>
      {args.children}
    </Text>
  )
};
