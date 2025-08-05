export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  weight?: number | string;
  align?: 'left' | 'center' | 'right';
  margin?: string;
  $isLineThrough?: boolean;
  children: React.ReactNode;
}
