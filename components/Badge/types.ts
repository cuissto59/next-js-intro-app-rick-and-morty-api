export const BADGE_COLORS = {
  GRAY: 'gray',
  BLUE: 'blue',
  GREEN: 'green',
  RED: 'red',
  YELLOW: 'yellow',
};
export type BadgeColor = (typeof BADGE_COLORS)[keyof typeof BADGE_COLORS];
