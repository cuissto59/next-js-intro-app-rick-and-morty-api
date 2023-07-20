import { useMergeRefs } from '@/hooks/useMergeRefs';
import React, {
  ComponentPropsWithRef,
  forwardRef,
  ForwardRefRenderFunction,
  JSX,
  Ref,
} from 'react';

type BoxProps<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = ComponentPropsWithRef<C> & {
  children: React.ReactNode;
  as?: C;
};

const Box: ForwardRefRenderFunction<any, BoxProps<any>> = <
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
>(
  { as: Component = 'div', children, ...rest }: BoxProps<C>,
  ref: Ref<React.ElementRef<C>>
) => {
  const mergedRef = useMergeRefs(ref);

  return (
    <Component ref={mergedRef} {...rest}>
      {children}
    </Component>
  );
};
Box.displayName = 'Box';

export default forwardRef(Box);
