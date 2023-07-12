import React, { HTMLAttributes, ReactNode } from 'react';

type BoxProps<C> = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  as?: C;
};

export const Box = <C extends React.ElementType>({
  as,
  children,
  ...rest
}: BoxProps<C>) => {
  const Component = as ?? 'div';

  return <Component {...rest}>{children}</Component>;
};
