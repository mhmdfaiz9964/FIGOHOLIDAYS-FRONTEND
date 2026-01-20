const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api/v1';

const fetchApi = async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
    }
    return response.json();
};

export const getHeroes = () => fetchApi('/heroes');
export const getSettings = () => fetchApi('/settings');
export const getCategories = () => fetchApi('/categories');
export const getOffers = () => fetchApi('/offers');
export const getHotels = () => fetchApi('/hotels');
export const getReviews = () => fetchApi('/reviews');
export const getPartners = () => fetchApi('/partners');
export const getVisa = () => fetchApi('/visa');
export const getTransportations = () => fetchApi('/transportations');

export default fetchApi;
