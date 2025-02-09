import { useThemeSelector } from '../hooks/useThemeSelector';
import '../styles/ThemeSelector.css';

export const ThemeSelector = () => {
    const { theme, handleThemeChange } = useThemeSelector();

    const onThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleThemeChange(event.target.value);
    };

    return (
        <div className="theme-selector">
            <select
                id="theme"
                value={theme}
                onChange={onThemeChange}
                aria-label="Select Theme"
            >
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    );
};

export default ThemeSelector;