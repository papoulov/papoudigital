import type { Metadata } from "next";
import React from "react";
import TermsConditionsMain from "@/sections/legal/TermsConditionsMain";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read PAPOUDIGITAL Terms and Conditions governing website use, service engagements, payments, IP, confidentiality, and support.",
  alternates: {
    canonical: "/inner/terms-and-conditions",
  },
};

const page: React.FC = () => {
  return <TermsConditionsMain />;
};

export default page;

