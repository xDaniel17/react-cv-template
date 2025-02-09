import { AVAILABLE_LANGUAGES } from '../consts';
import { Result } from '../models/UserProfileModel';
import '../styles/About.css';

interface AboutProps {
    user: Result;
    language: AVAILABLE_LANGUAGES;
}

export function About({ user, language }: AboutProps) {
    const aboutData = user.data.about;

    if (!aboutData) {
        return null;
    }

    return (
        <div className="about-container">
            <section aria-labelledby="about-title">
                <h2 id="about-title">{aboutData.title[language]}</h2>
                <p>{aboutData.description[language]}</p>
            </section>
        </div>
    );
}

export default About;