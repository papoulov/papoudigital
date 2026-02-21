
import type { Metadata } from "next";
import AboutTwo from '@/sections/home-two/AboutTwo';
import BannerTwo from '@/sections/home-two/BannerTwo';
import CounterTwo from '@/sections/home-two/CounterTwo';
import FooterTwo from '@/sections/home-two/FooterTwo';
import HeaderTwo from '@/sections/home-two/HeaderTwo';
import ProcessTwo from '@/sections/home-two/ProcessTwo';
import StrickyHeaderTwo from '@/sections/home-two/StrickyHeaderTwo';
import React from 'react';

export const metadata: Metadata = {
    title: "Home",
    description:
        "PapouDigital powers Africa's digital future with practical technology services: web, mobile, cloud, ecommerce, payments, and automation.",
    alternates: {
        canonical: "/",
    },
    robots: {
        index: false,
        follow: true,
    },
};

const page: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderTwo />
            <BannerTwo />
            <AboutTwo />
            <ProcessTwo />
            <CounterTwo />
            <FooterTwo />
            <StrickyHeaderTwo />
        </div>
    );
};

export default page;
