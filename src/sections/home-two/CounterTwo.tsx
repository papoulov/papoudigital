"use client";

import React from 'react';
import Image from 'next/image';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';

const CounterTwo: React.FC = () => {
    const { t, textOverride, asset } = usePapouDigitalContext();
    const projects = [
        {
            id: "festi",
            name: textOverride("home2.projects.cardName", "FESTI"),
            logo: asset("image.home2.counter.logo", "/assets/images/festi-logo.png"),
            status: t("common.projectsSectionStatusHome2"),
            description: t("common.projectsSectionDescHome2"),
            tags: [
                t("common.projectsSectionTag1Home2"),
                t("common.projectsSectionTag2Home2"),
                t("common.projectsSectionTag3Home2"),
            ],
        },
    ];

    return (
        <section className="projects-showcase">
            <div className="container">
                <div className="projects-showcase__header">
                    <h3 className="projects-showcase__title">{t("common.projectsSectionTitleHome2")}</h3>
                    <p className="projects-showcase__subtitle">{t("common.projectsSectionIntroHome2")}</p>
                </div>

                <div className="projects-showcase__scroller">
                    <div className="projects-showcase__track">
                        {projects.map((project) => (
                            <article className="projects-showcase__card" key={project.id}>
                                <div className="projects-showcase__card-top">
                                    <div className="projects-showcase__identity">
                                        <span className="projects-showcase__logo-wrap">
                                            <Image src={project.logo} width={28} height={28} alt={`${project.name} logo`} />
                                        </span>
                                        <h4 className="projects-showcase__project-name">{project.name}</h4>
                                    </div>
                                    <span className="projects-showcase__status-badge">{project.status}</span>
                                </div>

                                <p className="projects-showcase__description">{project.description}</p>

                                <div className="projects-showcase__meta">
                                    {project.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterTwo;
