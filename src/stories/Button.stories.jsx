import { fn } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Badge = {
  args: {
    primary: false,
    label: "Button"
  }
};


// import type { Meta, StoryObj } from '@storybook/react';
// import { Button } from './Button'; // Correct path for same folder

// const meta: Meta<typeof Button> = {
//   title: 'Components/Button', // Title in the Storybook UI
//   component: Button, // Reference to the component
//   tags: ['autodocs'], // Enables auto-documentation
//   argTypes: {
//     size: {
//       control: 'select',
//       options: ['sm', 'md', 'lg'], // Dropdown for sizes
//     },
//     type: {
//       control: 'select',
//       options: ['default', 'success', 'error'], // Dropdown for types
//     },
//     variant: {
//       control: 'select',
//       options: ['filled', 'outlined'], // Dropdown for variants
//     },
//     leftIcon: { control: 'text' }, // Text input for left icon
//     rightIcon: { control: 'text' }, // Text input for right icon
//   },
// };

// export default meta;

// type Story = StoryObj<typeof Button>;

// export const Primary: Story = {
//   args: {
//     label: 'Primary Button',
//     size: 'md',
//     type: 'default',
//     variant: 'filled',
//   },
// };

// export const Success: Story = {
//   args: {
//     label: 'Success Button',
//     size: 'md',
//     type: 'success',
//     variant: 'filled',
//   },
// };

// export const ErrorOutlined: Story = {
//   args: {
//     label: 'Error Button',
//     size: 'lg',
//     type: 'error',
//     variant: 'outlined',
//     leftIcon: '🚨',
//     rightIcon: '⚠️',
//   },
// };