"use client";

import FooterCommon from '@/sections/common/FooterCommon';
import HeaderCommon from '@/sections/common/HeaderCommon';
import StrickyHeaderCommon from '@/sections/common/StrickyHeaderCommon';
import HeaderTwo from '@/sections/home-two/HeaderTwo';
import StrickyHeaderTwo from '@/sections/home-two/StrickyHeaderTwo';
import { usePathname } from 'next/navigation';
import React from 'react';

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const isAboutPage = pathname === "/inner/about";

    return (
        <div className={`page-wrapper inner-page-layout ${isAboutPage ? "about-page-layout" : ""}`}>
            {isAboutPage ? <HeaderTwo /> : <HeaderCommon />}
            <main className="inner-page-content">
                {children}
            </main>
            <FooterCommon />
            {isAboutPage ? <StrickyHeaderTwo /> : <StrickyHeaderCommon />}
        </div>
    );
};

export default layout;
