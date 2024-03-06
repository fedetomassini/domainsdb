"use server"
import type { SearchResult } from "./definitions";



export const searchDomains = async (searchTerm: string): Promise<SearchResult[] | null> => {

    const limit: number = 100;

    try {
        const response = await fetch(`https://api.domainsdb.info/v1/domains/search?limit=${limit}&domain=${searchTerm}`, {
            method: 'GET',
            mode: 'cors',
        });

        const data = await response.json();
        return data.domains;
        
    } catch (error: any) {
        console.error('Error fetching data:', error.message);
        return null;
    }
};
