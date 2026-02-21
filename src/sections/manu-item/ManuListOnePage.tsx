"use client";
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';
import { NavItemSingle } from '@/contents/footer/footerType';
import { getSinglePageNavItems } from '@/contents/nav/nav';
import Link from 'next/link';
import React from 'react';

const ManuListOnePage: React.FC = () => {
    const { activeSection, locale } = usePapouDigitalContext();
    const navItemsSingle = getSinglePageNavItems(locale);

    const handleSinglePageScroll = (e: React.MouseEvent, id: string) => {
        e.preventDefault();

        if (!id) return;
        const element = document.getElementById(id);
        if (!element) return;
        const offset = 70;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    return (
        <ul className="main-menu__list">
            {
                navItemsSingle.map((item: NavItemSingle, i) => <li key={i} className={item?.linkId === activeSection ? 'current' : ''}>
                    <Link href={`#${item.linkId}`}
                        onClick={(e) => handleSinglePageScroll(e, item.linkId)}
                    >
                        {item.navItem}
                    </Link>
                </li>)
            }
        </ul>
    );
}
export default ManuListOnePage;
