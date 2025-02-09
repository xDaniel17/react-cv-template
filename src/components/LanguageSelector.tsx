import React from 'react';
import '../styles/LanguageSelector.css';
import { AVAILABLE_LANGUAGES } from '../consts';

interface LanguageSelectorProps {
    selectedLanguage: AVAILABLE_LANGUAGES;
    onLanguageChange: (language: string) => void;
    userLanguages: string[];
}

export const LanguageSelector = ({ selectedLanguage, onLanguageChange, userLanguages }: LanguageSelectorProps) => {
    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onLanguageChange(event.target.value);
    };

    const languageOptions = {
        en: 'English',
        es: 'Español',
        it: 'Italiano',
        fr: 'Frances',
        pt: 'Português'
    };

    return (
        <div className="language-selector">
            <select
                id="language"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                aria-label="Select Language"
            >
                {userLanguages.map((lang) => (
                    <option key={lang} value={lang}>
                        {languageOptions[lang as keyof typeof languageOptions]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;