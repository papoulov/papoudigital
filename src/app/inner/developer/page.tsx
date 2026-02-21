import type { Metadata } from "next";
import React from "react";
import DeveloperMain from "@/sections/developer/DeveloperMain";

export const metadata: Metadata = {
  title: "Developer Portal",
  description:
    "Create your developer account, access API resources, and integrate PapouDigital services into your product stack.",
  alternates: {
    canonical: "/inner/developer",
  },
};

const page: React.FC = () => {
  return <DeveloperMain />;
};

export default page;
