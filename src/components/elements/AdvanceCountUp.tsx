"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
type AdvanceCountUpProps = {
    ending?: number;
    durations?: number;
};
const AdvanceCountUp: React.FC<AdvanceCountUpProps> = ({
    ending = 32,
    durations = 3,
}) => {
    const [animationRef, animationInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    return (
        <span ref={animationRef}>
            {animationInView
                &&
                <CountUp
                    start={0}
                    end={ending}
                    duration={durations}
                    separator=","
                />
            }
        </span>
    );
};

export default AdvanceCountUp;
