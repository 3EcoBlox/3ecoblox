import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="duo-language-toggle">
      <button
        className={`duo-language-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`duo-language-btn ${language === 'ko' ? 'active' : ''}`}
        onClick={() => setLanguage('ko')}
        aria-label="Switch to Korean"
      >
        KO
      </button>
    </div>
  );
};

export default LanguageToggle;
