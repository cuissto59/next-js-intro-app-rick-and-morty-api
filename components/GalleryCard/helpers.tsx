import { BADGE_COLORS } from '@/components/Badge/types';
import { GENDER } from '@/constants/constants';
import { Gender } from '@/interfaces/characters';

export const resolveGenderBadgeColor = ({ gender }: { gender: Gender }) => {
  switch (gender) {
    case GENDER.FEMALE:
      return BADGE_COLORS.RED;
    case GENDER.MALE:
      return BADGE_COLORS.BLUE;
    case GENDER.GENDERLESS:
      return BADGE_COLORS.YELLOW;
    default:
      return BADGE_COLORS.GRAY;
  }
};
