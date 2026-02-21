import type { Metadata } from "next";
import FaqMain from '@/sections/faq/FaqMain';
import React from 'react';

export const metadata: Metadata = {
    title: "FAQ",
    description:
        "Frequently asked questions about PapouDigital services, project delivery, pricing, security, AI and automation, ownership, and post-launch support.",
    alternates: {
        canonical: "/inner/faq",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const page: React.FC = () => {
    return (
        <>
            <FaqMain />
        </>
    );
};

export default page;
