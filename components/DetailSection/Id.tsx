'use client';
import { characterAtomId } from '@/state/atoms';
import { useAtomValue } from 'jotai';
import { a, useSpring } from 'react-spring';

export const Id = () => {
  const id = useAtomValue(characterAtomId);
  const props = useSpring({ from: { id: 0 }, id, reset: true });
  return (
    <a.h1
      className={
        '[writing-mode:vertical-lr] [font-variant-numeric: tabular-nums] font-bold text-[15em] text-left m-0 p-50 pt-0 pl-20'
      }
    >
      {props.id.to((id) => Math.round(id))}
    </a.h1>
  );
};
