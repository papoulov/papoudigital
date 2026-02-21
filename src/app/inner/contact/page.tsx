import type { Metadata } from "next";
import ContactMain from '@/sections/contact/ContactMain';
import React from 'react';

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contact PapouDigital to discuss your project, request technical support, or get a tailored proposal for your business.",
    alternates: {
        canonical: "/inner/contact",
    },
};

const page:React.FC = () => {
    return (
        <>
            <ContactMain />
        </>
    );
};

export default page;
