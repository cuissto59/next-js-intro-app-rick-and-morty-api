'use client';
import { Badge } from '@/components/Badge/Badge';
import { resolveGenderBadgeColor } from '@/components/GalleryCard/helpers';
import { Character } from '@/interfaces/characters';

import Image from 'next/image';
import { Box } from '../Box';

interface GalleryCardProps {
  character: Character;
}

export const GalleryCard = ({ character }: GalleryCardProps) => {
  const genderBadgeColor = resolveGenderBadgeColor({
    gender: character.gender,
  });
  return (
    <Box className={'flex flex-col'}>
      <Box as={'h2'} className={'mb-0.5 font-bold text-5xl font-[Creepster]'}>
        {character.name}
      </Box>
      <Badge color={genderBadgeColor}>{character.gender}</Badge>
      <Image
        className={'rounded-full'}
        src={character.image}
        width={400}
        height={400}
        alt={'galleryImage'}
      />
    </Box>
  );
};
