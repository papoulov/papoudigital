
import portfolioImg1 from '../../../public/assets/images/project/portfolio-two-1-1.jpg';
import portfolioImg2 from '../../../public/assets/images/project/portfolio-two-1-2.jpg';
import portfolioImg3 from '../../../public/assets/images/project/portfolio-two-1-3.jpg';
import portfolioImg4 from '../../../public/assets/images/project/portfolio-two-1-4.jpg';
import portfolioImg5 from '../../../public/assets/images/project/portfolio-two-1-5.jpg';
import portfolioThreeImg1 from '../../../public/assets/images/project/portfolio-three-1-1.jpg';
import portfolioThreeImg2 from '../../../public/assets/images/project/portfolio-three-1-2.jpg';
import portfolioThreeImg3 from '../../../public/assets/images/project/portfolio-three-1-3.jpg';
import portfolioThreeImg4 from '../../../public/assets/images/project/portfolio-three-1-4.jpg';

import portfolioPageImg1 from "../../../public/assets/images/project/portfolio-page-1-1.jpg";
import portfolioPageImg2 from "../../../public/assets/images/project/portfolio-page-1-2.jpg";
import portfolioPageImg3 from "../../../public/assets/images/project/portfolio-page-1-3.jpg";
import portfolioPageImg4 from "../../../public/assets/images/project/portfolio-page-1-4.jpg";
import portfolioPageImg5 from "../../../public/assets/images/project/portfolio-page-1-5.jpg";
import portfolioPageImg6 from "../../../public/assets/images/project/portfolio-page-1-6.jpg";
import type { Portfolio, PortfolioItem, PortfolioItemThree, PortfolioOne } from './portfolioType';

export const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        img: portfolioImg1,
        tags: ['#UserInterface', '#UserExperience'],
        title: 'AI-Powered Solutions',
        link: '/inner/portfolio-details',
        className: 'swiper-slide--one',
    },
    {
        id: 2,
        img: portfolioImg2,
        tags: ['#UserInterface', '#UserExperience'],
        title: 'Creative UI/UX Design',
        link: '/inner/portfolio-details',
        className: 'swiper-slide--two',
    },
    {
        id: 3,
        img: portfolioImg3,
        tags: ['#UserInterface', '#UserExperience'],
        title: 'Smart Product Branding',
        link: '/inner/portfolio-details',
        className: 'swiper-slide--three',
    },
    {
        id: 4,
        img: portfolioImg4,
        tags: ['#UserInterface', '#UserExperience'],
        title: 'Business Growth Strategy',
        link: '/inner/portfolio-details',
        className: 'swiper-slide--four',
    },
    {
        id: 5,
        img: portfolioImg5,
        tags: ['#UserInterface', '#UserExperience'],
        title: 'E-Commerce Dashboard',
        link: '/inner/portfolio-details',
        className: 'swiper-slide--five',
    },
    {
        id: 6,
        img: portfolioImg1,
        tags: ['#UserInterface', '#UserExperience'],
        title: 'AI-Powered Solutions',
        link: '/inner/portfolio-details',
        className: 'swiper-slide--one',
    },
    {
        id: 7,
        img: portfolioImg2,
        tags: ['#UserInterface', '#UserExperience'],
        title: 'Creative UI/UX Design',
        link: '/inner/portfolio-details',
        className: 'swiper-slide--two',
    },
    {
        id: 8,
        img: portfolioImg3,
        tags: ['#UserInterface', '#UserExperience'],
        title: 'Smart Product Branding',
        link: '/inner/portfolio-details',
        className: 'swiper-slide--three',
    },
    {
        id: 9,
        img: portfolioImg4,
        tags: ['#UserInterface', '#UserExperience'],
        title: 'Business Growth Strategy',
        link: '/inner/portfolio-details',
        className: 'swiper-slide--four',
    },
    {
        id: 10,
        img: portfolioImg5,
        tags: ['#UserInterface', '#UserExperience'],
        title: 'E-Commerce Dashboard',
        link: '/inner/portfolio-details',
        className: 'swiper-slide--five',
    },
];



