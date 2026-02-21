import { StaticImageData } from "next/image";

export interface BlogPost {
    id: number;
    image: string | StaticImageData;
    date: string;
    tags: string[];
    title: string;
    text: string;
    link: string;
}

export interface BlogPage {
    id: number;
    image: string | StaticImageData;
    date: string;
    tags: string[];
    title: string;
    subtitle?: string;
    description: string;
    link: string;
}

export interface BlogsListItem {
    id: number;
    title: string;
    description: string;
    date: string;
    comments: number;
    image: string | StaticImageData;
    clientImage: string | StaticImageData;
    author: string;
    shape?: string | StaticImageData;
    link: string;
}

export interface BlogCarouselItem {
    id: number;
    title: string;
    description: string;
    image: string | StaticImageData;
    userImage: string | StaticImageData;
    userName: string;
    date: string;
    tags: string[];
    link: string;
}
 
export interface BlogOnePost {
    id: number;
    image: string | StaticImageData;
    tags: string[];
    title: string;
    text: string;
    author: {
        name: string;
        image: string | StaticImageData;
    };
    date: string;
    link: string;
}
