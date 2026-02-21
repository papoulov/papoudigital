import type { Metadata } from "next";
import React from "react";
import PrivacyPolicyMain from "@/sections/legal/PrivacyPolicyMain";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the PAPOUDIGITAL Privacy Policy about data collection, processing, security, rights, and legal compliance.",
  alternates: {
    canonical: "/inner/privacy-policy",
  },
};

const page: React.FC = () => {
  return <PrivacyPolicyMain />;
};

export default page;

