import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Sense and Color/Components/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Set the text'
    },
    size: {
      control: 'select',
      defaultValue: 'regular',
      description: 'Set font-size',
      options: ['sm', 'lg']
    },
    variant: {
      control: 'select',
      defaultValue: 'regular',
      description: 'Set font-weight',
      options: ['regular', 'semibold', 'bold']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Terrapin Station'
  },
  render: (args) => (
    <Heading {...args}>
      {args.children}
    </Heading>
  )
};
