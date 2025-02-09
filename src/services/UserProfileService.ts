import { RootObject } from '../models/UserProfileModel';
import UserProfileData from '../mocks/UserProfile.json';
import { USE_API } from '../consts';

export class UserProfileService {

    static async getUserProfile(userId: string): Promise<RootObject> {
        if (USE_API) {
            return this.fetchFromAPI(userId);
        } else {
            return this.fetchFromJSON();
        }
    }

    private static async fetchFromAPI(userId: string): Promise<RootObject> {
        try {
            const response = await fetch(`${import.meta.env.API_URL}`, {
                headers: {
                    'X-Master-Key': import.meta.env.MASTER_KEY,
                    'X-Access-Key': import.meta.env.ACCESS_KEY,
                    'X-JSON-Path': `$..users[?(@.id=="${userId.toLowerCase()}")]`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user profile from API');
            }

            const data: RootObject = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching user profile from API:', error);
            throw error;
        }
    }

    private static fetchFromJSON(): RootObject {
        try {
            const data: RootObject = UserProfileData as unknown as RootObject;
            return data;
        } catch (error) {
            console.error('Error fetching user profile from JSON:', error);
            throw error;
        }
    }
}