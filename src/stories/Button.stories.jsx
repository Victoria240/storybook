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
      control: 'text',
      if: { arg: 'text', eq: false }, // Show only if text is false
    },
  },
  args: { onClick: action('clicked') },
};

const Template = (args) => {
  const { startIcon, endIcon, iconOnly, ...rest } = args;
  return (
    <Button
      {...rest}
      startIcon={startIcon ? <FontAwesomeIcon icon={faSmile} /> : null}
      endIcon={endIcon ? <FontAwesomeIcon icon={faArrowRight} /> : null}
      iconOnly={iconOnly ? <FontAwesomeIcon icon={faSmile} /> : null}
    />
  );
};

export const Emphasis = Template.bind({});
Emphasis.args = {
  label: 'Emphasis Button',
  size: 'medium',
  variant: 'filled',
  color: 'emphasis',
  state: 'default',
  text: true,
  startIcon: <FontAwesomeIcon icon={faSmile} />,
  endIcon: <FontAwesomeIcon icon={faArrowRight} />,
  iconOnly: <FontAwesomeIcon icon={faSmile} />, // Use actual icon component
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error Button',
  size: 'medium',
  variant: 'filled',
  color: 'error',
  state: 'default',
  text: true,
  startIcon: <FontAwesomeIcon icon={faSmile} />,
  endIcon: <FontAwesomeIcon icon={faArrowRight} />,
  iconOnly: <FontAwesomeIcon icon={faSmile} />, // Use actual icon component
};

export const Info = Template.bind({});
Info.args = {
  label: 'Info Button',
  size: 'medium',
  variant: 'filled',
  color: 'info',
  state: 'default',
  text: true,
  startIcon: <FontAwesomeIcon icon={faSmile} />,
  endIcon: <FontAwesomeIcon icon={faArrowRight} />,
  iconOnly: <FontAwesomeIcon icon={faSmile} />, // Use actual icon component
};



