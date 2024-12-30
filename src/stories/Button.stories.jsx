import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['filled', 'outlined', 'text'] },
    color: { control: 'select', options: ['emphasis', 'error', 'info'] },
    state: { control: 'select', options: ['default', 'hover', 'clicked', 'disabled', 'active'] },
    text: { control: 'boolean' },
    startIcon: {
      control: 'boolean',
      if: { arg: 'text', eq: true }, // Show only if text is true
    },
    endIcon: {
      control: 'boolean',
      if: { arg: 'text', eq: true }, // Show only if text is true
    },
    iconOnly: {
      control: 'select',
      options: ['faSmile', 'faArrowRight', 'none'], // Predefined icon names
      if: { arg: 'text', eq: false }, // Show only if text is false
    },
  },
  args: { onClick: action('clicked') },
};

const Template = (args) => {
  const { startIcon, endIcon, iconOnly, text, ...rest } = args;

  // Map string inputs to actual FontAwesome icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'faSmile':
        return <FontAwesomeIcon icon={faSmile} />;
      case 'faArrowRight':
        return <FontAwesomeIcon icon={faArrowRight} />;
      default:
        return null; // Return null if no match
    }
  };

  return (
    <Button
      {...rest}
      text={text} // Pass text explicitly
      startIcon={text && startIcon ? getIcon('faSmile') : null}
      endIcon={text && endIcon ? getIcon('faArrowRight') : null}
      iconOnly={!text && iconOnly ? getIcon(iconOnly) : null}
      label={text ? args.label : null} // Hide label when text is false
    />
  );
};

// Variants and States
export const Emphasis = Template.bind({});
Emphasis.args = {
  label: 'Emphasis Button',
  size: 'medium',
  variant: 'filled',
  color: 'emphasis',
  state: 'default',
  text: true, // Explicitly set text to true
  startIcon: true,
  endIcon: true,
  iconOnly: 'faSmile', // Selectable icon from controls
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error Button',
  size: 'medium',
  variant: 'filled',
  color: 'error',
  state: 'default',
  text: true, // Explicitly set text to true
  startIcon: true,
  endIcon: true,
  iconOnly: 'faSmile', // Selectable icon from controls
};

export const Info = Template.bind({});
Info.args = {
  label: 'Info Button',
  size: 'medium',
  variant: 'filled',
  color: 'info',
  state: 'default',
  text: true, // Explicitly set text to true
  startIcon: true,
  endIcon: true,
  iconOnly: 'faSmile', // Selectable icon from controls
};

