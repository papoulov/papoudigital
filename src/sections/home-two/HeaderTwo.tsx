"use client"
import React from 'react';
import ManuList from '../manu-item/ManuList';
import logo2 from '../../../public/assets/images/logo-pg.png';
import Link from 'next/link';
import Image from 'next/image';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';
import LanguageSwitcher from '@/components/elements/LanguageSwitcher';

const HeaderTwo: React.FC = () => {
    const { setIsMobile, setIsSearch, t } = usePapouDigitalContext();
    return (
        <header className="main-header-two">
            <div className="main-menu-two__top">
                <div className="main-menu-two__top-inner">
                    <ul className="list-unstyled main-menu-two__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-phone"></i>
                            </div>
                            <div className="text">
                                <p><a href="https://wa.me/22890145611" target="_blank" rel="noopener noreferrer">+228 90145611</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-envelope"></i>
                            </div>
                            <div className="text">
                                <p><a href="mailto:info@papoudigital.com">info@papoudigital.com</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-pin"></i>
                            </div>
                            <div className="text">
                                <p>Rue Bassope, Be Kpota, Lome Togo</p>
                            </div>
                        </li>
                    </ul>
                    <div className="main-menu-two__top-right">
                        <div className="main-menu-two__top-time">
                            <div className="main-menu-two__top-time-icon">
                                <span className="icon-time"></span>
                            </div>
                            <p className="main-menu-two__top-text">{t("common.businessHours")}</p>
                        </div>
                        <div className="main-menu-two__social">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=61588190145379" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu main-menu-two">
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
            </nav>
        </header>
    );
};

export default HeaderTwo;
