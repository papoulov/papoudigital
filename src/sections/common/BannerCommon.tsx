import React from "react";
import BGShape from "../../../public/assets/images/shapes/page-header-bg-shape.png"
import shape from "../../../public/assets/images/shapes/page-header-shape-1.png"
import Link from "next/link";
import Image from "next/image";

interface BannerCommonProps {
    title?: string;
    subtitle?: string;
    breadcrumb?: string;
    breadcrumbLink?: string;
    breadcrumb2?: string;
    bgShape?: string;
    shapeImage?: string;
}

const BannerCommon: React.FC<BannerCommonProps> = ({
    title = "About",
    subtitle = "Us",
    breadcrumb = "About Us",
    breadcrumb2 = "",
    breadcrumbLink = "",
    bgShape = BGShape,
    shapeImage = shape,
}) => {
    return (
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: `url(${bgShape})` }} ></div>
            <div className="page-header__shape-1">
                <Image src={shapeImage} width={1911} height={448} alt="Decorative Shape" />
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>
                        {title} <span>{subtitle}</span>
                    </h2> 
                    <div className="thm-breadcrumb__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li> <i className="icon-home"></i> <Link href="/">Home</Link> </li>
                            <li> <span></span> </li>
                            {
                                breadcrumb2 ?
                                    <>
                                        <li><Link href={breadcrumbLink}>{breadcrumb}</Link></li>
                                        <li> <span></span> </li>
                                        <li>{breadcrumb2}</li>
                                    </>
                                    :
                                    <li>{breadcrumb}</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerCommon;
