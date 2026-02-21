import p1 from "../../../public/assets/images/shop/shop-product-1-1.jpg";
import p2 from "../../../public/assets/images/shop/shop-product-1-2.jpg";
import p3 from "../../../public/assets/images/shop/shop-product-1-3.jpg";
import p4 from "../../../public/assets/images/shop/shop-product-1-4.jpg";
import p5 from "../../../public/assets/images/shop/shop-product-1-5.jpg";
import p6 from "../../../public/assets/images/shop/shop-product-1-6.jpg";
import p7 from "../../../public/assets/images/shop/shop-product-1-7.jpg";
import p8 from "../../../public/assets/images/shop/shop-product-1-8.jpg";
import p9 from "../../../public/assets/images/shop/shop-product-1-9.jpg";
import review1 from "../../../public/assets/images/shop/review-1-1.jpg";
import review2 from "../../../public/assets/images/shop/review-1-2.jpg";
import { Product, Review } from "./productType";





export const products: Product[] = [
    { id: 1, name: "Classy chair", price: "$33.00", img: p1, rating: 5 },
    { id: 2, name: "Comfy chair", price: "$68.00", img: p2, rating: 5 },
    { id: 3, name: "Boss chair", price: "$23.00", img: p3, rating: 5 },
    { id: 4, name: "Sofa chair", price: "$54.00", img: p4, rating: 5 },
    { id: 5, name: "Wooden stool", price: "$39.00", img: p5, rating: 5 },
    { id: 6, name: "Big sofa", price: "$44.00", img: p6, rating: 5 },
    { id: 7, name: "Round chair", price: "$96.00", img: p7, rating: 5 },
    { id: 8, name: "Big stool", price: "$23.00", img: p8, rating: 5 },
    { id: 9, name: "Classic chair", price: "$33.00", img: p9, rating: 5 },
];



export const reviews: Review[] = [
    {
        id: 1,
        name: "Kevin Martin",
        date: "20 July 2025 . 4:00 pm",
        message:
            "It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non dignissim.",
        image: review1,
        rating: 5,
    },
    {
        id: 2,
        name: "Sarah Albert",
        date: "20 July 2025 . 4:00 pm",
        message:
            "It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non dignissim.",
        image: review2,
        rating: 5,
    },
];