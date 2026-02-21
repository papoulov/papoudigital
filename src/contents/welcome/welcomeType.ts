import { StaticImageData } from "next/image";

export type WelcomeItem = {
    id: number;
    img: string | StaticImageData;
    iconClass: string;
    title: string;
    link: string;
};