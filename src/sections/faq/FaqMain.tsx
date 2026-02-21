"use client";
import { usePapouDigitalContext } from "@/components/context/usePapouDigitalContext";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useMemo, useState } from "react";

type FaqItem = {
  id: number;
  title: string;
  description: string;
};

const FaqMain: React.FC = () => {
  const { t } = usePapouDigitalContext();
  const [active, setActive] = useState(1);

  const items = useMemo<FaqItem[]>(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: t(`faqPage.q${i + 1}Title`),
        description: t(`faqPage.q${i + 1}Desc`),
      })),
    [t]
  );

  const leftItems = items.slice(0, 6);
  const rightItems = items.slice(6);

  return (
    <section className="faq-page faq-one">
      <div className="container">
        <div className="faq-one__left" style={{ maxWidth: 780, marginBottom: 28 }}>
          <div className="section-title-two text-left sec-title-animation animation-style2">
            <div className="section-title-two__tagline-box">
              <div className="section-title-two__tagline-icon-box">
                <div className="section-title-two__tagline-icon-1"></div>
                <div className="section-title-two__tagline-icon-2"></div>
              </div>
              <span className="section-title-two__tagline">{t("faqPage.tagline")}</span>
            </div>
            <h1 className="section-title-two__title title-animation">
              {t("faqPage.titleLine1")} <br />
              <span>{t("faqPage.titleLine2")}</span>
            </h1>
          </div>
          <p className="faq-one__text">{t("faqPage.intro")}</p>
          <div className="faq-one__btn-box">
            <Link href="/inner/contact" className="faq-one__btn thm-btn thm-btn-two">
              <span className="icon-right"></span> {t("faqPage.button")}
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="faq-one__right">
              <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-page-left">
                {leftItems.map((item) => (
                  <div key={item.id} className={`accrodion ${active === item.id ? "" : "active"}`}>
                    <div
                      className="accrodion-title"
                      onClick={() => setActive((prev) => (prev === item.id ? 0 : item.id))}
                    >
                      <h4>{item.title}</h4>
                    </div>
                    <motion.div
                      initial={{ y: -30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      viewport={{ amount: 0.01 }}
                      className="accrodion-content"
                      style={{ display: active === item.id ? "" : "none" }}
                    >
                      <div className="inner">
                        <p>{item.description}</p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="faq-one__right">
              <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-page-right">
                {rightItems.map((item) => (
                  <div key={item.id} className={`accrodion ${active === item.id ? "" : "active"}`}>
                    <div
                      className="accrodion-title"
                      onClick={() => setActive((prev) => (prev === item.id ? 0 : item.id))}
                    >
                      <h4>{item.title}</h4>
                    </div>
                    <motion.div
                      initial={{ y: -30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      viewport={{ amount: 0.01 }}
                      className="accrodion-content"
                      style={{ display: active === item.id ? "" : "none" }}
                    >
                      <div className="inner">
                        <p>{item.description}</p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqMain;
