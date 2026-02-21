import { StaticImageData } from "next/image";

export interface Product {
    id: number;
    name: string;
    price: string;
    img: string | StaticImageData;
    rating: number;
}

export interface Review {
    id: number;
    name: string;
    date: string;
    message: string;
    image: string | StaticImageData;
    rating: number;
}