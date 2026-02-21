"use client"
import React, { useEffect, useState } from 'react';
import logo2 from '../../../public/assets/images/logo-pg.png';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';
import Link from 'next/link';
import ManuList from '../manu-item/ManuList';
import Image from 'next/image';
import LanguageSwitcher from '@/components/elements/LanguageSwitcher';

const StrickyHeaderTwo: React.FC = () => {
    const { setIsMobile, setIsSearch, t } = usePapouDigitalContext();
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
        <div className={`stricky-header stricked-menu main-menu main-menu-two ${isStick ? 'stricky-fixed' : ''}`}>
            <div className="sticky-header__content">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link href="/">
                                    <Image
                                        src={logo2}
                                        width={logo2.width}
                                        height={logo2.height}
                                        alt="Logo"
                                        style={{ width: "auto", height: "29px" }}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="main-menu-two__main-menu-box">
                            <Link href="#" className="mobile-nav__toggler" onClick={() => setIsMobile((pre) => !pre)}><i className="fa fa-bars"></i></Link>
                            <ManuList />
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__call">
                                <div className="main-menu-two__call-icon">
                                    <i className="icon-phone"></i>
                                </div>
                                <div className="main-menu-two__call-content">
                                    <p className="main-menu-two__call-sub-title">{t("common.callAnytime")}</p>
                                    <h5 className="main-menu-two__call-number">
                                        <a href="https://wa.me/22890145611" target="_blank" rel="noopener noreferrer">+228 90145611</a>
                                    </h5>
                                </div>
                            </div>
                            <LanguageSwitcher light />
                            <div className="main-menu-two__search-cart-box">
                                <div className="main-menu-two__search-cart-box">
                                    <div className="main-menu-two__search-box" onClick={() => setIsSearch(pre => !pre)}>
                                        <span className="main-menu-two__search searcher-toggler-box icon-search-1"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="main-menu-two__btn-box">
                                <Link href="/inner/contact" className="thm-btn thm-btn-two main-menu-two__btn">
                                    {t("common.contactUsLower")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrickyHeaderTwo;
