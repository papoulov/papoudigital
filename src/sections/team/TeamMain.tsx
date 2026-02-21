import React from 'react';
import socialShape1 from "../../../public/assets/images/shapes/team-page-social-shape-1.png";
import socialShape2 from "../../../public/assets/images/shapes/team-page-social-shape-2.png";
import TextAnimation from '@/components/elements/TextAnimation';
import { teamMembersTeamPage } from '@/contents/team/team';
import { TeamMember } from '@/contents/team/teamType';
import Image from 'next/image';
import Link from 'next/link';

const TeamMain: React.FC = () => {
    return (
        <section className="team-page">
            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style2">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Team Member</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='Connect with our skilled team' textColor='black' isSpan={false} />
                        <TextAnimation text='and tap into their expertise.' isSpan={false} textColor='#6232F8' />
                    </h2>
                </div>

                {/* Team Grid */}
                <div className="row">
                    {teamMembersTeamPage.map((member: TeamMember) => (
                        <div key={member.id} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="team-page__single">
                                <div className="team-page__img-box">
                                    <div className="team-page__img">
                                        <Image src={member.image} width={258} height={261} alt={member.name} />
                                    </div>
                                </div>

                                <div className="team-page__content">
                                    <h4 className="team-page__title">
                                        <Link href={member.link}>{member.name}</Link>
                                    </h4>
                                    <p className="team-page__text">{member.position}</p>

                                    {/* Social Icons */}
                                    <div className="team-page__social">
                                        <div className="team-page__social-shape-1">
                                            <Image src={socialShape1} width={16} height={16} alt="Social Shape" />
                                        </div>
                                        <div className="team-page__social-shape-2">
                                            <Image src={socialShape2} width={24} height={24} alt="Social Shape" />
                                        </div>
                                        <a href="#"><span className="icon-pinterest"></span></a>
                                        <a href="#"><span className="icon-linkedin"></span></a>
                                        <a href="#"><span className="icon-twitter"></span></a>
                                        <a href="#"><span className="icon-facebook"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamMain;