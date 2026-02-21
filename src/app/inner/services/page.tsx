import type { Metadata } from "next";
import ContactInner from '@/sections/services/ContactInner';
import FaqInner from '@/sections/services/FaqInner';
import ServiseInner from '@/sections/services/ServiseInner';
import WhyChooseInner from '@/sections/services/WhyChooseInner';
import React from 'react';

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore PapouDigital services: digital transformation, web and app development, AI automation, cloud integration, branding, and growth support.",
    alternates: {
        canonical: "/inner/services",
    },
};

const page: React.FC = () => {
    return (
        <div className="services-page">
            <ServiseInner />
            <WhyChooseInner />
            <ContactInner />
            <FaqInner />
        </div>
    );
};

export default page;
