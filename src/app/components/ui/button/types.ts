export type Variant = 'default' | 'primary' | 'success' | 'danger' | 'warning';

export type Size = 'sm' | 'md' | 'lg';

export interface StyledButtonProps {
  variant?: Variant;
  shape?: 'default' | 'circle';
  size?: Size;
  active?: boolean;
}
