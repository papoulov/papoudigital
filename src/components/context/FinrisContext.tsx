"use client"
import { createContext } from 'react';
import { contextType } from './contextType';

const FinrisContext = createContext<contextType | null>(null);

export default FinrisContext;