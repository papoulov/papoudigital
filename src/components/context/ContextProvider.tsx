"use client"
import React, { useCallback, useEffect, useState } from 'react';
import FinrisContext from './FinrisContext';
import { contextType } from './contextType';
import { getTranslation, type Locale } from '@/i18n/translations';

const normalizeBrowserLocale = (language: string | undefined): Locale => {
    if (!language) return "en";
    return language.toLowerCase().startsWith("fr") ? "fr" : "en";
};

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSearch, setIsSearch] = useState(false)
    const [showVideoPopup, setShowVideoPopup] = useState<boolean>(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");
    const [activeSection, setActiveSection] = useState<string>("home");
    const [locale, setLocale] = useState<Locale>("en");
    const [isLocaleReady, setIsLocaleReady] = useState<boolean>(false);
    const [textOverrides, setTextOverrides] = useState<Record<string, string>>({});
    const [appConfig, setAppConfig] = useState<Record<string, string>>({});

    useEffect(() => {
        const savedLocale = window.localStorage.getItem("papoudigital-locale");
        if (savedLocale === "en" || savedLocale === "fr") {
            setLocale(savedLocale);
            setIsLocaleReady(true);
            return;
        }

        const browserLocale = normalizeBrowserLocale(
            window.navigator.languages?.[0] || window.navigator.language
        );
        setLocale(browserLocale);
        setIsLocaleReady(true);
    }, []);

    useEffect(() => {
        if (!isLocaleReady) return;
        window.localStorage.setItem("papoudigital-locale", locale);
        document.documentElement.lang = locale;
    }, [locale, isLocaleReady]);

    useEffect(() => {
        const loadPublicOverrides = async () => {
            try {
                const res = await fetch("/api/public-content", { cache: "no-store" });
                if (!res.ok) return;
                const data = (await res.json()) as {
                    textOverrides?: Record<string, string>;
                    appConfig?: Record<string, string>;
                };
                setTextOverrides(data.textOverrides ?? {});
                setAppConfig(data.appConfig ?? {});
            } catch {
                // fallback silently to static app content
            }
        };

        void loadPublicOverrides();
    }, []);

    const t = useCallback((key: string): string => {
        const directOverride = textOverrides[key];
        if (typeof directOverride === "string" && directOverride.trim().length > 0) {
            return directOverride;
        }

        const appConfigOverride = appConfig[`text.${key}`];
        if (typeof appConfigOverride === "string" && appConfigOverride.trim().length > 0) {
            return appConfigOverride;
        }

        return getTranslation(locale, key);
    }, [locale, textOverrides, appConfig]);

    const textOverride = useCallback(
        (key: string, fallback = ""): string => {
            const fromBlocks = textOverrides[key];
            if (typeof fromBlocks === "string" && fromBlocks.trim().length > 0) {
                return fromBlocks;
            }
            const fromConfig = appConfig[`text.${key}`];
            if (typeof fromConfig === "string" && fromConfig.trim().length > 0) {
                return fromConfig;
            }
            return fallback;
        },
        [textOverrides, appConfig]
    );

    const asset = useCallback(
        <T extends string>(key: string, fallback: T): string => {
            const override = appConfig[key];
            if (typeof override === "string" && override.trim().length > 0) return override;
            return fallback;
        },
        [appConfig]
    );

    const handleVideoClick = (
        e: React.MouseEvent<HTMLAnchorElement>, videoUrl: string = "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1"
    ): void => {
        e.preventDefault();
        setCurrentVideoUrl(videoUrl);
        setShowVideoPopup(true);
    };
    const info: contextType = {
        isMobile, setIsMobile,
        isSidebar, setIsSidebar,
        isSearch, setIsSearch,
        showVideoPopup, setShowVideoPopup,
        currentVideoUrl, setCurrentVideoUrl,
        handleVideoClick,
        activeSection, setActiveSection,
        locale, setLocale,
        t,
        textOverride,
        asset
    }

    return (
        <FinrisContext.Provider value={info}>
            {children}
        </FinrisContext.Provider>
    );
};

export default ContextProvider;
