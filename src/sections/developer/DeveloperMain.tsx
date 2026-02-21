"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePapouDigitalContext } from "@/components/context/usePapouDigitalContext";

const DeveloperMain: React.FC = () => {
  const { t, asset } = usePapouDigitalContext();
  const galleryImage1 = asset("image.developer.gallery.1", "/assets/images/developer1.png");
  const galleryImage2 = asset("image.developer.gallery.2", "/assets/images/developper2.png");
  const galleryImage3 = asset("image.developer.gallery.3", "/assets/images/developer3.png");

  const featureCards = [
    {
      icon: "fas fa-user-cog",
      title: t("developerPage.feature1Title"),
      text: t("developerPage.feature1Text"),
    },
    {
      icon: "fas fa-plug",
      title: t("developerPage.feature2Title"),
      text: t("developerPage.feature2Text"),
    },
    {
      icon: "fas fa-book-open",
      title: t("developerPage.feature3Title"),
      text: t("developerPage.feature3Text"),
    },
  ];

  const resources = [
    t("developerPage.resource1"),
    t("developerPage.resource2"),
    t("developerPage.resource3"),
    t("developerPage.resource4"),
  ];

  return (
    <section className="developer-portal">
      <div className="container">
        <div className="developer-portal__hero">
          <div className="developer-portal__tagline">{t("developerPage.tagline")}</div>
          <h1 className="developer-portal__title">
            {t("developerPage.titleLine1")}{" "}
            <span>{t("developerPage.titleHighlight")}</span>
            <br />
            {t("developerPage.titleLine2")}
          </h1>
          <p className="developer-portal__text">{t("developerPage.heroText")}</p>
          <div className="developer-portal__btns">
            <Link href="/inner/sign-up?source=developer" className="thm-btn thm-btn-two">
              <span className="icon-right"></span> {t("developerPage.createAccount")}
            </Link>
            <Link href="/inner/login?source=developer" className="thm-btn">
              <span className="icon-right"></span> {t("developerPage.requestAccess")}
            </Link>
          </div>
          <p className="developer-portal__text" style={{ marginTop: 12 }}>
            {t("developerPage.requestAccessHint")}
          </p>
        </div>

        <div className="row">
          {featureCards.map((item, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6">
              <div className="developer-portal__card">
                <div className="developer-portal__card-icon">
                  <i className={item.icon}></i>
                </div>
                <h3 className="developer-portal__card-title">{item.title}</h3>
                <p className="developer-portal__card-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="developer-portal__resources">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="developer-portal__resources-content">
                <h2>{t("developerPage.resourcesTitle")}</h2>
                <p>{t("developerPage.resourcesText")}</p>
                <ul className="list-unstyled developer-portal__resource-list">
                  {resources.map((item, index) => (
                    <li key={index}>
                      <span className="icon-right"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="developer-portal__gallery">
                <div className="developer-portal__gallery-item">
                  <Image src={galleryImage1} width={640} height={760} alt="Developer placeholder one" />
                </div>
                <div className="developer-portal__gallery-item">
                  <Image src={galleryImage2} width={640} height={760} alt="Developer placeholder two" />
                </div>
                <div className="developer-portal__gallery-item">
                  <Image src={galleryImage3} width={640} height={760} alt="Developer placeholder three" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperMain;
