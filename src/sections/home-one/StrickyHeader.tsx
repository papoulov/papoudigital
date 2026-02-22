"use client"
import React, { useEffect, useState } from 'react';
import logo from '../../../public/assets/images/logo-pg.png';
import Link from 'next/link';
import ManuList from '../manu-item/ManuList';
import Image from 'next/image';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';
import LanguageSwitcher from '@/components/elements/LanguageSwitcher';
const StrickyHeader: React.FC = () => {
    const { setIsSidebar, setIsMobile, setIsSearch, t } = usePapouDigitalContext();
    const [isStick, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`stricky-header stricked-menu main-menu ${isStick ? 'stricky-fixed' : ''}`}>
            <div className="sticky-header__content">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/"><Image src={logo} width={117} height={29} alt="Logo" /></Link>
                                </div>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={(e) => { e.preventDefault(); setIsMobile(true); }}><i className="fa fa-bars"></i></Link>
                                <ManuList />
                            </div>
                            <div className="main-menu__right">
                                <LanguageSwitcher />
                                <div className="main-menu__search-box" onClick={() => setIsSearch(pre => !pre)}>
                                    <span className="main-menu__search searcher-toggler-box icon-search-1"></span>
                                </div>
                                <div className="main-menu__btn-box">
                                    <Link href="/inner/contact" className="thm-btn main-menu__btn">{t("common.contactUs")}</Link>
                                </div>
                                <div className="main-menu__nav-sidebar-icon">
                                    <Link className="navSidebar-button" href="#" onClick={() => setIsSidebar(pre => !pre)}>
                                        <span className="icon-more"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StrickyHeader;
