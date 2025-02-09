import { AVAILABLE_LANGUAGES } from '../consts';
import { Result } from '../models/UserProfileModel';
import '../styles/ContactInfo.css';

interface ContactInfoProps {
    user: Result;
    language: AVAILABLE_LANGUAGES;
}

export function ContactInfo({ user, language }: ContactInfoProps) {
    const contactInfo = user.data.contactInfo;

    if (!contactInfo) {
        return null;
    }

    return (
        <div className="contact-info-container">
            <section className="profile-photo-section">
                <img
                    src={contactInfo.profilePhotoUrl}
                    className="profile-photo"
                    alt={`${contactInfo.name}'s profile photo`}
                />
            </section>
            <aside className="profile-details">
                <article>
                    <header className="profile-header">
                        <h1 id="profile-name">{contactInfo.name}</h1>
                    </header>
                    <ul className="horizontal-list" aria-labelledby="profile-name">
                        {contactInfo.urlExternas.map((externalUrl, index) => (
                            <li key={index}>
                                <a href={externalUrl.url} className="contact-icons" aria-label={externalUrl.iconClass} target='_blank'>
                                    <i className={externalUrl.iconClass}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <h2 style={{ margin: '0 0 0 5px' }}>{contactInfo.title[language]}</h2>
                    <div className="location" aria-label={`Location: ${contactInfo.location}`}>
                        <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                        <span>{contactInfo.location}</span>
                    </div>
                </article>
            </aside>
        </div>
    );
}

export default ContactInfo;