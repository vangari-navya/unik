import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'golden' | 'outline' | 'outline-white'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  const sizeClasses = {
    sm: 'padding: 0.5rem 1.1rem; font-size: 0.85rem;',
    md: '',
    lg: 'padding: 1rem 2.25rem; font-size: 1.1rem;'
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </motion.button>
  );
}
