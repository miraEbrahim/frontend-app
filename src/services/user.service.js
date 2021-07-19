import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
  getDevBoard() {
    return axios.get(API_URL + 'dev', { headers: authHeader() });
  }
  getOnboardBoard() {
    return axios.get(API_URL + 'onboard', { headers: authHeader() });
  }

  getPsBoard() {
    return axios.get(API_URL + 'ps', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
