'use client';
import {Box} from '@/components/Box';
import {Back} from '@/components/DetailSection/Back';
import {Next} from '@/components/DetailSection/Next';
import {Randomize} from '@/components/DetailSection/Randomize';
import {CharacterInfoSection} from '@/containers';
import React, {Suspense} from 'react';
import {Id} from './Id';


export const DetailSection = () => {
    return (
        <Box className={'flex  mt-2 min-h-[50vh]'}>
            <Id/>
            <Suspense fallback={<>loading ...</>}>
                <CharacterInfoSection/>
            </Suspense>
            <Box className={'flex justify-between gap-4 ml-auto  pr-2 mt-2'}>
                <Randomize/>
                <Back/>
                <Next/>
            </Box>
        </Box>
    );
};
