import { StaticImageData } from "next/image";

export interface PortfolioItem {
    id: number;
    img: string | StaticImageData;
    tags: string[];
    title: string;
    link: string;
    className: string;
}
export interface Portfolio {
    id: number;
    category: string;
    title: string;
    image: string | StaticImageData;
    link: string;
}
export interface PortfolioItemThree {
    id: number;
    image: string | StaticImageData;
    title: string;
    link: string;
}

export interface PortfolioOne {
    id: number;
    image: string | StaticImageData;
    title: string;
    description: string;
    link: string;
}



