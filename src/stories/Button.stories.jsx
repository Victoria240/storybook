// import { fn } from '@storybook/test';

// import { Button } from './Button';

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// export default {
//   title: 'Example/Button',
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn() },
// };

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

// export const Badge = {
//   args: {
//     primary: false,
//     label: "Button"
//   }
// };




// Button.stories.js
import { fn } from '@storybook/test';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['filled', 'outlined'] },
    type: { control: 'select', options: ['default', 'success', 'error'] },
    disabled: { control: 'boolean' },
    leftIcon: { control: 'text' },
    rightIcon: { control: 'text' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Primary Button',
    size: 'medium',
    variant: 'filled',
    type: 'default',
    disabled: false,
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    size: 'medium',
    variant: 'outlined',
    type: 'default',
    disabled: false,
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Large Button',
    variant: 'filled',
    type: 'success',
    disabled: false,
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Small Button',
    variant: 'outlined',
    type: 'error',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Button',
    size: 'medium',
    variant: 'filled',
    type: 'default',
    disabled: true,
  },
};

export const WithIcons = {
  args: {
    label: 'Button with Icons',
    size: 'medium',
    variant: 'filled',
    type: 'success',
    leftIcon: '⬅️',
    rightIcon: '➡️',
    disabled: false,
  },
};
