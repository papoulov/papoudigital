"use client";

import { usePapouDigitalContext } from "@/components/context/usePapouDigitalContext";
import React from "react";

const AboutStatement: React.FC = () => {
  const { t } = usePapouDigitalContext();

  return (
    <section className="about-statement">
      <div className="container">
        <div className="about-statement__inner">
          <p className="about-statement__text">{t("aboutPage.statementText")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutStatement;
