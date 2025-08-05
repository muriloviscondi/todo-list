export const variantStyles = {
  default: {
    bg: '#f5f5f5',
    color: '#333',
    hover: '#e0e0e0',
  },
  primary: {
    bg: '#1a73e8',
    color: '#fff',
    hover: '#1669c1',
  },
  success: {
    bg: '#137333',
    color: '#fff',
    hover: '#0f5f2b',
  },
  danger: {
    bg: '#d32f2f',
    color: '#fff',
    hover: '#b71c1c',
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
