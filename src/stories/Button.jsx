// import React from 'react';

// import PropTypes from 'prop-types';

// import './button.css';

// /** Primary UI component for user interaction */
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

// Button.propTypes = {
//   /** Is this the principal call to action on the page? */
//   primary: PropTypes.bool,
//   /** What background color to use */
//   backgroundColor: PropTypes.string,
//   /** How large should the button be? */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /** Button contents */
//   label: PropTypes.string.isRequired,
//   /** Optional click handler */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };



// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/** Primary UI component for user interaction */
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  variant,
  type,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const variantClass = variant === 'outlined' ? 'storybook-button--outlined' : 'storybook-button--filled';
  const typeClass = `storybook-button--${type}`;
  const disabledClass = disabled ? 'storybook-button--disabled' : '';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, variantClass, typeClass, disabledClass].join(' ')}
      style={backgroundColor && { backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="icon-left">{leftIcon}</span>}
      {label}
      {rightIcon && <span className="icon-right">{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined']),
  type: PropTypes.oneOf(['default', 'success', 'error']),
  disabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  variant: 'filled',
  type: 'default',
  disabled: false,
  onClick: undefined,
};
