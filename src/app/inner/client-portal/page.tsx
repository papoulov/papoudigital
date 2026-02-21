import type { Metadata } from "next";
import React from "react";
import ClientPortalMain from "@/sections/client/ClientPortalMain";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "Open your client account to track project milestones, review deliverables, and collaborate with PapouDigital in real time.",
  alternates: {
    canonical: "/inner/client-portal",
  },
};

const page: React.FC = () => {
  return <ClientPortalMain />;
};

export default page;
