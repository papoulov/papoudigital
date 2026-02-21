import React from 'react';
import processShapeBg from '../../../public/assets/images/shapes/process-two-shape-bg.png';
import processShape3 from '../../../public/assets/images/shapes/process-two-shape-3.png';
import processShape4 from '../../../public/assets/images/shapes/process-two-shape-4.png';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import { processData } from '@/contents/process/process';
import { ProcessItem } from '@/contents/process/processType';


const ProcessTwo: React.FC = () => {
    return (
        <section className="process-two">
            <div className="process-two__shape-bg" style={{ backgroundImage: `url(${processShapeBg})` }} ></div>
            <div className="process-two__shape-3 float-bob-x">
                <Image src={processShape3} width={139} height={143} alt="Shape 3" />
            </div>
            <div className="process-two__shape-4 float-bob-y">
                <Image src={processShape4} width={238} height={252} alt="Shape 4" />
            </div>
            <div className="container">
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Working Process</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='We use the most effective' textColor='black' isSpan={false} />
                        <TextAnimation text='methods to build a brand' textColor='#6232F8' isSpan={false} />
                    </h2>
                </div>
                <div className="process-two__inner">
                    <ul className="list-unstyled row">
                        {processData.map((item: ProcessItem) => (
                            <li
                                key={item.id}
                                className={`col-xl-3 col-lg-6 col-md-6 wow ${item.animation}`}
                                data-wow-delay="100ms"
                            >
                                <div className="process-two__single">
                                    <div
                                        className={
                                            item.shape.includes('shape-1')
                                                ? 'process-two__shape-1'
                                                : 'process-two__shape-2'
                                        }
                                        style={{ backgroundImage: `url(${item.shape})` }}
                                    ></div>

                                    <div className="process-two__icon">
                                        <Image src={item.icon} width={48} height={48} alt={item.title} />
                                    </div>

                                    <h3 className="process-two__title">{item.title}</h3>
                                    <p className="process-two__text">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProcessTwo;