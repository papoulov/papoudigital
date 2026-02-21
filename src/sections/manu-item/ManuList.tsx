"use client"
import React from 'react';
import { getServicesLinks } from '@/contents/nav/nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';

const ManuList: React.FC = () => {
    const pathName: string = usePathname();
    const { locale, t } = usePapouDigitalContext();
    const serviceLinks = getServicesLinks(locale);
    const [isServicesOpen, setIsServicesOpen] = React.useState<boolean>(false);
    const servicesMenuRef = React.useRef<HTMLLIElement | null>(null);

    React.useEffect(() => {
        setIsServicesOpen(false);
    }, [pathName]);

    React.useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            if (!servicesMenuRef.current) return;
            if (!servicesMenuRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener("click", handleDocumentClick);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const isCurrent = (pathArray: string[]): boolean => {
        if (pathName.includes("/inner")) {
            const cleanPath = pathName.replace(/^\/inner/, '');
            return pathArray.includes(cleanPath);
        }
        return pathArray.includes(pathName);
    };
    return (
        <ul className="main-menu__list">
            <li className={`${isCurrent(["/", "/index2"]) ? 'current' : ''}`}>
                <Link href="/">{t("common.home")}</Link>
            </li>

            <li className={`${isCurrent(['/about']) ? 'current' : ''}`}>
                <Link href="/inner/about">{t("common.about")}</Link>
            </li>
            <li ref={servicesMenuRef} className={`dropdown ${isServicesOpen ? 'menu-open' : ''} ${isCurrent(["/services", "/digital-marketing", "/web-design-development", "/search-engine-optimization", "/design-and-branding", "/app-development", "/developer", "/client-portal"]) ? 'current' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); setIsServicesOpen((prev) => !prev); }}>{t("common.services")}</a>
                <ul>
                    {
                        serviceLinks.map(Item => <li key={Item?.id}  >
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={`${isCurrent(['/pricing']) ? 'current' : ''}`}>
                <Link href="/inner/pricing">{t("nav.pricing")}</Link>
            </li>
            <li className={`${isCurrent(["/blog", "/blog-carousel", "/blog-list", "/blog-details"]) ? 'current' : ''}`}>
                <Link href="/inner/blog">{t("common.blog")}</Link>
            </li>
        </ul>
    );
}
export default ManuList;
