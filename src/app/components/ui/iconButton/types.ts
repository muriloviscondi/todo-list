export type Size = 'sm' | 'md' | 'lg';

export type Variant = 'success' | 'danger' | 'warning';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}
