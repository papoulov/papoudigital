"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import bannerShapeOne from "../../../public/assets/images/shapes/banner-one-shape-1.png";
import bannerShapeTwo from "../../../public/assets/images/shapes/banner-one-shape-2.png";
import bannerShapeThree from "../../../public/assets/images/shapes/banner-one-shape-3.png";
import bannerShapeFour from "../../../public/assets/images/shapes/banner-one-shape-4.png";
import satisfiedClient1 from "../../../public/assets/images/resources/banner-one-satisfied-client-1-1.jpg";
import satisfiedClient2 from "../../../public/assets/images/resources/banner-one-satisfied-client-1-2.jpg";
import satisfiedClient3 from "../../../public/assets/images/resources/banner-one-satisfied-client-1-3.jpg";

import bannerMainImg from "../../../public/assets/images/resources/banner-one-img-1.png";
import TypingEffect from "@/components/elements/TypingEffect";
import AdvanceCountUp from "@/components/elements/AdvanceCountUp";


const Banner: React.FC = () => {
  return (
    <section className="banner-one relative overflow-hidden">
      {/* Background shapes */}
      <div className="banner-one__shape-bg" />
      <div className="banner-one__shape-bg-2" />
      <div className="banner-one__shape-bg-3 img-bounce" />

      {/* Decorative shapes */}
      <div className="banner-one__shape-1 text-rotate-box">
        <Image src={bannerShapeOne} alt="Decor shape 1" priority />
      </div>
      <div className="banner-one__shape-2 rotate-me">
        <Image src={bannerShapeTwo} alt="Decor shape 2" />
      </div>
      <div className="banner-one__shape-3 rotate-me">
        <Image src={bannerShapeThree} alt="Decor shape 3" />
      </div>
      <div className="banner-one__shape-4 float-bob-y">
        <Image src={bannerShapeFour} alt="Decor shape 4" />
      </div>

      <div className="container">
        {/* Title Section */}
        <div className="banner-one__title-box">
          <h5 className="banner-one__sub-title">We are ready to help you</h5>
          <h2 className="banner-one__title">
            Unlock Business Success with <br />
            <TypingEffect
              strings={[
                "Expert Consultancy",
                "Expert Team",
                "Quick Solutions",
              ]}
              typeSpeed={100}
              deleteSpeed={50}
              pauseDuration={2000}
              showCursor
            />
          </h2>
        </div>

        <div className="row items-center">
          {/* Left Content */}
          <div className="col-xl-5 col-lg-6">
            <div className="banner-one__left sec-title-animation animation-style3">
              <p className="banner-one__text-1 title-animation">
                It highlights how expert consultancy can provide businesses with
                tailored strategies, industry insights, and practical solutions
                to overcome challenges and achieve their goals.
              </p>
              <p className="banner-one__text-2 title-animation">
                By leveraging the knowledge and expertise of consultants,
                businesses can streamline operations, optimize resources, and
                stay competitive in a rapidly evolving market.
              </p>

              {/* Button + Clients */}
              <div className="banner-one__btn-and-satisfied-client-box flex items-center gap-5">
                <div className="banner-one__btn-box">
                  <Link href="/inner/contact" className="banner-one__btn thm-btn">
                    <span className="icon-right"></span> Get Started
                  </Link>
                </div>

                <div className="banner-one__satisfied-client-box flex items-center">
                  <ul className="list-unstyled banner-one__satisfied-client-list flex">
                    {[satisfiedClient1, satisfiedClient2, satisfiedClient3].map(
                      (img, i) => (
                        <li key={i} className="banner-one__satisfied-client-img">
                          <Image
                            src={img}
                            alt={`Client ${i + 1}`}
                            width={42}
                            height={42}
                            className="rounded-full object-cover"
                          />
                        </li>
                      )
                    )}
                  </ul>

                  <div className="banner-one__satisfied-client-content ml-4">
                    <div className="banner-one__satisfied-client-count count-box flex items-center">
                      <h4 className="count-text text-xl font-semibold">
                        <AdvanceCountUp ending={2000} durations={2} />
                      </h4>
                      <span className="banner-one__satisfied-client-count-plus text-xl font-bold">
                        +
                      </span>
                    </div>
                    <p className="banner-one__satisfied-client-count-text">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image with Motion */}
          <div className="col-xl-7 col-lg-6">
            <div className="banner-one__right">
              <motion.div
                initial={{ x: 90, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="banner-one__img"
              >
                <Image
                  src={bannerMainImg}
                  alt="Main Banner"
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
