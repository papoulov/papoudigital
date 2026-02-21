import type { LINK, NavItemSingle } from "../footer/footerType";
import type { Locale } from "@/i18n/translations";
import { getTranslation } from "@/i18n/translations";

const PAGES_LINK_KEYS: (LINK & { key: string })[] = [
    { id: 1, link: "/inner/team", value: "", key: "nav.team" },
    { id: 2, link: "/inner/team-carousel", value: "", key: "nav.teamCarousel" },
    { id: 3, link: "/inner/team-details", value: "", key: "nav.teamDetails" },
    { id: 4, link: "/inner/portfolio", value: "", key: "nav.portfolio" },
    { id: 5, link: "/inner/portfolio-details", value: "", key: "nav.portfolioDetails" },
    { id: 6, link: "/inner/testimonials", value: "", key: "nav.testimonials" },
    { id: 7, link: "/inner/testimonial-carousel", value: "", key: "nav.testimonialCarousel" },
    { id: 8, link: "/inner/pricing", value: "", key: "nav.pricing" },
    { id: 9, link: "/inner/gallery", value: "", key: "nav.gallery" },
    { id: 10, link: "/inner/faq", value: "", key: "nav.faqs" },
    { id: 11, link: "/404", value: "404 Error", key: "" },
    { id: 12, link: "/coming-soon", value: "", key: "nav.comingSoon" },
];

//  Services Menu
const SERVICES_LINK_KEYS: (LINK & { key: string })[] = [
    { id: 1, link: "/inner/services", value: "", key: "nav.services" },
    { id: 2, link: "/inner/developer", value: "", key: "nav.developer" },
    { id: 3, link: "/inner/client-portal", value: "", key: "nav.clientPortal" },
];

//  Shop Menu
const SHOP_LINK_KEYS: (LINK & { key: string })[] = [
    { id: 1, link: "/inner/products", value: "", key: "nav.products" },
    { id: 2, link: "/inner/product-details", value: "", key: "nav.productDetails" },
    { id: 3, link: "/inner/cart", value: "", key: "nav.cart" },
    { id: 4, link: "/inner/checkout", value: "", key: "nav.checkout" },
    { id: 5, link: "/inner/wishlist", value: "", key: "nav.wishlist" },
    { id: 6, link: "/inner/sign-up", value: "", key: "nav.signUp" },
    { id: 7, link: "/inner/login", value: "", key: "nav.login" },
];

//  Blog Menu
const BLOG_LINK_KEYS: (LINK & { key: string })[] = [
    { id: 1, link: "/inner/blog", value: "", key: "nav.blog" },
    { id: 2, link: "/inner/blog-carousel", value: "", key: "nav.blogCarousel" },
    { id: 3, link: "/inner/blog-list", value: "", key: "nav.blogList" },
    { id: 4, link: "/inner/blog-details", value: "", key: "nav.blogDetails" },
];

const NAV_ITEMS_SINGLE_KEYS: (NavItemSingle & { key: string })[] = [
    {
        id: 1,
        linkId: 'home',
        navItem: '',
        key: "common.home"
    },
    {
        id: 2,
        linkId: 'about',
        navItem: '',
        key: "common.about"
    },
    {
        id: 3,
        linkId: 'services',
        navItem: '',
        key: "common.services"
    },
    {
        id: 4,
        linkId: 'portfolio',
        navItem: '',
        key: "nav.portfolio"
    },
    {
        id: 5,
        linkId: 'blog',
        navItem: '',
        key: "common.blog"
    },
    {
        id: 6,
        linkId: 'contact',
        navItem: '',
        key: "common.contact"
    },
];

const localizeLinks = (locale: Locale, links: (LINK & { key: string })[]): LINK[] => {
    return links.map((item) => ({
        ...item,
        value: item.key ? getTranslation(locale, item.key) : item.value,
    }));
};

export const getPagesLinks = (locale: Locale): LINK[] => localizeLinks(locale, PAGES_LINK_KEYS);
export const getServicesLinks = (locale: Locale): LINK[] => localizeLinks(locale, SERVICES_LINK_KEYS);
export const getShopLinks = (locale: Locale): LINK[] => localizeLinks(locale, SHOP_LINK_KEYS);
export const getBlogLinks = (locale: Locale): LINK[] => localizeLinks(locale, BLOG_LINK_KEYS);

export const getSinglePageNavItems = (locale: Locale): NavItemSingle[] => {
    return NAV_ITEMS_SINGLE_KEYS.map((item) => ({
        ...item,
        navItem: getTranslation(locale, item.key),
    }));
};
