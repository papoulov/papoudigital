"use client"
import React from 'react'; 
import moreIcon from "../../../public/assets/images/icon/services-details-more-services-icon.png";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';
interface Service {
    name: string;
    link: string;
}
const ServicesList: React.FC = () => {
    const PathName = usePathname();
    const { t } = usePapouDigitalContext();
    const services: Service[] = [
        { name: t("servicesPage.list.digital"), link: "/inner/digital-marketing" },
        { name: t("servicesPage.list.web"), link: "/inner/web-design-development" },
        { name: t("servicesPage.list.seo"), link: "/inner/search-engine-optimization" },
        { name: t("servicesPage.list.app"), link: "/inner/app-development" },
    ];
    return (
        <ul className="services-details__more-services-list list-unstyled">
            {services.map((item: Service, i) => (
                <li key={i} className={item?.link === PathName ? "active" : ""}>
                    <div className="icon">
                        <Image src={moreIcon} width={19} height={18} alt={item.name} />
                    </div>
                    <p>
                        <Link href={item?.link}>{item.name}</Link>
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default ServicesList;
