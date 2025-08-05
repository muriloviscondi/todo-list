export type Variant = 'default' | 'success' | 'danger';

export type Size = 'sm' | 'md' | 'lg';

export interface StyledButtonProps {
  variant?: Variant;
  shape?: 'default' | 'circle';
  size?: Size;
  active?: boolean;
}
