import { useState, useEffect } from 'react';
import { UserProfileService } from '../services/UserProfileService';
import { Result } from '../models/UserProfileModel';
import { useParams } from 'react-router-dom';

export const useUserProfile = () => {
    const { userId } = useParams<{ userId: string }>();
    const [userProfile, setUserProfile] = useState<Result | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (!userId) {
                setError('User ID is required');
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const data = await UserProfileService.getUserProfile(userId);

                if (data.record.length === 0) {
                    setError('No user profile found');
                }
                else {
                    setUserProfile(data.record[0]);
                    setError(null);
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setError('Failed to fetch user profile');
            } finally {
                setLoading(false);
            }
        };
        fetchUserProfile();
    }, [userId]);

    return { userProfile, loading, error };
};