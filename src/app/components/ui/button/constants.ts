export const variantStyles = {
  default: {
    bg: '#f5f5f5',
    color: '#333',
    hover: '#e0e0e0',
    activeBg: '#1a73e8',
    activeColor: '#fff',
    activeHover: '#1669c1',
    activeBorder: '#1a73e8',
  },
  primary: {
    bg: '#1a73e8',
    color: '#fff',
    hover: '#1669c1',
    activeBg: '#1669c1',
    activeColor: '#fff',
    activeHover: '#1565c0',
    activeBorder: '#1669c1',
  },
  success: {
    bg: '#137333',
    color: '#fff',
    hover: '#0f5f2b',
    activeBg: '#0f5f2b',
    activeColor: '#fff',
    activeHover: '#0d5025',
    activeBorder: '#0f5f2b',
  },
  danger: {
    bg: '#d32f2f',
    color: '#fff',
    hover: '#b71c1c',
    activeBg: '#b71c1c',
    activeColor: '#fff',
    activeHover: '#a71e1e',
    activeBorder: '#b71c1c',
  },
  warning: {
    bg: '#f57c00',
    color: '#fff',
    hover: '#ef6c00',
    activeBg: '#ef6c00',
    activeColor: '#fff',
    activeHover: '#e65100',
    activeBorder: '#ef6c00',
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
