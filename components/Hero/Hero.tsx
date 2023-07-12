'use client';
import { HERO_TITLE } from '@/constants/constants';
import { angle } from '@/helpers/helpers';
import Eye from 'assets/img/eye.png';
import Look_Morty from 'assets/img/Look_Morty.png';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '../Box';

export const Hero = () => {
  const anchor = useRef<HTMLImageElement>(null);
  const [angleDeg, setAngleDeg] = useState(0);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { clientX, clientY } = event;
    if (anchor?.current) {
      const rekt = anchor.current.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;
      setAngleDeg(
        angle({
          cx: clientX,
          cy: clientY,
          ex: anchorX,
          ey: anchorY,
        })
      );
    }
  };

  useEffect(() => {
    const eyes = document.querySelectorAll<HTMLElement>('.eye');
    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${-90 + angleDeg}deg)`;
    });
  }, [angleDeg]);

  return (
    <Box className={'hero'} onMouseMove={handleMouseMove}>
      <Box as={'h1'} className={'hero_title_middle'}>
        {HERO_TITLE}
      </Box>
      <Image
        ref={anchor}
        width={600}
        height={600}
        src={Look_Morty}
        alt={'look-morty'}
      />
      <Box className={'container'}>
        <Image
          width={48}
          height={48}
          className={'eye'}
          src={Eye}
          alt={'eye'}
          style={{ bottom: '63px', right: '580px' }}
        />
        <Image
          width={48}
          height={48}
          className={'eye'}
          src={Eye}
          alt={'eye'}
          style={{ left: '825px', bottom: '58px' }}
        />
        <Image
          width={48}
          height={48}
          className={'eye'}
          src={Eye}
          alt={'eye'}
          style={{ top: '89px', left: '628px' }}
        />
        <Image
          width={48}
          height={48}
          className={'eye'}
          src={Eye}
          alt={'eye'}
          style={{ top: '69px', left: '720px' }}
        />
      </Box>
    </Box>
  );
};
