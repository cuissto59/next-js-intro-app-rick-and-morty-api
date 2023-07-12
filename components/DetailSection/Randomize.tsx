import { Box } from '@/components/Box';
import { characterAtomId } from '@/state/atoms';
import { useSetAtom } from 'jotai';

export const Randomize = () => {
  const setId = useSetAtom(characterAtomId);
  return (
    <Box
      as={'button'}
      className={
        'border-none cursor-pointer font-thin text-6xl pb-20 px-0 flex items-end text-current h-fit w-fit'
      }
      onClick={() => setId(Math.round(Math.random() * 100))}
    >
      ↺
    </Box>
  );
};
