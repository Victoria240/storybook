import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({
  size,
  label,
  onClick,
  variant,
  color,
  state,
  text, // NEW PROP: Determines if text should be displayed
  startIcon,
  endIcon,
  iconOnly,
  ...props
}) => {
  // Generate class names based on props
  const variantClass = variant ? `storybook-button--${variant}` : '';
  const colorClass = color ? `storybook-button--${color}` : '';
  const stateClass = state ? `storybook-button--${state}` : ''; // Handles states dynamically

  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`, // small, medium, large
        variantClass, // filled, outlined, text
        colorClass,   // emphasis, error, info
        stateClass,   // hover, clicked, disabled
      ].join(' ')}
      onClick={onClick}
      {...props}
    >
      {text ? ( // Show text only if `text` is true
        <>
          {startIcon && <span className="icon-left">{startIcon}</span>}
          {label}
          {endIcon && <span className="icon-right">{endIcon}</span>}
        </>
      ) : (
        // Show icon-only button if `text` is false
        <span className="icon-only">{iconOnly}</span>
      )}
    </button>
  );
};

// PropTypes validation
Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string, // Made optional for icon-only buttons
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined', 'text']),
  color: PropTypes.oneOf(['emphasis', 'error', 'info']),
  state: PropTypes.oneOf(['default', 'hover', 'clicked', 'disabled', 'active']),
  text: PropTypes.bool, // NEW PROP: Toggles text visibility
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  iconOnly: PropTypes.node,
};

// Default Props
Button.defaultProps = {
  size: 'medium',
  variant: 'filled',
  color: 'emphasis',
  state: 'default',
  text: true, // NEW DEFAULT: Show text by default
  startIcon: null,
  endIcon: null,
  iconOnly: null,
  onClick: undefined,
};

export default Button;
