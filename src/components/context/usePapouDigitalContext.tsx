"use client"
import { useContext } from 'react';
import FinrisContext from './FinrisContext';
import { contextType } from './contextType';

const usePapouDigitalContext = (): contextType => {
    const context = useContext(FinrisContext);
    if (context === null) {
        throw new Error("usePapouDigitalContext must be used within a <PapouDigitalProvider>");
    }
    return context;
};

export { usePapouDigitalContext };
