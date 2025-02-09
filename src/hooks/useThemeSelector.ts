import { useState, useEffect } from 'react';

export const useThemeSelector = () => {
    const [theme, setTheme] = useState<string>('system');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'system';
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const handleThemeChange = (selectedTheme: string) => {
        setTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
        applyTheme(selectedTheme);
    };

    const applyTheme = (theme: string) => {
        const stylesheet = document.getElementById('js-stylesheet') as HTMLLinkElement;

        if (!stylesheet) return;

        if (theme === 'system') {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                stylesheet.href = 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css';
            } else {
                stylesheet.href = 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css';
            }
        } else {
            stylesheet.href = theme === 'dark' ? 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css' : 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css';
        }
    };

    return { theme, handleThemeChange };
};

export default useThemeSelector;