export interface PricingPlan {
    id: number;
    name: string;
    monthlyPrice: string;
    yearlyPrice: string;
    features: string[];
}

export interface PricingPlanInner {
    id: number;
    title: string;
    price: string;
    duration: string;
    features: string[];
}
