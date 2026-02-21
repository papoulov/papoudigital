"use client";
import React from "react";
import serviceImg1 from "../../../public/assets/images/transform1.png";
import serviceImg2 from "../../../public/assets/images/africa2.png";
import pointsImg from "../../../public/assets/images/serious1.png";
import icon1 from "../../../public/assets/images/icon/services-details-icon-1.png";
import icon2 from "../../../public/assets/images/icon/services-details-icon-2.png";
import icon3 from "../../../public/assets/images/icon/services-details-icon-3.png";
import icon4 from "../../../public/assets/images/icon/services-details-icon-4.png";
import Image from "next/image";
import ProgressBarItem from "@/components/elements/Progresbar";
import Link from "next/link";
import ServicesList from "../common/ServicesList";
import { usePapouDigitalContext } from "@/components/context/usePapouDigitalContext";

interface Skill {
  name: string;
  percent: number;
}

const DigitalMain: React.FC = () => {
  const { t } = usePapouDigitalContext();

  const skills: Skill[] = [
    { name: t("servicesPage.digital.skill1"), percent: 94 },
    { name: t("servicesPage.digital.skill2"), percent: 91 },
    { name: t("servicesPage.digital.skill3"), percent: 88 },
  ];

  const featureLeft = [
    t("servicesPage.digital.feature1"),
    t("servicesPage.digital.feature2"),
    t("servicesPage.digital.feature3"),
  ];

  const featureRight = [
    t("servicesPage.digital.feature4"),
    t("servicesPage.digital.feature5"),
    t("servicesPage.digital.feature6"),
  ];

  const cards = [
    { icon: icon1, text: t("servicesPage.digital.card1") },
    { icon: icon2, text: t("servicesPage.digital.card2") },
    { icon: icon3, text: t("servicesPage.digital.card3") },
    { icon: icon4, text: t("servicesPage.digital.card4") },
  ];

  const whyPoints = [
    t("servicesPage.digital.whyPoint1"),
    t("servicesPage.digital.whyPoint2"),
    t("servicesPage.digital.whyPoint3"),
    t("servicesPage.digital.whyPoint4"),
  ];

  return (
    <section className="services-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="services-details__left">
              <div className="services-details__img">
                <Image src={serviceImg1} width={850} height={400} alt="Digital services" />
              </div>

              <div className="services-details__content">
                <h3 className="services-details__title-1">{t("servicesPage.digital.title1")}</h3>
                <div className="services-details__shape-1"></div>
                <p className="services-details__text-1">{t("servicesPage.digital.text1")}</p>

                <h3 className="services-details__title-2">{t("servicesPage.digital.title2")}</h3>
                <p className="services-details__text-2">{t("servicesPage.digital.text2")}</p>

                <div className="services-details__points-box">
                  <ul className="services-details__points-list list-unstyled">
                    {featureLeft.map((item) => (
                      <li key={item}><span className="icon-check"></span> {item}</li>
                    ))}
                  </ul>

                  <ul className="services-details__points-list list-unstyled">
                    {featureRight.map((item) => (
                      <li key={item}><span className="icon-check"></span> {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="services-details__single-service-box">
                  <div className="row">
                    {cards.map((item) => (
                      <div key={item.text} className="col-xl-3 col-lg-6 col-md-6">
                        <div className="services-details__single-service">
                          <div className="services-details__single-icon">
                            <Image src={item.icon} width={41} height={40} alt={item.text} />
                          </div>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="services-details__progress-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="services-details__progress-left">
                        <h3 className="services-details__progress-left-title">{t("servicesPage.digital.impactTitle")}</h3>
                        <p className="services-details__progress-left-text">{t("servicesPage.digital.impactText")}</p>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                      <div className="services-details__progress-right">
                        <ul className="services-details__progress-list list-unstyled">
                          {skills.map((skill, index) => (
                            <ProgressBarItem key={index} title={skill.name} value={skill.percent} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="services-details__title-3">{t("servicesPage.digital.whyTitle")}</h3>
                <p className="services-details__text-3">{t("servicesPage.digital.whyText")}</p>

                <div className="services-details__points-and-img">
                  <div className="row">
                    <div className="col-xl-6">
                      <ul className="services-details__points-1 list-unstyled">
                        {whyPoints.map((item) => (
                          <li key={item}><span className="icon-check"></span> {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-xl-6">
                      <div className="services-details__points-img">
                        <Image src={pointsImg} width={379} height={323} alt="Service points" />
                      </div>
                    </div>
                  </div>
                </div>

                <p className="services-details__text-4">{t("servicesPage.digital.text4")}</p>

                <div className="services-details__img-two">
                  <Image src={serviceImg2} width={852} height={300} alt="Service delivery" />
                </div>

                <h3 className="services-details__title-4">{t("servicesPage.common.getStarted")}</h3>
                <p className="services-details__text-5">{t("servicesPage.digital.text5")}</p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-5">
            <div className="services-details__right">
              <div className="services-details__more-services">
                <h3>{t("servicesPage.common.moreServices")}</h3>
                <span></span>
                <ServicesList />
              </div>

              <div className="services-details__contact-box">
                <h3>{t("servicesPage.common.contactUs")}</h3>
                <span></span>
                <p className="services-details__contact-text">{t("servicesPage.digital.contactText")}</p>
                <div className="services-details__contact-btn-box">
                  <Link href="/inner/contact" className="services-details__contact-btn thm-btn">
                    <i className="icon-right"></i> {t("servicesPage.common.sendMessage")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMain;
