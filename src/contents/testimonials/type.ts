import { StaticImageData } from "next/image";

export interface Testimonial {
    id: number;
    image: string | StaticImageData;
    name: string;
    position: string;
    text: string;
    rating: number;
}

export interface TestimonialTwo {
    id: number;
    name: string;
    title: string;
    image: string | StaticImageData;
    text: string;
    link: string;
}

export interface TestimonialPage {
    id: number;
    name: string;
    role: string;
    image: string | StaticImageData;
    text: string;
    rating: number;
}
