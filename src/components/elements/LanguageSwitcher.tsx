"use client";

import { usePapouDigitalContext } from "@/components/context/usePapouDigitalContext";

interface LanguageSwitcherProps {
    light?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ light = false }) => {
    const { locale, setLocale } = usePapouDigitalContext();
    const enClass = locale === "en" ? "is-active" : "";
    const frClass = locale === "fr" ? "is-active" : "";

    return (
        <div className={`lang-switcher ${light ? "lang-switcher--light" : ""}`}>
            <span className="lang-switcher__icon fa fa-globe" aria-hidden="true"></span>
            <button type="button" className={enClass} onClick={() => setLocale("en")}>
                EN
            </button>
            <button type="button" className={frClass} onClick={() => setLocale("fr")}>
                FR
            </button>
        </div>
    );
};

export default LanguageSwitcher;
