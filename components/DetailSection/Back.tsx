import Box from "@/components/Box/Box";
import { characterAtomId } from '@/state/atoms';
import { useAtom } from 'jotai/index';

export const Back = () => {
  const [, setId] = useAtom(characterAtomId);
  return (
    <Box
      as={'button'}
      className={
        'border-none cursor-pointer font-thin text-6xl pb-20 px-0 flex items-end text-current h-fit w-fit'
      }
      onClick={() => setId((prev) => prev - 1)}
    >
      ←
    </Box>
  );
};
