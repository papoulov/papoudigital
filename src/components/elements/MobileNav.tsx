"use client"
import React, { useState } from 'react';
import logo from "../../../public/assets/images/logo-pg.png";
import { usePapouDigitalContext } from '../context/usePapouDigitalContext';
import Link from 'next/link';
import Image from 'next/image';
import { getServicesLinks } from '@/contents/nav/nav';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
const MobileNav: React.FC = () => {
    const { isMobile, setIsMobile, locale, t } = usePapouDigitalContext();
    const pathName = usePathname();
    const serviceLinks = getServicesLinks(locale);
    const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false)

    const closeMobileState = () => {
        setIsMobile(false)
        setIsServiceOpen(false)
    }
    const closeNav = () => {
        closeMobileState();
    };

    React.useEffect(() => {
        if (!isMobile) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobile]);

    React.useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(min-width: 1200px)");
        const handleViewportChange = () => {
            if (mediaQuery.matches) {
                closeMobileState();
            }
        };

        handleViewportChange();

        if (typeof mediaQuery.addEventListener === "function") {
            mediaQuery.addEventListener("change", handleViewportChange);
            return () => mediaQuery.removeEventListener("change", handleViewportChange);
        }

        mediaQuery.addListener(handleViewportChange);
        return () => mediaQuery.removeListener(handleViewportChange);
    }, []);

    const isCurrent = (pathArray: string[]): boolean => {
        if (pathName.includes("/inner")) {
            const cleanPath = pathName.replace(/^\/inner/, '');
            return pathArray.includes(cleanPath);
        }
        return pathArray.includes(pathName);
    };

    return (
        <div className={`mobile-nav__wrapper ${isMobile ? "expanded" : ""}`}>
            <div onClick={closeNav} className="mobile-nav__overlay mobile-nav__toggler"></div>

            <div className="mobile-nav__content">
                <span onClick={closeNav} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link href="/" onClick={closeNav} aria-label="logo image">
                        <Image src={logo} width={logo.width} height={logo.height} alt="Logo" style={{ width: "auto", height: "29px" }} />
                    </Link>
                </div>

                <div className="mobile-nav__lang-switcher">
                    <LanguageSwitcher light />
                </div>

                {/* ======= NAV MENU ======= */}
                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        <li className={`${isCurrent(["/", "/index2"]) ? 'current' : ''}`}>
                            <Link onClick={closeMobileState} href="/">{t("common.home")}</Link>
                        </li>

                        <li className={`${isCurrent(['/about']) ? 'current' : ''}`}>
                            <Link onClick={closeMobileState} href="/inner/about">{t("common.about")}</Link>
                        </li>

                        <li className={`dropdown ${isCurrent(["/services", "/digital-marketing", "/web-design-development", "/search-engine-optimization", "/design-and-branding", "/app-development", "/developer", "/client-portal"]) ? 'current' : ''}`}>
                            <Link href="#" onClick={(e) => e.preventDefault()}>
                                <span className={`${isServiceOpen ? 'hoverColor' : ''}`}>{t("common.services")}</span>
                                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsServiceOpen(pre => !pre); }} type="button" className={`${isServiceOpen ? 'expanded' : ''}`} aria-label={t("common.services")} aria-expanded={isServiceOpen}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </Link>
                            <ul style={{ display: `${!isServiceOpen ? 'none' : 'block'}` }}>
                                {
                                    serviceLinks.map(Item => <li key={Item?.id}>
                                        <Link href={Item?.link} onClick={closeMobileState}>{Item?.value}</Link>
                                    </li>)
                                }

                            </ul>
                        </li>

                        <li className={`${isCurrent(['/pricing']) ? 'current' : ''}`}>
                            <Link onClick={closeMobileState} href="/inner/pricing">{t("nav.pricing")}</Link>
                        </li>

                        <li className={`${isCurrent(["/blog", "/blog-carousel", "/blog-list", "/blog-details"]) ? 'current' : ''}`}>
                            <Link onClick={closeMobileState} href="/inner/blog">{t("common.blog")}</Link>
                        </li>
                    </ul>
                </div>

                {/* ======= CONTACT & SOCIAL ======= */}
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <Link href="mailto:info@papoudigital.com">info@papoudigital.com</Link>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <Link href="https://wa.me/22890145611" target="_blank" rel="noopener noreferrer">+228 90145611</Link>
                    </li>
                    <li>
                        <i className="icon-pin"></i>
                        <span className="mobile-nav__contact-text">Rue Bassope, Be Kpota, Lome Togo</span>
                    </li>
                </ul>

                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <Link href="#" className="fab fa-twitter"></Link>
                        <Link href="https://www.facebook.com/profile.php?id=61588190145379" className="fab fa-facebook-square" target="_blank" rel="noopener noreferrer"></Link>
                        <Link href="#" className="fab fa-pinterest-p"></Link>
                        <Link href="#" className="fab fa-instagram"></Link>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default MobileNav;
