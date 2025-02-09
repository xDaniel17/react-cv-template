import { Result } from '../models/UserProfileModel';
import useSortedExperience from '../hooks/useSortedExperience';
import '../styles/Experience.css';
import { AVAILABLE_LANGUAGES } from '../consts';

interface ExperienceProps {
    user: Result;
    language: AVAILABLE_LANGUAGES;
}

export function Experience({ user, language }: ExperienceProps) {
    const experienceData = user.data.experience;

    if (!experienceData || experienceData.list.length === 0) {
        return null;
    }

    const { sortedExperienceList, sortOrder, handleSortOrderChange } = useSortedExperience(experienceData.list);

    return (
        <div className="experience-container">
            <article style={{ padding: '0 0 10px' }}>
                <header className='sort-header'>
                    <h2 id="experience-title">{experienceData.title[language]}</h2>
                    <button
                        onClick={handleSortOrderChange}
                        className="round-button"
                        aria-label={`Sort experience by date ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}
                    >
                        <i className={`fa ${sortOrder === 'asc' ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
                    </button>
                </header>
                <ul className="experience-list" aria-labelledby="experience-title">
                    {sortedExperienceList.map((exp, index) => (
                        <li key={index} className="experience-item">
                            <section className="experience-header">
                                <strong>{exp.company}</strong>
                                <p style={{ padding: '0 0 5px', margin: '0' }}>
                                    {new Date(exp.start).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}-
                                    {exp.end ? new Date(exp.end).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : ' ...'}
                                </p>
                            </section>
                            <p style={{ padding: '0 0 5px', margin: '0' }}>{exp.position[language]}</p>
                            <ul className="description">
                                {exp.description[language].map((desc, descIndex) => (
                                    <li key={descIndex}>{desc}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    );
}

export default Experience;