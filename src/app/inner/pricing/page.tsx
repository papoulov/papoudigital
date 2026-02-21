import type { Metadata } from "next";
import PricingMain from '@/sections/pricing/PricingMain';
import React from 'react';

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "View PapouDigital pricing options for web, mobile, AI, and digital solution services tailored to your business scale.",
    alternates: {
        canonical: "/inner/pricing",
    },
};

const page: React.FC = () => {
    return (
        <>
            <PricingMain />
        </>
    );
};

export default page;
