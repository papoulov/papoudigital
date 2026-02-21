"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePapouDigitalContext } from "@/components/context/usePapouDigitalContext";

const ClientPortalMain: React.FC = () => {
  const { t, asset } = usePapouDigitalContext();
  const galleryImage1 = asset("image.client.gallery.1", "/assets/images/client1.png");
  const galleryImage2 = asset("image.client.gallery.2", "/assets/images/client2.png");
  const galleryImage3 = asset("image.client.gallery.3", "/assets/images/client3.png");

  const portalFeatures = [
    {
      icon: "fas fa-user-plus",
      title: t("clientPortalPage.feature1Title"),
      text: t("clientPortalPage.feature1Text"),
    },
    {
      icon: "fas fa-tasks",
      title: t("clientPortalPage.feature2Title"),
      text: t("clientPortalPage.feature2Text"),
    },
    {
      icon: "fas fa-comments",
      title: t("clientPortalPage.feature3Title"),
      text: t("clientPortalPage.feature3Text"),
    },
  ];

  const trackingItems = [
    t("clientPortalPage.tracking1"),
    t("clientPortalPage.tracking2"),
    t("clientPortalPage.tracking3"),
    t("clientPortalPage.tracking4"),
  ];

  return (
    <section className="developer-portal">
      <div className="container">
        <div className="developer-portal__hero">
          <div className="developer-portal__tagline">{t("clientPortalPage.tagline")}</div>
          <h1 className="developer-portal__title">
            {t("clientPortalPage.titleLine1")}{" "}
            <span>{t("clientPortalPage.titleHighlight")}</span>
            <br />
            {t("clientPortalPage.titleLine2")}
          </h1>
          <p className="developer-portal__text">{t("clientPortalPage.heroText")}</p>
          <div className="developer-portal__btns">
            <Link href="/inner/sign-up?source=client" className="thm-btn thm-btn-two">
              <span className="icon-right"></span> {t("clientPortalPage.createAccount")}
            </Link>
            <Link href="/inner/login?source=client" className="thm-btn">
              <span className="icon-right"></span> {t("clientPortalPage.signIn")}
            </Link>
          </div>
        </div>

        <div className="row">
          {portalFeatures.map((item, index) => (
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
                <h2>{t("clientPortalPage.trackingTitle")}</h2>
                <p>{t("clientPortalPage.trackingText")}</p>
                <ul className="list-unstyled developer-portal__resource-list">
                  {trackingItems.map((item, index) => (
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
                  <Image src={galleryImage1} width={640} height={760} alt="Client portal placeholder one" />
                </div>
                <div className="developer-portal__gallery-item">
                  <Image src={galleryImage2} width={640} height={760} alt="Client portal placeholder two" />
                </div>
                <div className="developer-portal__gallery-item">
                  <Image src={galleryImage3} width={640} height={760} alt="Client portal placeholder three" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortalMain;
