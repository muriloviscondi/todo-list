export type Size = 'sm' | 'md' | 'lg';

export type Variant = 'default' | 'primary' | 'danger' | 'success' | 'warning';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}
