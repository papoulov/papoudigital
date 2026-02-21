"use client";

import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useInView } from "react-intersection-observer";

interface ProgressBarProps {
  title: string;
  value: number; // 0–100
  duration?: number; // animation time in ms
}

const ProgressBarItem: React.FC<ProgressBarProps> = ({
  title,
  value,
  duration = 1200,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [progress, setProgress] = useState<number>(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;

      const elapsed = timestamp - startTime.current;
      const percentage = Math.min(
        Math.round((elapsed / duration) * value),
        value
      );

      setProgress(percentage);

      if (percentage < value) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTime.current = null;
    };
  }, [inView, value, duration]);

  return (
    <li>
      <div className="progress-levels" ref={ref}>
        <div className="progress-box">
          <div className="inner count-box">
            <div className="text">{title}</div>

            <div className="bar">
              <div className="bar-inner">
                <div className="skill-percent">
                  <span className="count-text">{progress}</span>
                  <span className="percent">%</span>
                </div>

                <ProgressBar
                  completed={progress}
                  maxCompleted={100}
                  bgColor="#2E72FF"
                  baseBgColor="#f1f1f1"
                  height="8px"
                  isLabelVisible={false}
                  animateOnRender={false}
                  className="progressWrapper"
                  barContainerClassName="barContainer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProgressBarItem;
