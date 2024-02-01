import axios from 'axios';

const apiMethods = {
  getRandomCatFact: async () => {
    const response = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1');

    return response.data;
  }
};

export default apiMethods
