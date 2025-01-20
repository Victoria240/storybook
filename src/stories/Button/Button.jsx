import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme, color, variant }) => {
  const baseStyles = {
    borderRadius: theme.shape.borderRadius,
    textTransform: 'none',
  };

  const containedStyles = {
    backgroundColor: theme.palette[color]?.main || color,
    color: theme.palette[color]?.contrastText || '#ffffff',
    '&:hover': {
      backgroundColor: theme.palette[color]?.light || color,
      boxShadow: theme.shadows[2],
    },
  };

  const outlinedStyles = {
    borderColor: theme.palette[color]?.main || color,
    color: theme.palette[color]?.main || color,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette[color]?.light + '20' || 'rgba(0, 0, 0, 0.04)', // 20% opacity
    },
  };

  const textStyles = {
    color: theme.palette[color]?.main || color,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette[color]?.light + '20' || 'rgba(0, 0, 0, 0.04)',
    },
  };

  switch (variant) {
    case 'contained':
      return { ...baseStyles, ...containedStyles };
    case 'outlined':
      return { ...baseStyles, ...outlinedStyles };
    case 'text':
      return { ...baseStyles, ...textStyles };
    default:
      return baseStyles;
  }
});

const CustomButton = ({
  size,
  label,
  variant,
  color,
  startIcon,
  endIcon,
  iconOnly,
  ...props
}) => {
  return (
    <StyledButton
      size={size}
      variant={variant}
      color={color}
      {...props}
    >
      {iconOnly ? (
        <span>{iconOnly}</span>
      ) : (
        <>
          {startIcon && <span style={{ marginRight: 8 }}>{startIcon}</span>}
          {label}
          {endIcon && <span style={{ marginLeft: 8 }}>{endIcon}</span>}
        </>
      )}
    </StyledButton>
  );
};

CustomButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  color: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  iconOnly: PropTypes.node,
};

CustomButton.defaultProps = {
  size: 'medium',
  variant: 'contained',
  color: 'primary',
  label: '',
  startIcon: null,
  endIcon: null,
  iconOnly: null,
};

export default CustomButton;