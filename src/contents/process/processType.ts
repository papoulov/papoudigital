import { StaticImageData } from "next/image";

export interface ProcessItem {
  id: number;
  title: string;
  description: string;
  icon: string | StaticImageData;
  shape: string;
  animation: string;
}

export interface ProcessStepThree {
    id: number;
    icon: string;
    title: string;
    text: string;
    delay: number;
    reverse?: boolean;
}

export interface ProcessOneItem {
    id: number;
    title: string;
    description: string;
    icon: string| StaticImageData;

}