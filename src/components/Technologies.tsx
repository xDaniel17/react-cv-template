import { AVAILABLE_LANGUAGES } from '../consts';
import { Result } from '../models/UserProfileModel';
import '../styles/Technologies.css';

interface TechnologiesProps {
    user: Result;
    language: AVAILABLE_LANGUAGES;
}

export function Technologies({ user, language }: TechnologiesProps) {
    const technologiesData = user.data.technologies;

    if (!technologiesData || technologiesData.list.length === 0) {
        return null;
    }

    return (
        <div className="technologies-container">
            <section aria-labelledby="technologies-title">
                <h2 id="technologies-title">{technologiesData.title[language]}</h2>
                <div className="badges-container">
                    {technologiesData.list.map((tech, index) => (
                        <span key={index} className="badge" aria-label={tech.name[language]}>
                            <i className={tech.iconClass} aria-hidden="true"></i> {tech.name[language]}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Technologies;