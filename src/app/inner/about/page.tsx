import type { Metadata } from "next";
import AboutUsThree from '@/sections/about/AboutUsThree';
import AboutStatement from '@/sections/about/AboutStatement';
import CtaCommon from '@/sections/about/CtaCommon';
import WhyChooseA from '@/sections/common/WhyChooseA';
import React from 'react';

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Discover PapouDigital's mission, vision, and values. We are a network of African tech professionals delivering world-class execution.",
    alternates: {
        canonical: "/inner/about",
    },
};

const page: React.FC = () => {
    return (
        <>
            <AboutUsThree />
            <AboutStatement />
            <WhyChooseA />
            <CtaCommon />
        </>
    );
};

export default page;
