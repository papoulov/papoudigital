import type { Locale } from "@/i18n/translations";

export interface contextType {
    isMobile: boolean;
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
    isSidebar: boolean;
    setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    isSearch: boolean;
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
    showVideoPopup: boolean;
    setShowVideoPopup: React.Dispatch<React.SetStateAction<boolean>>;
    currentVideoUrl: string;
    setCurrentVideoUrl: React.Dispatch<React.SetStateAction<string>>;
    handleVideoClick: (e: React.MouseEvent<HTMLAnchorElement>, videoUrl?: string) => void;
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
    locale: Locale;
    setLocale: React.Dispatch<React.SetStateAction<Locale>>;
    t: (key: string) => string;
    textOverride: (key: string, fallback?: string) => string;
    asset: <T extends string>(key: string, fallback: T) => string;
}
