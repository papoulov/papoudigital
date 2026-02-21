import type { PricingPlan, PricingPlanInner } from "./type";



export const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        name: "STARTER SITE CARE",
        monthlyPrice: "33.966942",
        yearlyPrice: "339.669421",
        features: [
            "1-5 page website setup",
            "Basic ecommerce setup (up to 20 products)",
            "Hosting and domain guidance",
            "Monthly security and plugin updates",
            "Weekly backups and uptime checks",
            "Up to 2 content or product edits per month",
            "Email support (48h response)",
        ],
    },
    {
        id: 2,
        name: "GROWTH SITE CARE",
        monthlyPrice: "89.00",
        yearlyPrice: "890.00",
        features: [
            "Up to 12 pages with custom sections",
            "On-page SEO setup",
            "Bi-weekly updates and monitoring",
            "Speed optimization and technical fixes",
            "Up to 6 content edits per month",
            "Priority support (24h response)"
        ],
    },
    {
        id: 3,
        name: "BUSINESS PRO CARE",
        monthlyPrice: "169.00",
        yearlyPrice: "1690.00",
        features: [
            "Custom website build up to 20 pages",
            "Advanced maintenance and security hardening",
            "Ecommerce or booking integration support",
            "Monthly analytics and performance report",
            "Unlimited minor content edits",
            "Priority support plus monthly strategy call"
        ],
    }
];


export const monthlyPlansInner: PricingPlanInner[] = [
        {
            id: 1,
            title: "Starter Site Care",
            price: "$33.97",
            duration: "/Per Month",
            features: [
                "1-5 page website setup",
                "Basic ecommerce setup (up to 20 products)",
                "Hosting and domain guidance",
                "Monthly security and plugin updates",
                "Weekly backups and uptime checks",
                "Up to 2 content or product edits per month",
                "Email support (48h response)",
            ],
        },
        {
            id: 2,
            title: "Growth Site Care",
            price: "$89.00",
            duration: "/Per Month",
            features: [
                "Up to 12 pages with custom sections",
                "On-page SEO setup",
                "Bi-weekly updates and monitoring",
                "Speed optimization and technical fixes",
                "Up to 6 content edits per month",
                "Priority support (24h response)",
            ],
        },
        {
            id: 3,
            title: "Business Pro Care",
            price: "$169.00",
            duration: "/Per Month",
            features: [
                "Custom website build up to 20 pages",
                "Advanced maintenance and security hardening",
                "Ecommerce or booking integration support",
                "Monthly analytics and performance report",
                "Unlimited minor content edits",
                "Priority support plus monthly strategy call",
            ],
        },
    ];
 
  export  const yearlyPlansInner: PricingPlanInner[] = [
        {
            id: 1,
            title: "Starter Site Care",
            price: "$339.67",
            duration: "/Per Year",
            features: [
                "1-5 page website setup",
                "Basic ecommerce setup (up to 20 products)",
                "Hosting and domain guidance",
                "Monthly security and plugin updates",
                "Weekly backups and uptime checks",
                "Up to 2 content or product edits per month",
                "Email support (48h response)",
            ],
        },
        {
            id: 2,
            title: "Growth Site Care",
            price: "$890.00",
            duration: "/Per Year",
            features: [
                "Up to 12 pages with custom sections",
                "On-page SEO setup",
                "Bi-weekly updates and monitoring",
                "Speed optimization and technical fixes",
                "Up to 6 content edits per month",
                "Priority support (24h response)",
            ],
        },
        {
            id: 3,
            title: "Business Pro Care",
            price: "$1,690.00",
            duration: "/Per Year",
            features: [
                "Custom website build up to 20 pages",
                "Advanced maintenance and security hardening",
                "Ecommerce or booking integration support",
                "Monthly analytics and performance report",
                "Unlimited minor content edits",
                "Priority support plus monthly strategy call",
            ],
        },
    ];
 
