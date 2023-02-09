import axios from '../lib/axios.js';

export default class Lightboost {
  getIntroItems = async () => axios.get('/intro/items');
}
