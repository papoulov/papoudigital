import { StaticImageData } from "next/image";

export interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: string | StaticImageData;
    link: string;
}