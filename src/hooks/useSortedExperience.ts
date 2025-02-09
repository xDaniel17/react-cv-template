import { useState, useEffect } from 'react';
import { ExperienceDetail } from '../models/UserProfileModel';

type SortOrder = 'asc' | 'desc';

export const useSortedExperience = (experienceList: ExperienceDetail[]) => {
    const [sortOrder, setSortOrder] = useState<SortOrder>(() => {
        const savedSortOrder = localStorage.getItem('expSortOrder');
        return savedSortOrder === 'asc' || savedSortOrder === 'desc' ? savedSortOrder : 'asc';
    });

    useEffect(() => {
        localStorage.setItem('expSortOrder', sortOrder);
    }, [sortOrder]);

    const sortedExperienceList = [...experienceList].sort((a, b) => {
        const dateA = new Date(a.start);
        const dateB = new Date(b.start);
        if (sortOrder === 'asc') {
            return dateA.getTime() - dateB.getTime();
        } else {
            return dateB.getTime() - dateA.getTime();
        }
    });

    const handleSortOrderChange = () => {
        setSortOrder(prevSortOrder => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
    };

    return {
        sortedExperienceList,
        sortOrder,
        handleSortOrderChange,
    };
};

export default useSortedExperience;