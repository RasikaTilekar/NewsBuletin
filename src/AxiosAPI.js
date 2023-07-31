import axios from 'axios';

const API_KEY = 'c5e4a172354d4f46be811e1249e22807';//'5bd4c5201e66478d8070fed688d89cda';

//'fded5b2c699644f7a20658c1903f8ea2';
//c5e4a172354d4f46be811e1249e22807

const US_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
const WALL_STREET_URL = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`;
const TESLA_URL = `https://newsapi.org/v2/everything?q=tesla&from=2023-06-03&sortBy=publishedAt&apiKey=${API_KEY}`;
const APPLE_URL = `https://newsapi.org/v2/everything?q=apple&from=2023-07-02&to=2023-07-02&sortBy=popularity&apiKey=${API_KEY}`;
const TECH_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

export default {
    getUSData: () => axios.get(US_URL), // Top business headlines in the US right now
    getWallStreetData: () => axios.get(WALL_STREET_URL), // All articles published by the Wall Street Journal in the last 6 months, sorted by recent first
    getTeslaData: () => axios.get(TESLA_URL), //All articles about Tesla from the last month, sorted by recent first
    getAppleData: () => axios.get(APPLE_URL), //All articles mentioning Apple from yesterday, sorted by popular publishers first
    getTechData: () => axios.get(TECH_URL) //Top headlines from TechCrunch right now
}