import { HTMLAttributes, PropsWithChildren } from 'react';
import { BADGE_COLORS, BadgeColor } from './types';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
}

const badgeVariant = {
  [BADGE_COLORS.GRAY]: 'bg-gray-100',
  [BADGE_COLORS.BLUE]: 'bg-blue-100',
  [BADGE_COLORS.GREEN]: 'bg-green-100',
  [BADGE_COLORS.RED]: 'bg-red-100',
  [BADGE_COLORS.YELLOW]: 'bg-yellow-100',
};
const badgeTextColorVariant = {
  [BADGE_COLORS.GRAY]: 'text-gray-800',
  [BADGE_COLORS.BLUE]: 'text-blue-800',
  [BADGE_COLORS.GREEN]: 'text-green-800',
  [BADGE_COLORS.RED]: 'text-red-800',
  [BADGE_COLORS.YELLOW]: 'text-yellow-800',
};
export const Badge = ({
  children,
  color = BADGE_COLORS.GRAY,
  ...rest
}: PropsWithChildren<BadgeProps>) => {
  const badgeClasses = `inline-flex px-2 py-1 items-center font-medium rounded-full w-fit`;

  return (
    <span
      className={`${badgeClasses} ${badgeVariant[color]} ${badgeTextColorVariant[color]}`}
      {...rest}
    >
      {children}
    </span>
  );
};
