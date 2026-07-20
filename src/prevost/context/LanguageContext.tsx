import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LangContextType {
  lang: Language;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') {
      document.body.style.fontFamily = '"IBM Plex Sans Arabic", sans-serif';
    } else {
      document.body.style.fontFamily = '"IBM Plex Sans Arabic", sans-serif'; // It handles both well, but we can customize
    }
  }, [lang]);

  const toggleLang = () => setLang(l => (l === 'en' ? 'ar' : 'en'));

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used within LanguageProvider');
  return context;
};
