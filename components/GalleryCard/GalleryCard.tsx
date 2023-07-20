'use client';
import { Badge } from '@/components/Badge/Badge';
import Box from '@/components/Box/Box';
import { resolveGenderBadgeColor } from '@/components/GalleryCard/helpers';
import { Character } from '@/interfaces/characters';

import Image from 'next/image';

interface GalleryCardProps {
  character: Character;
}

export const GalleryCard = ({ character }: GalleryCardProps) => {
  const genderBadgeColor = resolveGenderBadgeColor({
    gender: character.gender,
  });
  return (
    <Box>
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
