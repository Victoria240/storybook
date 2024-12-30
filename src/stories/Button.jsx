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
  text,
  startIcon,
  endIcon,
  iconOnly,
  ...props
}) => {
  const variantClass = variant ? `storybook-button--${variant}` : '';
  const colorClass = color ? `storybook-button--${color}` : '';
  const stateClass = state ? `storybook-button--${state}` : '';
  const textClass = text ? `storybook-button--text` : '';

  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        variantClass,
        colorClass,
        stateClass,
        textClass,
      ].join(' ')}
      onClick={onClick}
      {...props}
    >
      {text ? (
        <>
          {startIcon && <span className="icon-left" >{startIcon}</span>}
          {label}
          {endIcon && <span className="icon-right">{endIcon}</span>}
        </>
      ) : (
          <span className="icon-only">{iconOnly}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined', 'text']),
  color: PropTypes.oneOf(['emphasis', 'error', 'info']),
  state: PropTypes.oneOf(['default', 'hover', 'clicked', 'disabled', 'active']),
  text: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  iconOnly: PropTypes.node,
};

Button.defaultProps = {
  size: 'medium',
  variant: 'filled',
  color: 'emphasis',
  state: 'default',
  text: true,
  startIcon: null,
  endIcon: null,
  iconOnly: null,
  onClick: undefined,
};

export default Button;
