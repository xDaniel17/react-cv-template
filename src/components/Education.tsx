import { Result } from '../models/UserProfileModel';
import useSortedEducation from '../hooks/useSortedEducation';
import '../styles/Education.css';
import { AVAILABLE_LANGUAGES } from '../consts';

interface EducationProps {
    user: Result;
    language: AVAILABLE_LANGUAGES;
}

export function Education({ user, language }: EducationProps) {
    const educationData = user.data.education;

    if (!educationData || educationData.list.length === 0) {
        return null;
    }

    const { sortedEducationList, sortOrder, handleSortOrderChange } = useSortedEducation(educationData.list);

    return (
        <div className="education-container">
            <article>
                <header className='sort-header'>
                    <h2 id="education-title">{educationData.title[language]}</h2>
                    <button
                        aria-label={`Sort education by date ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}
                        className='round-button'
                        onClick={handleSortOrderChange}
                    >
                        <i className={`fa ${sortOrder === 'asc' ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
                    </button>
                </header>

                <ul className="education-list" aria-labelledby="education-title">
                    {sortedEducationList.map((edu, index) => (
                        <li key={index} className="education-item">
                            <strong>{edu.degree[language]}</strong>
                            <p style={{ padding: '0 0 0px', margin: '0' }}>{edu.institution[language]}</p>
                            <p style={{ padding: '0 0 5px', margin: '0' }}>
                                {new Date(edu.start).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}-
                                {edu.end ? new Date(edu.end).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : ' ...'}
                            </p>
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    );
}

export default Education;