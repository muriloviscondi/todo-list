export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  align?: 'left' | 'center' | 'right';
  color?: string;
  family?: string;
  margin?: string;
  size?: 'sm' | 'md' | 'lg';
  weight?: number | string;
  children: React.ReactNode;
  $isLineThrough?: boolean;
}
