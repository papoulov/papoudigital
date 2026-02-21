"use client";
import { useEffect } from "react";

type ScrollToSection = (id: string) => void;

const useScrollToSection: ScrollToSection = (id: string) => {
  useEffect(() => {
    if (!id) return;

    const element = document.getElementById(id);
    if (!element) return;

    const offset = 70;
    const top =
      element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, [id]);
};

export { useScrollToSection };
