"use client"
import React from 'react';
import VideoPopup from '../elements/VideoPopup';
import ScrollToTop from '../elements/ScrollToTop';
import SearchProp from '../elements/SearchProp';
import SideBar from '../elements/SideBar';
import { usePapouDigitalContext } from '../context/usePapouDigitalContext';
import MobileNav from '../elements/MobileNav';

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isMobile, isSearch, locale } = usePapouDigitalContext();
    return (
        <div className={`custom-cursor ${isMobile ? "locked" : ""} ${isSearch ? 'search-active' : ''}`}>
            <div key={locale}>
                {children}
            </div>
            <MobileNav />
            <SideBar />
            <SearchProp />
            <ScrollToTop />
            <VideoPopup />
        </div>
    );
};

export default CustomLayout;
