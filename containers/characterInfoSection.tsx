'use client';
import {GalleryCard} from '@/components/GalleryCard';
import {CharacterAtom} from '@/state/atoms';
import {useAtom} from 'jotai';


export const CharacterInfoSection = () => {
    const [character] = useAtom(CharacterAtom);
    return (
        <>
            <GalleryCard character={character}/>
        </>
    );
};
