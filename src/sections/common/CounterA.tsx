"use client"
import React from 'react';
import counterShape1 from '../../../public/assets/images/shapes/counter-one-shape-1.png';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';

interface CounterItem {
    id: number;
    stop: number;
    text: string;
    delay: number;
}

const CounterA: React.FC = () => {
    const { t } = usePapouDigitalContext();
    const counterData: CounterItem[] = [
        { id: 1, stop: 240, text: t('aboutPage.counterProjects'), delay: 2 },
        { id: 2, stop: 40, text: t('aboutPage.counterAwards'), delay: 1.5 },
        { id: 3, stop: 780, text: t('aboutPage.counterReviews'), delay: 3 },
        { id: 4, stop: 130, text: t('aboutPage.counterClients'), delay: 2.5 },
    ];
    return (
        <section className="counter-one">
            <div
                className="counter-one__shape-1 float-bob-x"
                style={{ backgroundImage: `url(${counterShape1})` }}
            ></div>

            <div className="container">
                <ul className="list-unstyled counter-one__list">
                    {counterData.map((counter: CounterItem) => (
                        <li
                            key={counter.id}
                        >
                            <div className="counter-one__single">
                                <div className="counter-one__count count-box">
                                    <p
                                        className="count-text"
                                    >
                                        <AdvanceCountUp ending={counter?.stop} durations={counter?.delay} />
                                    </p>
                                    <span className="counter-one__count-plus">+</span>
                                </div>
                                <p className="counter-one__text">{counter.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CounterA;
