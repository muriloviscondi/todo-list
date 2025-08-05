export const variantStyles = {
  default: {
    bg: '#f5f5f5',
    color: '#424242',
    hover: '#e0e0e0',
    activeBg: '#03a9f4',
    activeColor: '#fff',
    activeHover: '#0277bd',
    activeBorder: '#03a9f4',
  },
  primary: {
    bg: '#03a9f4',
    color: '#fff',
    hover: '#0277bd',
    activeBg: '#0277bd',
    activeColor: '#fff',
    activeHover: '#01579b',
    activeBorder: '#0277bd',
  },
  success: {
    bg: '#4caf50',
    color: '#fff',
    hover: '#388e3c',
    activeBg: '#388e3c',
    activeColor: '#fff',
    activeHover: '#2e7d32',
    activeBorder: '#388e3c',
  },
  danger: {
    bg: '#f44336',
    color: '#fff',
    hover: '#d32f2f',
    activeBg: '#d32f2f',
    activeColor: '#fff',
    activeHover: '#c62828',
    activeBorder: '#d32f2f',
  },
  warning: {
    bg: '#ff9800',
    color: '#fff',
    hover: '#f57c00',
    activeBg: '#f57c00',
    activeColor: '#fff',
    activeHover: '#ef6c00',
    activeBorder: '#f57c00',
  },
} as const;

export const sizeStyles = {
  sm: {
    height: '32px',
    padding: '0 12px',
    fontSize: '14px',
  },
  md: {
    height: '40px',
    padding: '0 16px',
    fontSize: '16px',
  },
  lg: {
    height: '48px',
    padding: '0 20px',
    fontSize: '18px',
  },
} as const;
