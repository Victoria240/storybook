// Updated Button.stories.jsx
import React from 'react';
import CustomButton from './Button';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme/theme';
import { FaStar, FaRocket } from 'react-icons/fa'; // Example icons

export default {
  title: 'Components/Button',
  component: CustomButton,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'outlined', 'contained'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'info', 'error'], // Limited to these colors
    },
    label: {
      control: 'text',
    },
    startIcon: {
      control: 'boolean',
    },
    endIcon: {
      control: 'boolean',
    },
    iconOnly: {
      control: 'boolean',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'disabled', 'active'], // Removed focus
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
  },
};

const Template = ({ state, theme, startIcon, endIcon, iconOnly, ...args }) => {
  const getStateStyle = () => {
    switch (state) {
      case 'hover':
        return { backgroundColor: 'rgba(0, 0, 0, 0.05)' }; // Hover style
      case 'active':
        return { backgroundColor: 'rgba(0, 0, 0, 0.1)' }; // Active style
      case 'disabled':
        return { pointerEvents: 'none', opacity: 0.5 }; // Disabled style
      // case 'focus':
      //   return { outline: '2px solid rgba(0, 0, 255, 0.5)' }; // Focus commented out
      default:
        return {};
    }
  };

  const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CustomButton
        {...args}
        style={getStateStyle()}
        startIcon={startIcon ? <FaStar /> : null}
        endIcon={endIcon ? <FaRocket /> : null}
        iconOnly={iconOnly ? <FaStar /> : null}
        disabled={state === 'disabled'}
      />
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  size: 'medium',
  label: 'Primary Button',
  variant: 'contained',
  color: 'primary',
  state: 'default',
  theme: 'light',
};

export const Info = Template.bind({});
Info.args = {
  size: 'medium',
  label: 'Info Button',
  variant: 'contained',
  color: 'info',
  state: 'default',
  theme: 'light',
};

export const Error = Template.bind({});
Error.args = {
  size: 'medium',
  label: 'Error Button',
  variant: 'contained',
  color: 'error',
  state: 'default',
  theme: 'light',
};