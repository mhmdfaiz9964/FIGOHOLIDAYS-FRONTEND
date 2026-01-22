
export const CONFIG = {
  // Primary API URL from environment variables
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://admin.figoholidays.com/api/v1',
  
  // Other configuration
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env?.GEMINI_API_KEY : ''),
};

export default CONFIG;