export const portfolioItemsThree: PortfolioItemThree[] = [
    {
        id: 1,
        image: portfolioThreeImg1,
        title: 'Social Media Marketing & Ads Campaign',
        link: '/inner/portfolio-details',
    },
    {
        id: 2,
        image: portfolioThreeImg2,
        title: 'Creative Digital Branding Campaign',
        link: '/inner/portfolio-details',
    },
    {
        id: 3,
        image: portfolioThreeImg3,
        title: 'Web Application Development Project',
        link: '/inner/portfolio-details',
    },
    {
        id: 4,
        image: portfolioThreeImg4,
        title: 'UX/UI Design for Fintech Startup',
        link: '/inner/portfolio-details',
    },
    {
        id: 5,
        image: portfolioThreeImg1,
        title: 'Social Media Marketing & Ads Campaign',
        link: '/inner/portfolio-details',
    },
    {
        id: 6,
        image: portfolioThreeImg2,
        title: 'Creative Digital Branding Campaign',
        link: '/inner/portfolio-details',
    },
];


export const portfolioPageData: Portfolio[] = [
    {
        id: 1,
        category: "#Social Media Management",
        title: "Boosting Brand Visibility: A Social Media Revamp Success Story",
        image: portfolioPageImg1,
        link: '/inner/portfolio-details',
    },
    {
        id: 2,
        category: "#Content Creation and Strategy",
        title: "Optimizing SEO for Increased Conversions: A Comprehensive Approach",
        image: portfolioPageImg2,
        link: '/inner/portfolio-details',
    },
    {
        id: 3,
        category: "#Search Engine Optimization (SEO)",
        title: "Enhancing Engagement: Strategies for a Thriving Online Community",
        image: portfolioPageImg3,
        link: '/inner/portfolio-details',
    },
    {
        id: 4,
        category: "#Digital Advertising",
        title: "Driving Traffic Through Targeted Advertising: A Case Study",
        image: portfolioPageImg4,
        link: '/inner/portfolio-details',
    },
    {
        id: 5,
        category: "#Brand Development and Strategy",
        title: "Tailored Digital Marketing Strategies for Startup Growth",
        image: portfolioPageImg5,
        link: '/inner/portfolio-details',
    },
    {
        id: 6,
        category: "#Performance Measurement",
        title: "Leveraging Technology for Effective Campaign Management",
        image: portfolioPageImg6,
        link: '/inner/portfolio-details',
    },
];





export const portfolioOneItems: PortfolioOne[] = [
    {
        id: 1,
        image: portfolioImg1,
        title: "Social Media Marketing & Ads Campaign",
        description: "Creating and managing promotional content and advertisements across social media platforms to enhance brand visibility.",
        link: '/inner/portfolio-details'
    },
    {
        id: 2,
        image: portfolioImg2,
        title: "Social Media Marketing & Ads Campaign",
        description: "Creating and managing promotional content and advertisements across social media platforms to enhance brand visibility.",
        link: '/inner/portfolio-details'
    },
    {
        id: 3,
        image: portfolioImg3,
        title: "Social Media Marketing & Ads Campaign",
        description: "Creating and managing promotional content and advertisements across social media platforms to enhance brand visibility.",
        link: '/inner/portfolio-details'
    },
    {
        id: 4,
        image: portfolioImg4,
        title: "Social Media Marketing & Ads Campaign",
        description: "Creating and managing promotional content and advertisements across social media platforms to enhance brand visibility.",
        link: '/inner/portfolio-details'
    },
    {
        id: 5,
        image: portfolioImg1,
        title: "Social Media Marketing & Ads Campaign",
        description: "Creating and managing promotional content and advertisements across social media platforms to enhance brand visibility.",
        link: '/inner/portfolio-details'
    },
    {
        id: 6,
        image: portfolioImg2,
        title: "Social Media Marketing & Ads Campaign",
        description: "Creating and managing promotional content and advertisements across social media platforms to enhance brand visibility.",
        link: '/inner/portfolio-details'
    },
    {
        id: 7,
        image: portfolioImg3,
        title: "Social Media Marketing & Ads Campaign",
        description: "Creating and managing promotional content and advertisements across social media platforms to enhance brand visibility.",
        link: '/inner/portfolio-details'
    },
    {
        id: 8,
        image: portfolioImg4,
        title: "Social Media Marketing & Ads Campaign",
        description: "Creating and managing promotional content and advertisements across social media platforms to enhance brand visibility.",
        link: '/inner/portfolio-details'
    }
];
