import { CONFIG } from './config';

const API_BASE_URL = CONFIG.API_BASE_URL;

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
export const getOffer = (id: string) => fetchApi(`/offers/${id}`);
export const getHotels = () => fetchApi('/hotels');
export const getReviews = () => fetchApi('/reviews');
export const getPartners = () => fetchApi('/partners');
export const getVisa = () => fetchApi('/visa');
export const getTransportations = () => fetchApi('/transportations');
export const getDestinations = () => fetchApi('/destinations');
export const getDestination = (id: string) => fetchApi(`/destinations/${id}`);

export default fetchApi;
