import { useState, useEffect } from 'react';
import { EducationDetail } from '../models/UserProfileModel';

type SortOrder = 'asc' | 'desc';

export const useSortedEducation = (educationList: EducationDetail[]) => {
    const [sortOrder, setSortOrder] = useState<SortOrder>(() => {
        const savedSortOrder = localStorage.getItem('sortOrder');
        return savedSortOrder === 'asc' || savedSortOrder === 'desc' ? savedSortOrder : 'asc';
    });

    useEffect(() => {
        localStorage.setItem('sortOrder', sortOrder);
    }, [sortOrder]);

    const sortedEducationList = [...educationList].sort((a, b) => {
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
        sortedEducationList,
        sortOrder,
        handleSortOrderChange,
    };
};

export default useSortedEducation;