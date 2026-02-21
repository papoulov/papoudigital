"use client"
import React from 'react';
import catImg from "../../../public/assets/images/start1.png";
import Image from 'next/image';
import Link from 'next/link';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';

const CtaCommon: React.FC = () => {
    const { t } = usePapouDigitalContext();
    return (
        <section className="cta-one cta-two">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__img">
                        <Image src={catImg} width={250} height={330} alt="" />
                    </div>
                    <div className="cta-one__inner-content">
                        <div className="cta-one__shape-bg" ></div>
                        <h3 className="cta-one__title">{t("aboutPage.ctaTitleLine1")} <br /> {t("aboutPage.ctaTitleLine2")}</h3>
                        <div className="cta-one__btn">
                            <Link href="/inner/contact">{t("aboutPage.ctaButton")} <span className=" icon-right-arrow-1"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaCommon;
