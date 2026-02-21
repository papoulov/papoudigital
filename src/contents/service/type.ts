import { StaticImageData } from "next/image";

export interface ServicesTow {
    id: number;
    icon: string | StaticImageData;
    title: string;
    link: string;
    description: string;
}
export interface ServicesThree {
    id: number;
    icon: string;
    title: string;
    link: string;
    description: string;
}
export interface ServiceOneItem {
    id: number;
    icon: string | StaticImageData;
    title: string;
    link: string;
}

export interface ServingItem {
    id: number;
    icon: string;
    title: string;
}