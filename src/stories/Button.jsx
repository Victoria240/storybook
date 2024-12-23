import React from 'react';

import PropTypes from 'prop-types';

import './button.css';

/** Primary UI component for user interaction */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};


// import React, { FC } from 'react';

// type ButtonProps = {
//   label: string;
//   size?: 'sm' | 'md' | 'lg';
//   type?: 'default' | 'success' | 'error';
//   variant?: 'filled' | 'outlined';
//   disabled?: boolean;
//   leftIcon?: React.ReactNode;
//   rightIcon?: React.ReactNode;
//   onClick?: () => void;
// };

// const sizeStyles = {
//   sm: { padding: '0 12px', fontSize: '14px' },
//   md: { padding: '0 16px', fontSize: '16px' },
//   lg: { padding: '0 24px', fontSize: '18px' },
// };

// const typeStyles = {
//   default: { backgroundColor: '#e0e0e0', color: '#000' },
//   success: { backgroundColor: '#4caf50', color: '#fff' },
//   error: { backgroundColor: '#f44336', color: '#fff' },
// };

// const variantStyles = {
//   filled: {},
//   outlined: { border: '1px solid', backgroundColor: 'transparent' },
// };

// const disabledStyles = {
//   opacity: 0.6,
//   cursor: 'not-allowed',
// };

// // State Styles
// const hoverStyles = {
//   default: { backgroundColor: '#d6d6d6' },
//   success: { backgroundColor: '#45a049' },
//   error: { backgroundColor: '#e53935' },
// };

// const focusStyles = {
//   outline: '2px solid #000',
// };

// const activeStyles = {
//   transform: 'scale(0.98)',
// };

// export const Button: FC<ButtonProps> = ({
//   label,
//   size = 'md',
//   type = 'default',
//   variant = 'filled',
//   disabled = false,
//   leftIcon,
//   rightIcon,
//   onClick,
// }) => {
//   const baseStyles = {
//     height: '48px',
//     border: 'none',
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     whiteSpace: 'nowrap',
//     gap: '8px',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     ...sizeStyles[size],
//     ...typeStyles[type],
//     ...variantStyles[variant],
//     ...(disabled && disabledStyles),
//   };

//   return (
//     <button
//       style={baseStyles}
//       onClick={disabled ? undefined : onClick}
//       disabled={disabled}
//       onMouseEnter={(e) =>
//       (e.currentTarget.style.backgroundColor =
//         hoverStyles[type]?.backgroundColor || baseStyles.backgroundColor)
//       }
//       onMouseLeave={(e) =>
//       (e.currentTarget.style.backgroundColor =
//         typeStyles[type]?.backgroundColor)
//       }
//       onFocus={(e) => (e.currentTarget.style.outline = focusStyles.outline)}
//       onBlur={(e) => (e.currentTarget.style.outline = 'none')}
//       onMouseDown={(e) =>
//         (e.currentTarget.style.transform = activeStyles.transform)
//       }
//       onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//     >
//       {leftIcon && <span>{leftIcon}</span>}
//       {label}
//       {rightIcon && <span>{rightIcon}</span>}
//     </button>
//   );
// };