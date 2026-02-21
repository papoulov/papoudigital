"use client"
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { usePapouDigitalContext } from "../context/usePapouDigitalContext";

interface Props {
    text: string;
    textColor?: string;
    fontSize?: string;
    isSpan?: boolean;
    byWord?: boolean;
}

const TextAnimation: React.FC<Props> = ({ text, textColor, fontSize, isSpan = true, byWord = false }) => {
    const { locale } = usePapouDigitalContext();
    const tokens = byWord ? text.split(" ") : Array.from(text);

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.04 * i
            }
        })
    };

    const child: Variants = {
        hidden: {
            opacity: 0,
            x: 20,
            y: -20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            key={`${locale}-${text}-${byWord ? "word" : "char"}-${isSpan ? "span" : "bold"}`}
            className="normal-case"
            style={{
                whiteSpace: "normal",
                display: "inline-block",
                fontSize: `clamp(20px, 4vw, ${fontSize}px)`, // Responsive text
                lineHeight: "1.3",
                width: "100%", 
            }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {isSpan ? tokens.map((token, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    style={{
                        color: textColor
                            ? textColor === "black"
                                ? "#05173d"
                                : textColor
                            : "",
                        display: "inline-block"
                    }}
                >
                    {byWord ? `${token}\u00A0` : token === " " ? "\u00A0" : token}
                </motion.span>
            )) : tokens.map((token, index) => (
                <motion.b
                    variants={child}
                    key={index}
                    style={{
                        color: textColor
                            ? textColor === "black"
                                ? "#05173d"
                                : textColor
                            : "",
                        display: "inline-block"
                    }}
                >
                    {byWord ? `${token}\u00A0` : token === " " ? "\u00A0" : token}
                </motion.b>
            ))}
        </motion.div>
    );
};

export default TextAnimation;
