interface AngleProps {
  cx: number;
  cy: number;
  ex: number;
  ey: number;
}

export const angle = ({ cx, cy, ex, ey }: AngleProps) => {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  return (rad * 180) / Math.PI;
};
