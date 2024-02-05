import axios from 'axios';
import { FACTS_API_URL } from '../constants';

const apiMethods = {
  getRandomCatFact: async () => {
    const response = await axios.get(`${FACTS_API_URL}/random?animal_type=cat&amount=1`);

    return response.data;
  }
};

export default apiMethods
